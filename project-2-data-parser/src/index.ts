const fs = require("fs");

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Order {
  id: number;
  userId: number;
  amount: number;
}
//Parse ARRAYS of users and orders
interface DataFile {
  users: User[];
  orders: Order[];
}

function parseUser(obj: any): User | null {
  if (
    typeof obj.id !== "number" ||
    typeof obj.name !== "string" ||
    typeof obj.email !== "string"
  ) {
    return null;
  }

  return {
    id: obj.id,
    name: obj.name,
    email: obj.email,
  };
}

function parseOrder(obj: any): Order | null {
  if (
    typeof obj.id !== "number" ||
    typeof obj.userId !== "number" ||
    typeof obj.amount !== "number"
  ) {
    return null;
  }

  return {
    id: obj.id,
    userId: obj.userId,
    amount: obj.amount,
  };
}
//parse arrays of users and orders

function parseUsers(arr: any): User[] {
  if (!Array.isArray(arr)) return [];

  const result: User[] = [];

  for (const item of arr) {
    const parsed = parseUser(item);
    if (parsed) {
      result.push(parsed);
    }
  }

  return result;
}
//parsing order
function parseOrders(arr: any): Order[] {
  if (!Array.isArray(arr)) return [];

  const result: Order[] = [];

  for (const item of arr) {
    const parsed = parseOrder(item);
    if (parsed) {
      result.push(parsed);
    }
  }

  return result;
}
//Cross Validation

function validateOrderUsers(users: User[], orders: Order[]): Order[] {
  const userIds = users.map((user) => user.id);

  return orders.filter((order) => userIds.includes(order.userId));
}

let rawData;

try {
  const fileContent = fs.readFileSync("data.json", "utf-8");
  rawData = JSON.parse(fileContent);
} catch (error) {
  console.error("Failed to read or parse data.json");
  process.exit(1);
}

const users = parseUsers(rawData.users);
const orders = parseOrders(rawData.orders);
const validOrders = validateOrderUsers(users, orders);

console.log("Valid users:", users);
console.log("Valid orders:", validOrders);

if (users.length === 0) {
  console.error("No valid users found.");
  process.exit(1);
}

process.exit(0);
