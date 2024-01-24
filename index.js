const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const timestamp = new Date().toISOString();
fs.writeFileSync('current date-time.txt',timestamp, (err) => {
 console.log("File created")
});
