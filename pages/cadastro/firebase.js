    var database = firebase.database();

// LOGIN DEFAULT

    function Firebase_Login(userEmail,userPass){
        userEmail = userEmail.value;
        userPass = userPass.value;
        firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
            // Handle Errors here.
            var errorMessage = error.message;
            if(errorMessage == "The password is invalid or the user does not have a password."){
                window.alert("Senha inválida ou usuário não cadastrado.")
            }
            else if(errorMessage == "The email address is badly formatted."){
                window.alert("O endereço de email está mal formatado ou não foi preenchido.")
            }
            // ...
        });
    }

// $LOGIN DEFAULT

// LOGOUT

    function Firebase_Logout(){
        firebase.auth().signOut();  
    }

// $LOGOUT

// LOGIN GOOGLE

// $LOGIN GOOGLE

// LOGIN FACEBOOK

// $LOGIN FACEBOOK

// REGISTER

    if(document.getElementById("Form_Register") != undefined){
        document.getElementById("Form_Register").addEventListener("submit", () => {
            event.preventDefault();
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            let confirm = document.getElementById("confirm").value;
            password == confirm ? Firebase_RegisterEmail(email,password,[name]) : alert("Erro:" + "\n" + "As senhas não são Iguais");
        })
    }

    function Firebase_RegisterEmail(email,password,data){
        if(email != "" && password != ""){
            var errorcont = 0;
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                errorcont ++;
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                errorMessage == "The email address is already in use by another account." ?
                    alert('O endereço de email já está sendo usado por outra conta.') : false;
            });
            errorcont == 0 && data.length > 0 ? Firebase_RegisterDatabase(email,password,data) : false;
        }
    }
  
    function Firebase_RegisterDatabase(email,password,data){
        firebase.auth().signInWithEmailAndPassword(email, password);
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                var user = firebase.auth().currentUser;
                firebase.database().ref('users/' + user.uid).set({
                    nome: data[0]
                });        
                Firebase_Logout();
            }
        });
        alert("Cadastro Realizado com Sucesso");
    }
  
// $REGISTER

// SIGNED

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
    } else{
    }
});

// $SIGNED
