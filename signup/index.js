
function emailSignUp(){
    var email = document.getElementById('exampleInputEmail1');
    var password = document.getElementById('exampleInputPassword1');
    if(email == "nandiniproothi@gmail.com" || email == ""){
        firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
    }
    else{
        window.location.replace("../sry.html");
    }
}