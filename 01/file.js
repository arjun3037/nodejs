const fs = require("fs");
const os = require("os");


console.log(os.cpus().length)
// This was sync call - This is blocking call
// fs.writeFileSync('./test.txt' , 'Hey this is first text in files')

// asycn call - This is not a blocking call
//fs.writeFile('./test.txt' , 'Hey this is async files data ' , (err) => {})

//const result = fs.readFileSync('./contact.txt' , "UTF-8");

const resAsync = fs.readFile('./contact.txt' , "UTF-8" , (err,data) => {
    if(err){
        console.log('There is some Problem in reading the file');
    }else{
        console.log(data);
    }
});

//console.log(result);

// appending the file

fs.appendFileSync("./test.txt" , 'This is me appenfing the data int he end');