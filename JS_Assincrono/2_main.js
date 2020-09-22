
var minhaPromise = function(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('get', 'https://api.github.com/users/Mikael-Josias');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4) {
                if(xhr.status == 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('Erro na requisição');
                }
            }
        }
    });
}

minhaPromise()
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.log(error);
});