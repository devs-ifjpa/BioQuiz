var db = firebase.firestore();
firebase.firestore().enablePersistence();
// LOGIN DEFAULT

    if(document.getElementById('DefaultLogin') != undefined){
        document.getElementById('DefaultLogin').addEventListener('submit', (event) => {
            event.preventDefault();
            const email = document.getElementById('DefaultLoginEmail')
            const password = document.getElementById('DefaultLoginPassword');
            const location = window.location.toString().split('/pages')[0] + '/index.html';
            Firebase_Login(email,password,location);
        });
    }

    function Firebase_Login(userEmail,userPass, location = null){
        userEmail = userEmail.value;
        userPass = userPass.value;
        firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(value => {
            if(value) window.location = location;
        }).catch(function(error) {
            // Handle Errors here.
            var errorMessage = error.message;
            if(errorMessage == "The password is invalid or the user does not have a password."){
                swal("Senha inválida ou usuário não cadastrado.")
            }
            else if(errorMessage == "The email address is badly formatted."){
                swal("O endereço de email está mal formatado ou não foi preenchido.")
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
        document.getElementById("Form_Login-Google").addEventListener("submit", (e) => {
            e.preventDefault();
            Firebase_AlternativeLogin();
        });
    }

    async function birthPopUp (user) {
        const inputDate = document.createElement("input");
        inputDate.type = "date";
        
        swal({
            text:"Digite o seu Aniversário:",
            content: inputDate,
            button: { text: "Enviar" }
        }).then(async value => {
            if (value && inputDate.value)
                db.collection('users').doc(user.uid).set({
                    nascimento: inputDate.value
                }, { merge: true }).then(async () => {
                    window.location = window.location.toString().split('/pages')[0] + '/index.html';
                });
            else
                await birthPopUp(user);
        })
    }

    function Firebase_AlternativeLogin(){
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(async result => {
            const user = result.user;
            
            db.collection("users").doc(user.uid).get().then( async doc => {
                if ( !doc.data() ) {
                    db.collection('users').doc(user.uid).set({
                        nome: user.displayName,
                        medal: 0
                    });

                    await birthPopUp(user);
                } else
                    window.location = window.location.toString().split('/pages')[0] + '/index.html';
            });

        }).catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // const email = error.email;
            // const credential = error.credential;
        });
    }

    if( document.getElementById('Form_Register-Google') ) {
        document.getElementById("Form_Register-Google").addEventListener("submit", event => {
            event.preventDefault();
            Firebase_AlternativeLogin();
        });
    }


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
            if(email === confirmEmail){
                password == confirm ?
                    Firebase_RegisterEmail(email,password,[name,data]):
                    alert("Erro:" + "\n" + "As senhas não são Iguais");
            }else{
                alert("Erro:" + "\n" + "Os emails não são Iguais");
            }
        })
    }

    function Firebase_RegisterEmail(email,password,data){
        if(email != "" && password != ""){
            var errorcont = 0;
            firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
                if( data.length > 0 )
                    Firebase_RegisterDatabase(email,password,data);
            }).catch(function(error) {
                errorcont ++;
                // Handle Errors here.
                // const errorCode = error.code;
                const errorMessage = error.message;
                if( errorMessage == "The email address is already in use by another account.")
                    swal('O endereço de email já está sendo usado por outra conta.');
            })
        }
    }
  
    function Firebase_RegisterDatabase(email,password,data){
        firebase.auth().signInWithEmailAndPassword(email, password).then(value => {
            if(value) swal("Cadastro Realizado com Sucesso");
        });
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                user = firebase.auth().currentUser;
                db.collection('users').doc(user.uid).set({
                    nome: data[0],
                    nascimento: data[1],
                    medal: 0
                }).then(() => {
                    Firebase_Logout()
                });
            }
        });
    }
  
// $REGISTER

// SIGNED

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        if( document.getElementById('LoginLinkButton') )
            document.getElementById('LoginLinkButton').removeAttribute('href');
        if( document.getElementById("CadastroLinkButton") )
            document.getElementById("CadastroLinkButton").removeAttribute('href');
        
        user = firebase.auth().currentUser;
        if(document.getElementById("thor") != undefined) {
            db.collection("users").doc(user.uid).get().then( async doc => {
                if(doc.data()) {
                    if(typeof total !== "undefined"){
                        total += parseInt(doc.data().medal);
                        document.getElementById("thor").textContent = total;
                    } else {
                        document.getElementById("thor").textContent = parseInt(doc.data().medal);
                    }    
                } else
                    await birthPopUp(user);
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
                user = firebase.auth().currentUser;
                db.collection('users').doc(user.uid).set({
                    medal: medalValue,
                },{ merge: true }).then(() => {
                    const temp = url.href.split("pages")[0];
                    url.href = temp + "pages/telaFinal/parabens.html"
                });
            } else {
                const temp = url.href.split("pages")[0];
                url.href = temp + "pages/telaFinal/parabens.html"
            }
        });
    }

// $UPDATE