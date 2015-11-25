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
	var id = 0; 

	function Todo(t, d){ this.id = ++id; this.title = t; this.description = d; }
	
	ns.getTodos   = function() { 
		return todos; 
	}

	ns.insertTodo = function(t, d) { 
		todos.push (new Todo(t, d));
	}

	ns.getTodo    = function(id) { 
		var todofiltered = todos.filter(function (t) { 
			return t.id === id; 
			}); 
		return todofiltered[0]; 
	}

    ns.deleteTodo = function(id) { 
		var todo = ns.getTodo(id); 
		if (todo !== undefined) { 
			todos.splice(todos.indexOf(todo),1);
		}
	}
	
})((com = com || {}, com.johngorter = com.johngorter || {}, com.johngorter.todoapp = com.johngorter.todoapp || {}));


	