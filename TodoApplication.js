/*///////////////////////////////////////
* Example Revealing Module Pattern
* John Gorter
*
* TodoApp
* UI functions for the todo application
*
///////////////////////////////////////*/

// use the revealing module pattern to create an API for this UI layer...
var TodoApplication = function() { 
	
	// private fields...
	var selected_id;
	
	// private functions...
	function InsertTodo (){
		com.johngorter.todoapp.insertTodo(
			document.getElementById("title").value, 
			document.getElementById("description").value
		);
		refreshList();
	}
	
	function showDetails(id){
		if (id > 0){
			var todo = com.johngorter.todoapp.getTodo(id);
			selected_id = id;
			document.getElementById("detail_title").innerHTML = todo.title;
			document.getElementById("detail_description").innerHTML = todo.description;
			document.getElementById("btnDelete").style.display = 'block';
		} else {
			document.getElementById("detail_title").innerHTML = "";
			document.getElementById("detail_description").innerHTML = "";
			document.getElementById("btnDelete").style.display = 'none';
			selected_id = -1;
		}
	}

	function deleteTodo(){
		if (selected_id > 0){
			com.johngorter.todoapp.deleteTodo(selected_id);
			refreshList();
			showDetails(-1);
		}
	}

	function refreshList() {
		var list = document.getElementById("listTodo");
		list.innerHTML = '';
		var todos = com.johngorter.todoapp.getTodos();
		for (var todo in todos)	{
			var li = document.createElement("li");
			li.innerHTML = '<span onclick="TodoApplication.showDetails(' + todos[todo].id + ');">' + todos[todo].title + '</span>';
			list.appendChild(li);
		} 
	}
	
	return {
		insertTodo: InsertTodo,
		deleteTodo: deleteTodo,
		showDetails: showDetails,
	}
}(); 

