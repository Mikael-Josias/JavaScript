
var urlGitApi = "https://api.github.com/users/";
var reposGitUser = "/repos";

var inpUser = document.getElementsByName("user")[0];
var divElement = document.querySelector('#secondExercise');
var ulElement = document.getElementById('uList');

function SearchUserRepos(){
    var urlGitUser = urlGitApi + inpUser.value + reposGitUser;

    axios.get(urlGitUser)
    .then(function(response){
        //console.log(response);
        createReposList(response.data);
    })
    .catch(function(error){
        alert(error);
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