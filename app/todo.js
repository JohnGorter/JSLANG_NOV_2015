/*///////////////////////////////////////
* Example Prototype Pattern
* John Gorter
*
* TodoApp
* Todo class
*
///////////////////////////////////////*/
var id_counter = 1;
var Todo = (function () {
    function Todo(title, description) {
        this.title = title;
        this.description = description;
        this.id = id_counter++;
        this.done = false;
    }
    Todo.prototype.markDone = function () {
        var _this = this;
        this.done = true;
        window.setInterval(function () {
            console.log("this: " + _this.title);
        }, 1000);
    };
    Todo.prototype.toString = function () {
        return this.done ? "<span style='text-decoration: line-through;'>" + this.title + "<span>" : this.title;
    };
    Todo.prototype.delete = function (arr) {
        arr.splice(arr.indexOf(this), 1);
    };
    Todo.prototype.match = function (filterobject) {
        for (var field in filterobject) {
            if (this[field] !== filterobject[field])
                return false;
        }
        console.log(field);
        return true;
    };
    return Todo;
})();
//# sourceMappingURL=todo.js.map