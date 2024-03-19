"use client";

import { useState } from "react";
import { IncomeSchema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CurrencyInput, Input, SelectInput } from "@/components/Inputs";
import { FREQUENCY_OPTIONS } from "@/lib/constants";
import { Button, Dialog, DialogPanel } from "@tremor/react";
import { RiCloseFill } from "@remixicon/react";

export function AddIncome() {
  const [isOpen, setIsOpen] = useState(false);
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(IncomeSchema),
  });

  const handleClick = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <>
      <Button
        className="w-full sm:w-fit sm:ml-auto block mt-3"
        onClick={openDialog}
      >
        Add income
      </Button>

      <Dialog open={isOpen} static={true} onClose={(val) => setIsOpen(val)}>
        <DialogPanel className="overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2>Add Income</h2>
            <button onClick={closeDialog}>
              <RiCloseFill
                size={40}
                className="text-slate-400 hover:bg-slate-100 p-1 rounded"
              />
            </button>
          </div>

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
                options={[{ label: "Food", value: "food" }]}
                control={control}
                error={errors?.category?.message?.toString()}
              />
            </div>
          </div>

          <Button className="mt-14" type="submit" onClick={handleClick}>
            Add income
          </Button>
        </DialogPanel>
      </Dialog>
    </>
  );
}
