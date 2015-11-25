/*///////////////////////////////////////
* Example Prototype Pattern
* John Gorter
*
* TodoApp
* Todo class
*  
///////////////////////////////////////*/
var id_counter = 1;
	
class Todo {
	done:boolean;
	id:number;

	constructor (public title:string, public description:string) {
		this.id = id_counter++; 
		this.done = false; 		
	}

	markDone(){ this.done = true;
		
	  window.setInterval (() => {
		  console.log("this: " + this.title)
	  }, 1000); 	
	 }

	toString(){ 
			return this.done ? "<span style='text-decoration: line-through;'>" + this.title + "<span>" : this.title; 
	}
	
	delete(arr){ 
		arr.splice(arr.indexOf(this), 1); 
	}
	
	match(filterobject) {
		for (let field in filterobject){
			if (this[field] !== filterobject[field]) return false;
		}
			
		console.log(field);
		return true;
	}
}

	