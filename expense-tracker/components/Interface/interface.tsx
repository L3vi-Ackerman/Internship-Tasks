export interface CategoryInterface {
  allocated: number;
  spent: number;
  remaining: number;
  thresholdAlert: boolean;
  earned: number;
}
export interface BudgetInterface {
  totalBudget: number;
  remainingBudget: number;
}

export interface transactionInterface {
  invoice: string;
  description: string;
  amount: string;
  category: string;
  type: string;
  paymentStatus: string;
  paymentMethod: string;
}

export interface PieChartInterface {
  id: number;
  name: string;
  spent: number;
}

export interface BarGraphInterface {
  id: number;
  month: string;
  income: number;
  expense: number;
}

export interface InputComponentInterface {
  name: string;
  labelName: string;
  id: string;
}

export interface toastInterface {
  title: string;
  description: string;
  isSuccess: boolean;
}
