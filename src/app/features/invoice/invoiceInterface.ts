// invoice.interface.ts
export interface Item {
  name: string;
  quantity: number;
  price: number;
}

export interface Invoice {
  customerName: string;
  invoice: string;
  amountPaid: number;
  balanceOutstanding: number;
  items: Item[];
  /*totalCost?: number; // Optional because it's computed*/
}
