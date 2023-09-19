export type User = {
  id: number;
  name: string;
  birthday: Date;
  type: "admin" | "client" | "manager";
};

export type Purchase = {
  id: number;
  amount: number;
  userId: number;
};

export type UserWithPurchases = User & {
  purchases: Purchase[];
  purchasesTotalAmount: number;
};
