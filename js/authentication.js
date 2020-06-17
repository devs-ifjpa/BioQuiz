
var authGoogleButton= document.getElementById('authGoogleButton');


var displayName = document.getElementById('displayName');

function signIn(provider){
    firebase.auth()
        .signInWithPopup(provider)
        .then(function(result){
            console.log(result);
            var token = result.credential.acessToken;
            displayName.innerText = 'Bem vindo, '+ result.user.displayName;
        }).catch(function(error){
            console.log(error);
            alert('Falha na autenticação');
        });
};


authGoogleButton.addEventListener('click', function(){
    var provider = new firebase.auth.GoogleAuthProvider();
    signIn(provider);
});