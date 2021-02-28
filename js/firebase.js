var db = firebase.firestore();

// LOGIN DEFAULT

    if(document.getElementById('DefaultLogin') != undefined){
        document.getElementById('DefaultLogin').addEventListener('submit', () => {
            event.preventDefault();
            let email = document.getElementById('DefaultLoginEmail')
            let password = document.getElementById('DefaultLoginPassword');
            Firebase_Login(email,password);
        });
    }

    function Firebase_Login(userEmail,userPass){
        userEmail = userEmail.value;
        userPass = userPass.value;
        firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
            var errorMessage = error.message;
            if(errorMessage == "The password is invalid or the user does not have a password."){
                window.alert("Senha inválida ou usuário não cadastrado.")
            }
            else if(errorMessage == "The email address is badly formatted."){
                window.alert("O endereço de email está mal formatado ou não foi preenchido.")
            }
            else{
                window.alert(errorMessage);
            }
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
            firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
                data.length > 0 ? Firebase_RegisterDatabase(email,password,data) : false;
            }).catch(function(error) {
                errorcont ++;
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                errorMessage == "The email address is already in use by another account." ?
                    alert('O endereço de email já está sendo usado por outra conta.') : false;
            })
        }
    }
  
    function Firebase_RegisterDatabase(email,password,data){
        firebase.auth().signInWithEmailAndPassword(email, password);
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                var user = firebase.auth().currentUser;
                // firebase.database().ref('users/' + user.uid).set({
                    // nome: data[0]
                // });
                db.collection('users').doc(user.uid).set({
                    nome: data[0],
                    coin: 0,
                    medal: 0,
                }).then(() => {
                    // Firebase_Logout()
                });
            }
        });
        alert("Cadastro Realizado com Sucesso");
    }
  
// $REGISTER

// SIGNED

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log('entrou')
        if(window.location.toString().indexOf('login.html') != -1){
            window.location = window.location.toString().split('/pages')[0] + '/index.html';
        }
        if(document.getElementById('thor') != undefined){
            firebase.firestore().collection('users').doc(`${user.uid}`).get().then(doc => {
                document.getElementById('thor').innerText = doc.data().medal;
                document.getElementById('baupoint').innerText = parseInt(doc.data().coin/15);
                document.getElementById('loki').innerText = doc.data().coin;
            });
        }
        if(document.getElementById('LoginLinkButton') != undefined){
            document.getElementById('LoginLinkButton').removeAttribute('href');
        }
    } else{
        console.log('não entrou')
    }
});

// $SIGNED
