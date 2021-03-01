var db = firebase.firestore();
firebase.firestore().enablePersistence();

// LOGIN DEFAULT

    if(document.getElementById('DefaultLogin') != undefined){
        document.getElementById('DefaultLogin').addEventListener('submit', (event) => {
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

    if(document.getElementById("Form_Login-Google") != null){
        document.getElementById("Form_Login-Google").addEventListener("submit", () => {
            Firebase_AlternativeLogin();
        });
    }

    function Firebase_AlternativeLogin(data = undefined){
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    }

    document.getElementById('Form_Register-Google') != null ? (
        document.getElementById("Form_Register-Google").addEventListener("submit", () => {
            event.preventDefault();
            let voce = SelectChecked(document.getElementById("voce"),"option").value;
            let day = SelectChecked(document.getElementById("day"),"option").textContent;
            let month = SelectChecked(document.getElementById("month"),"option").textContent;
            let year = SelectChecked(document.getElementById("year"),"option").textContent;
            let date = `${day}/${month}/${year}`;
            voce != "you" ? (
                Firebase_RegisterDatabase(['',date,voce],"Google")
            ) :
            alert("Selecione sua profissão");
        })
    ) : false;


// $LOGIN FACEBOOK

// REGISTER

    if(document.getElementById("Form_Register") != undefined){
        document.getElementById("Form_Register").addEventListener("submit", (event) => {
            event.preventDefault();
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let confirmEmail = document.getElementById("confirm-email").value;
            let data = document.getElementById("nascimento").value;
            let password = document.getElementById("password").value;
            let confirm = document.getElementById("confirm").value;
            if(email === confirmEmail && password == confirm){
                Firebase_RegisterEmail(email,password,[name,data]);
            }else{
                alert("Erro:" + "\n" + "As senhas não são Iguais");
            }
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
                db.collection('users').doc(user.uid).set({
                    nome: data[0],
                    nascimento: data[1],
                    medal: 0
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
        console.log("entrou");
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
        console.log("não entrou");
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