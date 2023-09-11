const http = require('http');
const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.send('Hello From express - ' + req.query.name);
})

app.get('/about',(req,res) => {
    res.send('Hello from about page');
})
// const myserver = http.createServer((req , res) => {

//     if(req.url === '/favicon.ico'){
//         return res.end();
//     }
    
//     const urlData = url.parse(req.url);
//     console.log(urlData);

//     const log = Date.now() + ': New request Recieved from - ' + req.url + '\n';
//     fs.appendFile("./log.txt" , log ,(err , data) => {
//         switch(urlData.pathname){
//             case  "/" : res.end('Hello from server');
//             break;
//             case "/about" : res.end('I am Arjun Sing');
//             break;
//             default : res.end('404');

//         }
        
        
//     });  
// });

// myserver.listen(8000 , () => console.log("Server started !!"))

// const myserver = http.createServer(app);
// myserver.listen(8000 , () => console.log("Server started !!"))
app.listen(8000, () => console.log('server started !!'));