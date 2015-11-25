var express = require('express');
var app = express();

app.use(express.static("app"));

app.get("/", function(req, res){
  res.end(
    "root"
  );
});

app.get("/todos", function(req, res){
  var arrTodos = [{ t:'test', d:'bla'}, { t:'test2', d:'bla2'}]
  res.end(JSON.stringify(arrTodos));
});

app.listen(1337, function(){
  console.log('Server running at http://127.0.0.1:1337/');  
}); 


 