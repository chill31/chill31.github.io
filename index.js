const fs = require("fs");
fs.writeFileSync("./server/things.json", "{ \"name\": [1, 5, 8] }");

const dara = fs.readFileSync("./server/things.json", { encoding: 'utf8', flag: 'r'});

console.log(dara);
