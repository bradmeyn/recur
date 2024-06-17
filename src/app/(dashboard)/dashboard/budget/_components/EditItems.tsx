"use client";

import { IncomeSchema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CurrencyInput, Input, SelectInput } from "@components/Inputs";
import { RiPencilLine } from "@remixicon/react";
import { updateIncomeAction } from "@/lib/actions/income";
import Modal from "@components/Modal";
import useModal from "@hooks/useModal";
import { FREQUENCY_OPTIONS, INCOME_CATEGORY_OPTIONS } from "@/lib/constants";
import { Button } from "@tremor/react";
import useSupabase from "@hooks/useSupabase";
import { IncomeWithTotal } from "@/lib/types/data";

export function EditIncome({ income }: { income: IncomeWithTotal }) {
  const { isOpen, openModal, closeModal } = useModal();
  const { user, loading } = useSupabase();

  const {
    register,
    control,
    trigger,
    getValues,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(IncomeSchema),
    defaultValues: {
      name: income.name,
      amount: income.amount || 0,
      frequency: income.frequency,
      category: income.category || "",
    },
  });

  const addIncome = async () => {
    // Validate the form
    trigger();
    if (!isValid) {
      console.log("Form is invalid");
      console.log(errors);
      return;
    }

    handleClose();
  };

  const handleClose = () => {
    reset();
    closeModal();
  };

  return (
    <>
      <button
        className="hover:text-tremor-brand hover:bg-slate-200 p-2 rounded"
        onClick={openModal}
      >
        <RiPencilLine size={20} />
      </button>

      <Modal isOpen={isOpen} close={handleClose} title="Add Income">
        <form action={addIncome}>
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
            Update
          </Button>
        </form>
      </Modal>
    </>
  );
}
