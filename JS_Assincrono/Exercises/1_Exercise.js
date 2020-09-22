function checarIdade(idade){
    return new Promise(function(resolve, reject){
        setTimeout(
            function(){
                if(idade > 18){
                    resolve('Maior que 18');
                }else{
                    reject('Menor que 18');
                }
            },2000);
    });
}

checarIdade(16)
.then(function(response){
   console.log(response);
})
.catch(function(error){
    console.log(error);
})