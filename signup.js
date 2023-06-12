var userid = localStorage.getItem("userid")
const firebaseConfig =
{
    apiKey: "AIzaSyDrsvEIH9PmP_y9b7cnpoShVKqa6tyF4tM",
    authDomain: "notthetube-1e911.firebaseapp.com",
    databaseURL: "https://notthetube-1e911-default-rtdb.firebaseio.com",
    projectId: "notthetube-1e911",
    storageBucket: "notthetube-1e911.appspot.com",
    messagingSenderId: "306903903976",
    appId: "1:306903903976:web:57d77c2fa6186d289ce35d",
    measurementId: "G-B2DTE3Q38H"
}
firebase.initializeApp(firebaseConfig)
var database = firebase.database()

// This makes a new account in Firebase, which can be used to sign in.
function makeAccount()
{
    var firebaseRef = firebase.database().ref("amountofusers")
    firebaseRef.once("value", function(snapshot) {
        document.getElementById("button").disabled = true
        document.getElementById("button").innerText = "Sending login data to database... (1/3)"
        data = snapshot.val()
        firebaseRef.set(data + 1)
        localStorage.setItem("userid", data)
        console.log(data)
        var user = document.getElementById("username").value
        var pass = document.getElementById("password").value
        var email = document.getElementById("email").value
        if(email == "")
        {
            database.ref("users/" + data).set
            ({
                password: pass,
                username: user,
                userid: data,
                accountstatus: "active"
            })  
        }
        else
        {
            database.ref("users/" + data).set
            ({
                password: pass,
                username: user,
                emailaddress: email, 
                userid: data,
                accountstatus: "active"
            })  
        }
        document.getElementById("button").innerText = "Creating login data locally... (2/3)"
        localStorage.setItem("username", user)
        localStorage.setItem("password", pass)
        localStorage.setItem("accountstatus", "active")
        localStorage.setItem("request", "login-buttondata")
        document.getElementById("button").innerHTML = "Logging into account... (3/3)"
        window.location.href = "home.html"
    })
}


// This checks if the user has inputted sufficient information to create an account.
function checkifAllow()
{
    var logindata
    var logindata2 = true
    var logindata3
    var length = document.getElementById("password").value.length
    if(!(length <= 7))
    {
        var logindata = true
    }
    if(!(document.getElementById("username").value == ""))
    {
        var logindata3 = true
    }
    if(logindata && logindata2 && logindata3)
    {
        document.getElementById("button").disabled = false
    }
    else
    {
        document.getElementById("button").disabled = true
    }
}