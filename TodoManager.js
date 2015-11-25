/*///////////////////////////////////////
* Example Namespace Pattern
* John Gorter
*
* TodoApp
* CRUD operations for todos..
*
///////////////////////////////////////*/

var com; 

// use an iife to create a local scope
// and populate the todoapp object... 
(function(ns, undefined){
	// inner fields 
	var todos = [];
	var filter = {}; 
	
	ns.getTodos = function() {
		var todosresult = [];
		for (var t in todos)
		{
			if (todos[t].match(filter)) 
				todosresult.push(todos[t]);
		} 
		return todosresult; 
	}
	
	ns.insertTodo = function(t, d) { todos.push (new com.johngorter.todoapp.Todo(t, d)); }
    ns.getTodo = function(id) {
		for(var todo in todos)
		  if (todos[todo].match({id:id})) return todos[todo];
  	    return undefined;
	}
    ns.deleteTodo = function(id) { 
		var todo = ns.getTodo(id); 
		todo.delete(todos);
	}
	ns.markTodo = function(id) {
    	var todo = ns.getTodo(id); 
		todo.markDone();
	}
	ns.setFilter = function(filterobject) {
		filter = filterobject;
	}
})((com = com || {}, 
    com.johngorter = com.johngorter || {}, 
    com.johngorter.todoapp = com.johngorter.todoapp || {}));


	