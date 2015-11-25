/*///////////////////////////////////////
* Example Prototype Pattern
* John Gorter
*
* TodoApp
* Todo class
*
///////////////////////////////////////*/

var com; 

// use an iife to create a local scope
// and populate the todoapp object... 
(function(ns, undefined){
	// static counter for id
	var id_counter = 1;

	ns.Todo = function (t, d) {
		this.id = id_counter++; this.title = t; this.description = d; this.done = false; 
	}
	
	ns.Todo.prototype = {
		markDone : function(){ this.done = true; },
		toString : function(){ 
			return this.done ? "<span style='text-decoration: line-through;'>" + this.title + "<span>" : this.title; },
		delete : function(arr){ arr.splice(arr.indexOf(this), 1); },
		match: function(filterobject) {
			for (var field in filterobject)
				if (this[field] !== filterobject[field]) return false;
			return true;
		}
	}
})((com = com || {}, 
 	com.johngorter = com.johngorter || {}, 
	com.johngorter.todoapp = com.johngorter.todoapp || {}));


	