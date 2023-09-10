# Nodejs 
* Node Js is a Runtime Env. for javascript
* Node JS does not include the DOM and window related functions
* NodeJS contains the V8 engine 
* npm stands for node package manager
* npm init will introduce the package.json file into project structure.
* package.json is config file , it will maintain the depedency used in the project

# Modules in Node JS
*  require can be used to import functions from other JS files
*  We will have to ecxport.modules(fnc1, func2) to make those function public.

# fs module in Node

* fs module used to interact with file, if we need to create the file and read the file or any other file operation
* Its have two type of method one is sync type and other one is async type.

# How NodeJs works
    * When Node server receive a request from client , then it will push all the requests in Event Queue.
    * after this all request goes to Event loop , so Event loop always listen to Event queue . When Event queue gets request it will pickup the requesy in FIFO manner
    * There can be two type of request 1) Blocking request (sync) 2) Non-blocking request (async).
    * In case of Non-blocking opeation Event loop process non-blocking request normally.
    * But in case of blocking request a thread assigned from thread pool to complete the request. 
    * By default threadpool size is 4 , we can configure threadpool size max to cpu core size.
