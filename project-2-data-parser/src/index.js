"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseUser(obj) {
    if (typeof obj.id !== "number" ||
        typeof obj.name !== "string" ||
        typeof obj.email !== "string") {
        return null;
    }
    return {
        id: obj.id,
        name: obj.name,
        email: obj.email,
    };
}
function parseOrder(obj) {
    if (typeof obj.id !== "number" ||
        typeof obj.userId !== "number" ||
        typeof obj.amount !== "number") {
        return null;
    }
    return {
        id: obj.id,
        userId: obj.userId,
        amount: obj.amount,
    };
}
//parse arrays of users and orders
function parseUsers(arr) {
    if (!Array.isArray(arr))
        return [];
    const result = [];
    for (const item of arr) {
        const parsed = parseUser(item);
        if (parsed) {
            result.push(parsed);
        }
    }
    return result;
}
//parsing order
function parseOrders(arr) {
    if (!Array.isArray(arr))
        return [];
    const result = [];
    for (const item of arr) {
        const parsed = parseOrder(item);
        if (parsed) {
            result.push(parsed);
        }
    }
    return result;
}
//Cross Validation
function validateOrderUsers(users, orders) {
    const userIds = users.map((user) => user.id);
    return orders.filter((order) => userIds.includes(order.userId));
}
const rawData = {
    users: [
        { id: 1, name: "Abbas", email: "abbas@mail.com" },
        { id: "wrong", name: "Invalid", email: "bad@mail.com" },
    ],
    orders: [
        { id: 101, userId: 1, amount: 250 },
        { id: 102, userId: 99, amount: 100 },
    ],
};
const users = parseUsers(rawData.users);
const orders = parseOrders(rawData.orders);
const validOrders = validateOrderUsers(users, orders);
console.log("Valid users:", users);
console.log("Valid orders (linked to real users):", validOrders);
//# sourceMappingURL=index.js.map