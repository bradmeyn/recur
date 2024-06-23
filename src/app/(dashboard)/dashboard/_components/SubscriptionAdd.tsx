"use client";

import { subscriptionSchema } from "../schema";
import { addSubscriptionAction } from "../actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CurrencyInput, Input, SelectInput } from "@components/Inputs";

import Modal from "@/lib/components/Modal";
import useModal from "@/lib/hooks/useModal";
import { CATEGORY_OPTIONS, FREQUENCY_OPTIONS } from "@/lib/constants";
import { Button } from "@tremor/react";
import useSupabase from "@/lib/hooks/useSupabase";

export default function SubscriptionAdd() {
  const { isOpen, openModal, closeModal } = useModal();

  const { user } = useSupabase();

  const {
    register,
    control,
    trigger,
    getValues,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(subscriptionSchema),
    defaultValues: {
      name: "",
      amount: "0",
      frequency: "",
      category: "",
    },
  });

  async function addSubscription() {
    // Validate the form
    trigger();
    if (!isValid) return;

    const formData = new FormData();
    formData.append("name", getValues("name"));
    formData.append("amount", getValues("amount"));
    formData.append("frequency", getValues("frequency"));
    formData.append("category", getValues("category"));
    formData.append("userId", user!.id);

    // Call the server action
    const result = await addSubscriptionAction(formData);

    handleClose();
  }

  function handleClose() {
    reset();
    closeModal();
  }

  return (
    <>
      <Button onClick={openModal}>Add Subscription</Button>

      <Modal isOpen={isOpen} close={handleClose} title="Add Subscription">
        <form action={addSubscription}>
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
                error={errors?.frequency?.message?.toString()}
              />
            </div>

            <div className="col-span-2">
              <SelectInput
                label="Category"
                id="category"
                options={CATEGORY_OPTIONS}
                control={control}
                error={errors?.category?.message?.toString()}
              />
            </div>
          </div>

          <Button className="mt-14 w-full" type="submit">
            Add Subscription
          </Button>
        </form>
      </Modal>
    </>
  );
}
