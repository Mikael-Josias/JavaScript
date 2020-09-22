
var urlGitApi = "https://api.github.com/users/";
var reposGitUser = "/repos";

var inpUser = document.getElementsByName("user")[0];
var divElement = document.querySelector('#secondExercise');
var ulElement = document.getElementById('uList');

function SearchUserRepos(){
    var urlGitUser = urlGitApi + inpUser.value + reposGitUser;

    loadingReposList();
    axios.get(urlGitUser)
    .then(function(response){
        //console.log(response);
        createReposList(response.data);
    })
    .catch(function(error){
        errorRequest(error.response.status);
    });
}

function createReposList(repos){
    ulElement.innerHTML = '';

    for(repo of repos){
        var liElement = document.createElement('li');
        var textElement = document.createTextNode(repo.name);

        liElement.appendChild(textElement);
        ulElement.appendChild(liElement);
    }

    divElement.appendChild(ulElement);
}

function errorRequest(code = 0){
    ulElement.innerHTML = '';
    
    var liElement = document.createElement('li');
    var textElement;

    switch (code) {
        case 404:
            textElement = document.createTextNode('Usuário não existe!');
            break;
        default:
            textElement = document.createTextNode('Erro na Requisição!');
            break;
    }

    liElement.appendChild(textElement);
    ulElement.appendChild(liElement);

    divElement.appendChild(ulElement);
}

function loadingReposList(){
    ulElement.innerHTML = '';
    
    var liElement = document.createElement('li');
    var textElement = document.createTextNode('Carregando...');

    liElement.appendChild(textElement);
    ulElement.appendChild(liElement);

    divElement.appendChild(ulElement);
}