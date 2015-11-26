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
	var selected_id, filter={}, completed = false;
	
	// private functions...
	function InsertTodo (title, description){
		if ("done" in filter){
		    completed = false
			com.johngorter.todoapp.setFilter({done:completed});
		}
		if (title && description){
			com.johngorter.todoapp.insertTodo(title, description);
			refreshList();
		}			
		else {
			com.johngorter.todoapp.insertTodo($("#t").val(), $("#d").val());
			$("#dialog").dialog('close');	
			refreshList(1);
		}
	}
	
	function showDetails(id){
		if ((selected_id = id) > 0){
			var todo =  com.johngorter.todoapp.getTodo(id); 
			$("#dt").html(todo.title);
			$("#dd").html(todo.description);
			$("#details").fadeIn();
		} else $("#details").fadeOut();
	}

	function deleteTodo(){
		if (selected_id > 0){
			com.johngorter.todoapp.deleteTodo(selected_id);
			refreshList();
			showDetails(-1);
		}
	}

	function refreshList(animate) {
		$("#list").html('');
		var todos = com.johngorter.todoapp.getTodos();
		$(todos).each(function(i, t){
			var $li = $("<li>").html(t.toString()).click(function(){showDetails(t.id);}).appendTo("#list");
			if (i == todos.length-1 && animate) {
				$li.animate({fontSize:'40px'}, 500).animate({fontSize:'14px'},500);
			}
		})
	}
	function markTodo(){
		if (selected_id > 0){
			com.johngorter.todoapp.markTodo(selected_id);
			refreshList();
			showDetails(-1);
		}
	}
	function showList(){
		completed = !completed;
		filter = $(this).attr('id') == "btnR" ? {} : {done:completed};
		com.johngorter.todoapp.setFilter(filter);
		if ("done" in filter)
			$("#btnR").fadeIn();
		else 
			$("#btnR").fadeOut();
		
		refreshList();
	}
	
	return {
		insertTodo: InsertTodo,
		deleteTodo: deleteTodo,
		showDetails: showDetails,
		markTodo: markTodo,
		showList: showList
	}
}(); 

$(function(){
	
	$("#btnA").click(TodoApplication.insertTodo);
	$("#btnT").click(TodoApplication.showList);
	$("#btnDe").click(TodoApplication.deleteTodo);
	$("#btnDo").click(TodoApplication.markTodo);
	$("#btnR").click(TodoApplication.showList);
	$("#btnAddTodo").click(function(){
		$("#dialog").dialog('open');	
	}); 
	
	$("#dialog").dialog({autoOpen:false, modal:true}); 
	
	$.ajax({url:'/todos', dataType:'json', success:function(data){
		for (d in data){
			TodoApplication.insertTodo(data[d].title, data[d].description);
		}
	}});
}); 