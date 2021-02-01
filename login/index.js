function forgotPassword(){
    document.getElementById("emailHelp").innerHTML = "please check your email!"
}

function googleSignIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user.displayName);
        console.log(user.email);
        console.log(user.uid);
        if(user.email != "nandiniproothi@gmail.com" || user.email != ""){
            console.log("sry");
            window.location.replace("../sry.html");
        }
        //saving userid in localstorage so that we can use it any where
        else{
            window.location.replace("../dashboard/")
        }

        // ...
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}
//Signin with Google ends