"use client";

import { IncomeSchema, ExpenseSchema, SavingsSchema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CurrencyInput, Input, SelectInput } from "@/components/Inputs";
import { addIncomeAction } from "@/lib/actions/income";
import Modal from "@/components/Modal";
import useModal from "@/hooks/useModal";
import {
  EXPENSE_CATEGORY_OPTIONS,
  FREQUENCY_OPTIONS,
  INCOME_CATEGORY_OPTIONS,
} from "@/lib/constants";
import { Button } from "@tremor/react";

export function AddIncome({ userId }: { userId: string }) {
  const { isOpen, openModal, closeModal } = useModal();

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
      name: "",
      amount: "",
      frequency: "",
      category: "",
      userId: userId,
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
    const formData = new FormData();
    formData.append("name", getValues("name"));
    formData.append("amount", getValues("amount"));
    formData.append("frequency", getValues("frequency"));
    formData.append("category", getValues("category"));
    formData.append("userId", userId);

    // Call the server action
    const result = await addIncomeAction(formData);
    console.log(result);
    handleClose();
  };

  const handleClose = () => {
    reset();
    closeModal();
  };

  return (
    <>
      <Button className="w-full sm:w-fit block" onClick={openModal}>
        Add
      </Button>

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
            Add income
          </Button>
        </form>
      </Modal>
    </>
  );
}

export function AddExpense({ userId }: { userId: string }) {
  const { isOpen, openModal, closeModal } = useModal();

  const {
    register,
    control,
    trigger,
    getValues,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(ExpenseSchema),
    defaultValues: {
      name: "",
      amount: "",
      frequency: "",
      category: "",
      userId: userId,
    },
  });

  const addExpense = async () => {
    // Validate the form
    trigger();
    if (!isValid) {
      console.log("Form is invalid");
      console.log(errors);
      return;
    }
    const formData = new FormData();
    formData.append("name", getValues("name"));
    formData.append("amount", getValues("amount"));
    formData.append("frequency", getValues("frequency"));
    formData.append("category", getValues("category"));
    formData.append("userId", userId);

    alert("Adding expense...");

    // Call the server action
    const result = await addIncomeAction(formData);
    console.log(result);
    handleClose();
  };

  const handleClose = () => {
    reset();
    closeModal();
  };

  return (
    <>
      <Button className="w-full sm:w-fit block" onClick={openModal}>
        Add
      </Button>

      <Modal isOpen={isOpen} close={handleClose} title="Add Expense">
        <form action={addExpense}>
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
                options={EXPENSE_CATEGORY_OPTIONS}
                control={control}
                error={errors?.category?.message?.toString()}
              />
            </div>
          </div>

          <Button className="mt-14" type="submit">
            Add expense
          </Button>
        </form>
      </Modal>
    </>
  );
}
