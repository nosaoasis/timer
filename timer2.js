const readline = require("readline");
const stdin = process.stdin;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

stdin.setEncoding('utf8');

process.stdin.on("data", (key) => {
  if (key === "\u0003") {
    console.log("Thanks for using me, ciao!");
    setTimeout(() => {
      process.exit();
    }, 1000);
  }
  if (key === "b") {
    process.stdout.write("\x07");
  }
  if (key >= 1 || key <= 9) {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write("\x07");
    }, key * 1000);
  }
});
