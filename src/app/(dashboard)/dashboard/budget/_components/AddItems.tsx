"use client";

import { IncomeSchema, ExpenseSchema, SavingsSchema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CurrencyInput, Input, SelectInput } from "@/components/Inputs";
import { addIncomeAction } from "@/app/actions/income";
import Modal from "@/components/Modal";
import useModal from "@/hooks/useModal";
import {
  FREQUENCY_OPTIONS,
  EXPENSE_CATEGORY_OPTIONS,
  INCOME_CATEGORY_OPTIONS,
  SAVINGS_CATEGORY_OPTIONS,
} from "@/lib/constants";
import { Button } from "@tremor/react";

export function AddIncome() {
  const { isOpen, openModal, closeModal } = useModal();

  const {
    register,
    control,
    trigger,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(IncomeSchema),
  });

  const addIncome = async () => {
    // Validate the form
    trigger();
    if (!isValid) return;
    const formData = new FormData();
    formData.append("name", getValues("name"));
    formData.append("amount", getValues("amount"));
    formData.append("frequency", getValues("frequency"));
    formData.append("category", getValues("category"));

    // Call the server action
    const result = await addIncomeAction(formData);
    console.log(result);
  };

  return (
    <>
      <Button className="w-full sm:w-fit block mt-3" onClick={openModal}>
        Add income
      </Button>

      <Modal isOpen={isOpen} close={closeModal} title="Add Income">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <Input
              label="Name"
              id="name"
              type="text"
              placeholder="Netflix"
              register={register("name")}
              error={errors?.name?.message?.toString()}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <CurrencyInput
              label="Amount"
              id="amount"
              name="amount"
              control={control}
              register={register("amount")}
              error={errors?.amount?.message?.toString()}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <SelectInput
              label="Frequency"
              id="frequency"
              options={FREQUENCY_OPTIONS}
              control={control}
              error={errors?.category?.message?.toString()}
            />
          </div>

          <div className="col-span-2">
            <SelectInput
              label="Category"
              id="category"
              options={INCOME_CATEGORY_OPTIONS}
              control={control}
              error={errors?.category?.message?.toString()}
            />
          </div>
        </div>

        <Button className="mt-14" type="submit">
          Add income
        </Button>
      </Modal>
    </>
  );
}
