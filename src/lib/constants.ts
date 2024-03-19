export const FREQUENCY_OPTIONS = [
  { label: "Daily", value: "daily", number: 365 },
  { label: "Weekly", value: "weekly", number: 52 },
  { label: "Fortnightly", value: "fortnightly", number: 26 },
  { label: "Monthly", value: "monthly", number: 12 },
  { label: "Quarterly", value: "quarterly", number: 4 },
  { label: "Half-Yearly", value: "half-yearly", number: 2 },
  { label: "Annually", value: "annually", number: 1 },
];

// export function getFrequencyNumber(value: string) {
//   return (
//     FREQUENCY_OPTIONS.find((option) => option.value === value)?.number || 1
//   );
// }
