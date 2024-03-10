import { useState } from "react";
import * as z from "zod";

import {
  Button,
  DatePicker,
  Dialog,
  DialogPanel,
  Select,
  SelectItem,
  TextInput,
} from "@tremor/react";
import { RiCloseFill } from "@remixicon/react";

const subscriptionSchema = z.object({
  name: z.string().min(1, "Name is required"),
  cost: z.string().min(1, "Cost is required"), // You may want to use z.number() if you want to validate a number instead
  frequency: z.string().min(1, "Frequency is required"),
  category: z.string().min(1, "Category is required"),
  paymentDate: z.date(),
});

export default function IncomeAdd() {
  const [isOpen, setIsOpen] = useState(false);
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(subscriptionSchema),
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
            <h2>Add Subscription</h2>
            <button onClick={closeDialog}>
              <RiCloseFill
                size={40}
                className="text-slate-400 hover:bg-slate-100 p-1 rounded"
              />
            </button>
          </div>

          <div className="mx-auto  space-y-4 py-2">
            <div>
              <label htmlFor="name">Name</label>
              <TextInput
                {...register("name")}
                errorMessage={errors?.name?.message?.toString()}
                placeholder="Subscription name"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="amount">Cost</label>
                <TextInput {...register("cost")} placeholder="$10.00" />
              </div>
              <div>
                <label htmlFor="frequency">Frequency</label>
                <Select>
                  {FREQUENCY_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>

            <div>
              <label {...register("paymentDate")} htmlFor="payment-date">
                Payment Date
              </label>
              <DatePicker />
            </div>

            <div>
              <label htmlFor="category">Category</label>
              <Select>
                <SelectItem value="monthly">Monthly</SelectItem>
              </Select>
            </div>
          </div>

          <Button className="mt-14" type="submit">
            Add subscription
          </Button>
        </DialogPanel>
      </Dialog>
    </>
  );
}
