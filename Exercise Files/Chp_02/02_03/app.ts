var container = document.getElementById('container');

var todo = {
    id: 123,
    name: 'Feed the dog',
    completed: true
}
//template strings, use back ticks and use template literals 
container.innerHTML = `
<div todo='${todo.id}' class="list-group-item}">
    <i class="${ todo.completed ? "" : "hidden" } text-success glyphicon glyphicon-ok"></i>
    <span class="name">${todo.name}</span>
</div>
`