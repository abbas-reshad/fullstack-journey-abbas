import https from "node:https";

const url = process.argv[2]; // this called command line arguments

if (!url) {
  console.error("Usage: tsx http-get.ts <url>");
  process.exit(1);
}

//https.get(url, (res) => {
https.get(
  url,
  {
    headers: {
      "User-Agent": "node-http-client",
      Accept: "application/json",
    },
  },
  (res) => {
    console.log("Status:", res.statusCode);
    console.log("Content-Type:", res.headers["content-type"]);
    console.log("Date:", res.headers["date"]);

    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      console.log("\nBody (first 200 chars):");
      console.log(data.slice(0, 200));
    });
  },
);
