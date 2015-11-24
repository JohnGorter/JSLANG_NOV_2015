"use strict"
var todos = []; 
var id = 0; 
var selected_id = -1;

function Todo(t, d){ this.id = ++id; this.title = t; this.description = d; }

function saveTodo(){
	todos.push (new Todo(document.getElementById("title").value, document.getElementById("description").value));
	refreshList(); 
}

function refreshList() {
	var list = document.getElementById("listTodo");
	list.innerHTML = '';
    for (var todo in todos)	{
		var li = document.createElement("li");
		li.innerHTML = '<span onclick="showDetails(' + todos[todo].id + ');">' + todos[todo].title + '</span>';
		list.appendChild(li);
	} 
}
function getTodoById(id){
	var todofiltered = todos.filter(function (t) { return t.id === id; });
	return todofiltered[0];
}

function showDetails(id){
	if (id > 0){
		var todo = getTodoById(id);
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
		var todo = getTodoById(selected_id);
		if (todo !== undefined) {
			todos.splice(todos.indexOf(todo),1); 
			refreshList();
			showDetails(-1);
		}
	}
}