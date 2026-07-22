export type Transaction = {
  id: number;
  description: string;
  method: string;
  date: string;
  amount: number;
}

export type Category = {
  name: string;
  color: string;
  amount: number;
}
