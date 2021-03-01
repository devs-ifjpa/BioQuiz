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

    function signIn(provider) {
        firebase.auth()
            .signInWithPopup(provider)
            .then(function (result) {
                console.log(result);
                var token = result.credential.accessToken;
                displayName.innerText = 'Bem vindo, ' + result.user.displayName;
            }).catch(function (error) {
                console.log(error);
                alert('Falha na autenticação');
            });
    }


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
                    nome: data[0]
                }).then(() => {
                    Firebase_Logout()
                });
            }
        });
        alert("Cadastro Realizado com Sucesso");
    }
  
// $REGISTER

// SIGNED

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        if(window.location.toString().indexOf('login.html') != -1){
            window.location = window.location.toString().split('/pages')[0] + '/index.html';
        }
        if(document.getElementById('LoginLinkButton') != undefined){
            document.getElementById('LoginLinkButton').removeAttribute('href');
        }
        let user = firebase.auth().currentUser;
        if(document.getElementById("thor") != undefined){
            db.collection("users").doc(user.uid).get().then((doc) => {
                if(typeof total !== "undefined"){
                    total += parseInt(doc.data().medal);
                    document.getElementById("thor").textContent = total;
                }else{
                    document.getElementById("thor").textContent = parseInt(doc.data().medal)
                }
            });
        }
    } else{
    }
});

// $SIGNED

// UPDATE

    const FirebaseUpdateMedal = () => {
        const medalValue = document.getElementById("thor").textContent;
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                var user = firebase.auth().currentUser;
                db.collection('users').doc(user.uid).set({
                    medal: medalValue,
                },{ merge: true }).then(() => {
                    const temp = url.href.split("pages")[0];
                    url.href = temp + "pages/telaFinal/parabens.html"    
                });
            }
        });
    }

// $UPDATE