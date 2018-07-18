window.setTimeout(function() {
  var todo = [];
var response = prompt("Enter the command");

while(response !== "quit" ){
if (response === "list")
{
	alert(todo);
	response = prompt("Enter the command");
}
else if(response === "add"){
    var newItem = prompt("Enter new item");
	todo.push(newItem);
	response = prompt("Enter the command");
}
}
alert("OK, good bye!!!");
}, 500);