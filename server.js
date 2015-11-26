var express = require('express');
var app = express();

app.use(express.static("app"));


app.get("/todos", function(req, res){
  
  setTimeout(function(){
    var arrTodos = [
      {id:0, title:'hello world', description:'blaa', done:false},
      {id:1, title:'hello world 2', description:'blaa', done:false},
      {id:2, title:'hello world 3', description:'blaa', done:false},
      {id:3, title:'hello world 4', description:'blaa', done:false},
    ];
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(arrTodos));
  }, 5000);
  
});

app.listen(1337, function(){
  console.log('Server running at http://127.0.0.1:1337/');  
}); 


 