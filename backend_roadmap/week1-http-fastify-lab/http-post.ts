import https from "node:https";

// 1 Read inputs from terminal
const url = process.argv[2];
const body = process.argv[3];

// 2 Safety check
if (!url || !body) {
  console.error('Usage: tsx http-post.ts <url> "<json-body>"');
  process.exit(1);
}

// 3 Create the request

console.log("Sending POST request to:", url);
console.log("Body:", body);
const req = https.request(
  url,
  {
    method: "POST",
    headers: {
      "User-Agent": "node-http-client",
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(body),
      Accept: "application/json",
    },
  },
  (res) => {
    console.log("Status:", res.statusCode);

    let responseData = "";

    // collect chunks
    res.on("data", (chunk) => {
      responseData += chunk;
    });

    // when finished
    res.on("end", () => {
      console.log("\nResponse (first 200 chars):");
      console.log(responseData.slice(0, 200));
    });
  },
);

// 4 Error handling
req.on("error", (err) => {
  console.error("Request error:", err);
});

// 5 Send the body
req.write(body);

// 6 Finish request (VERY IMPORTANT)
req.end();
