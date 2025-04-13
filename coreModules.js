//const myFile = require('fs');
//console.log("Node Js core Modules") //Global core Modules

//myFile.writeFileSync("coreModules.txt","Node Js core Modules Tutorial") //Non-Global core Modules 

const myFile = require('fs').writeFileSync;
console.log("Node Js core Modules") //Global core Modules
myFile("coreModules.txt","Node Js core Modules Tutorial") //Non-Global core Modules 