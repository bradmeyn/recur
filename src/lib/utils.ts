export function formatAsCurrency(
  value: number,
  includeCents: boolean = false,
  includeSymbol: boolean = false
): string {
  const options: Intl.NumberFormatOptions = {
    minimumFractionDigits: includeCents ? 2 : 0,
    maximumFractionDigits: includeCents ? 2 : 0,
  };
  if (isNaN(value)) {
    value = 0.0;
  }

  if (includeSymbol) {
    options.style = "currency";
    options.currency = "USD";
  } else {
    // If the currency symbol is not included, we use 'decimal' style
    options.style = "decimal";
  }

  return new Intl.NumberFormat("en-US", options).format(value);
}

// Function to parse the formatted value back to an integer
export function parseCurrency(value: string): number {
  const numericValue = parseInt(value.replace(/[^0-9]+/g, ""));
  if (isNaN(numericValue)) return 0;
  return numericValue;
}

export function formatAsPercentage(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 3,
  }).format(value);
}
