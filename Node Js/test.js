const fs = require('fs')

fs.writeFile("message.txt","hello js", (error) =>{
if(error) throw error;
console.log("file written successfully");
});

fs.readFile("./message.txt",(error) =>{
    if(error) throw error;
    console.log("data")
});