//Part A — Raw HTTP Practice
http-get.ts

A simple Node script that:

Accepts a URL from the command line,Sends an HTTPS GET request

Prints:
Status code AND Headers

First part of the response body

Example usage
npx tsx http-get.ts https://api.github.com

Real-world backend communication basics

✅ http-post.ts

A script that sends JSON data using POST.

Example usage
npx tsx http-post.ts https://httpbin.org/post "{\"name\":\"Abbas\"}"

What this do,is

Sending data to servers
Request body vs headers

Part B — Fastify Server

A minimal Fastify server built with TypeScript.

Run the server
npm run dev

Server runs at:

http://localhost:3000
🔌 Available Routes
GET /health

Returns server health status.

Response

{
"status": "ok",
"uptime": <seconds>
}

Purpose

Load balancers
Uptime monitoring
Health checks

GET /ping
Simple connectivity test.
Response

{
"pong": true
}

Purpose
Smoke tests
Quick server verification

GET /echo?msg=hello
Echoes back the query message.
Example
/echo?msg=hello

Response

{
"msg": "hello"
}

Key Concepts Learned

HTTP methods (GET vs POST)

Status codes,
Headers and body,
Routes and endpoints
Query parameters
Fastify request/response handling
Running TypeScript in Node

Tech Stacks

Node.js
TypeScript
Fastify

tsx

How to Run This Project

Install dependencies
npm install
Start the Fastify server

npm run dev
Test endpoints in browser
