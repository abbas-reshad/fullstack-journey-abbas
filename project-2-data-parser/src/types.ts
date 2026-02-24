export type Role = "Admin" | "User" | "Guest";
export type OrderStatus = "Pending" | "Paid" | "Cancelled";

export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
  createdAt: string;
}

export interface Order {
  id: number;
  userId: number;
  amount: number;
  status: OrderStatus;
  createdAt: string;
}

export interface DataPayload {
  users: any[];
  orders: any[];
}
