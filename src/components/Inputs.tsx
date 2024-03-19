"use client";
import { FREQUENCY_OPTIONS } from "@/lib/constants";
import { RiMoneyDollarCircleFill } from "@remixicon/react";
import { Select, SelectItem, TextInput } from "@tremor/react";

import { Controller } from "react-hook-form";
import { formatAsCurrency, parseCurrency } from "@/lib/utils";
import { on } from "events";

type FrequencyInputProps = {
  label: string;
  id: string;
  register: any;
  error: string | undefined;
};

type SelectInputProps = {
  label: string;
  id: string;
  control: any;
  error: string | undefined;
  options: { label: string; value: string }[];
};

export function SelectInput({
  control, // This prop is required to use with Controller
  label,
  id,
  error,
  options,
}: SelectInputProps) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Controller
        name={id}
        control={control}
        render={({ field: { onChange, value, name, ref } }) => (
          <Select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            ref={ref}
            className={`${error ? "border border-red-500" : ""}`}
            errorMessage={error}
          >
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </Select>
        )}
      />
    </>
  );
}

type InputProps = {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  register: any;
  error: string | undefined;
};

export function Input({
  label,
  id,
  type,
  placeholder,
  register,
  error,
}: InputProps) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <TextInput
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        {...register}
        className={`${error ? "border border-red-500" : ""}`}
        error={error}
        errorMessage={error}
      />
    </>
  );
}

type CurrencyInputProps = {
  label: string;
  id: string;
  name: string;
  register: any;
  control: any;
  error: string | undefined;
};

export function CurrencyInput({
  label,
  id,

  control,
  error,
  name,
}: CurrencyInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericalValue = parseCurrency(e.target.value);
    if (isNaN(numericalValue)) return 0;
    return numericalValue;
  };
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, ...fieldProps } }) => (
          <TextInput
            icon={RiMoneyDollarCircleFill}
            {...fieldProps}
            id={id}
            name={name}
            placeholder="0.00"
            className={`${error ? "border border-red-500" : ""}`}
            // Format the value only for display purposes
            value={formatAsCurrency(fieldProps.value)}
            onChange={(e) => onChange(handleChange(e))}
          />
        )}
      />
      {error && <span className="text-red-500">{error}</span>}
    </>
  );
}
