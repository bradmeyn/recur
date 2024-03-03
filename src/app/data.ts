export type Income = {
  id: number;
  name: string;
  value: number;
  frequency: string;
  category: string;
};

export interface Expense {
  id: number;
  name: string;
  cost: number;
  frequency: string;
  type: "Fixed" | "Variable" | "Subscription";
  category: string;
}

export interface Subscription extends Expense {
  active: boolean;
  paymentMethod: string;
  paymentDate: string;
  startDate: string;
}

export const SUBSCRIPTIONS: Subscription[] = [
  {
    id: 10,
    name: "Netflix",
    category: "Streaming",
    cost: 10,
    frequency: "Monthly",
    active: true,
    paymentMethod: "Credit Card",
    paymentDate: "2021-12-01",
    startDate: "2021-01-01",
    type: "Subscription",
  },
  {
    id: 20,
    name: "Spotify",
    category: "Music",
    cost: 10,
    frequency: "Monthly",
    active: false,
    paymentMethod: "Credit Card",
    paymentDate: "2021-12-01",
    startDate: "2021-01-01",
    type: "Subscription",
  },

  {
    id: 40,
    name: "Disney+",
    category: "Streaming",
    cost: 10,
    frequency: "Monthly",
    active: true,
    paymentMethod: "Credit Card",
    paymentDate: "2021-12-01",
    startDate: "2021-01-01",
    type: "Subscription",
  },
  {
    id: 50,
    name: "Audible",
    category: "Entertainment",
    cost: 10,
    frequency: "Monthly",
    active: true,
    paymentMethod: "Credit Card",
    paymentDate: "2021-12-01",
    startDate: "2021-01-01",
    type: "Subscription",
  },
  {
    id: 60,
    name: "Youtube Premium",
    category: "Streaming",
    cost: 10,
    frequency: "Monthly",
    active: true,
    paymentMethod: "Credit Card",
    paymentDate: "2021-12-01",
    startDate: "2021-01-01",
    type: "Subscription",
  },
];

export const INCOME = [
  {
    id: 1,
    name: "Salary",
    value: 2100,
    frequency: "Fortnightly",
    category: "Salary/Wages",
  },
  {
    id: 2,
    name: "Portfolio Income",
    value: 10000,
    frequency: "Quarterly",
    category: "Investment",
  },
  {
    id: 3,
    name: "Rent",
    value: 200,
    frequency: "Weekly",
    category: "Investment",
  },
];

export const EXPENSES: Expense[] = [
  {
    id: 1,
    name: "Mortgage Repayments",
    category: "Housing",
    cost: 1000,
    frequency: "Monthly",
    type: "Fixed",
  },
  {
    id: 2,
    name: "Groceries",
    category: "Food",
    cost: 200,
    frequency: "Weekly",
    type: "Variable",
  },
  {
    id: 3,
    name: "Car Insurance",
    category: "Transport",
    cost: 100,
    frequency: "Monthly",
    type: "Fixed",
  },
  {
    id: 4,
    name: "Phone Bill",
    category: "Utilities",
    cost: 50,
    frequency: "Monthly",
    type: "Fixed",
  },
  {
    id: 5,
    name: "Internet",
    category: "Utilities",
    cost: 100,
    frequency: "Monthly",
    type: "Fixed",
  },
];
