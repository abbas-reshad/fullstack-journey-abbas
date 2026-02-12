
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

const rawUser = {
  id: 1,
  name: "Abbas",
  email: "abbas@mail.com"
};

const parsed = parseUser(rawUser);

console.log("Parsed user:", parsed);
