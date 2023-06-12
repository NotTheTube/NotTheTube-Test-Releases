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

// This checks if the login information was correct or not.
function checkLogin()
{
    document.getElementById("body").style.cursor = "progress"
    var userid = document.getElementById("accID").value
    console.log(userid)
    firebase.database().ref("users/" + userid).on("value", function(snapshot)
    {
        if(snapshot.val().username == document.getElementById("username").value)
        {
            if(snapshot.val().password == document.getElementById("password").value)
            {
                var user = document.getElementById("username").value
                var pass = document.getElementById("password").value
                var userid = document.getElementById("accID").value
                localStorage.setItem("username", user)
                localStorage.setItem("password", pass)
                localStorage.setItem("accountstatus", "active")
                localStorage.setItem("userid", userid)
                console.log("login successful")
                window.location.href = "home.html"
            }
            else
            {
                document.getElementById("body").style.cursor = "default"
                document.getElementById("header").style.color = "red"
                document.getElementById("header").innerText = "Check your details and try again."
                setTimeout(() => {
                    document.getElementById("header").style.color = "black"
                    document.getElementById("header").innerText = "Login"
                }, 2000);
            }
        }
        else
        {
            document.getElementById("body").style.cursor = "default"
            document.getElementById("header").style.color = "red"
            document.getElementById("header").innerText = "Check your details and try again."
            setTimeout(() => {
                document.getElementById("header").style.color = "black"
                document.getElementById("header").innerText = "Welcome back to NotTheTube!"
            }, 5000);
        }
    })
}


// This function checks if the details on the input boxes meet the requirements of what it takes to sign up.
// For something as small as this, it took be a couple hour to figure out what was wrong with my code.
function checkifAllow()
{
    var logindata
    var logindata2
    var logindata3
    var length = document.getElementById("password").value.length
    if(!(length <= 7))
    {
        var logindata = true
    }
    if(!(document.getElementById("accID").value == ""))
    {
        var logindata2 = true
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