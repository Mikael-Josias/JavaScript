var listElement = document.querySelector('#app ul');
var buttonElement = document.querySelector('#app button');
var inputElement = document.querySelector('#app input');


var todos = [
    'Fazer Café',
    'Estuda JS',
    'Acessar Comunidade da RocketSeat'
];

function renderTodos(){
    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);

        listElement.appendChild(todoElement);
    }
}

renderTodos();