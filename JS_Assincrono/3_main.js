
axios.get('https://api.github.com/users/Mikael-Josias')
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.log(error);
});
