
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
    email: obj.email
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
    amount: obj.amount
  };
}

const rawUser = {
  id: 1,
  name: "Abbas",
  email: "abbas@mail.com"
};

const parsed = parseUser(rawUser);

console.log("Parsed user:", parsed);

const rawOrder = {
  id: 101,
  userId: 1,
  amount: 250
};

const parsedOrder = parseOrder(rawOrder);

console.log("Parsed order:", parsedOrder);
