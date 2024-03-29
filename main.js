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

// This handles account details on the "account" ID
accountDetails()
function accountDetails()
{
if(localStorage.getItem("userid") == null || localStorage.getItem("userid") == "NAN" || localStorage.getItem("userid") == "")
    {
       document.getElementById("base").innerText = "Not Logged In"
        document.getElementById("second").innerText = "Login"
        document.getElementById("third").innerText = "Sign Up"
    }
    else
    {
        document.getElementById("second").innerText = "Settings"
        document.getElementById("second").disabled = true
        document.getElementById("third").innerText = "Log Out"
    }
}


// This function is run on home.html
// This will check if the dropdown menu (the account settings thing) and will not run if something did not load properly
var dropdown = document.getElementById("account")
dropdown.onchange = (event) =>
{
    var selection = event.target.value
    if(!(selection == base || document.getElementById("second").innerText == "Loading..." || document.getElementById("third").innerText == "Loading"))
    {
        if(selection == "second")
        {
            if(document.getElementById("second").innerText == "Login")
            {
                window.location = "login.html"
            }
        }
    }
}

// This will change the information shown on the dropdown menu, which will display if there was an error auto logging in or what their username is.
firebase.database().ref("users/" + userid).on("value", function(snapshot)
{
    if(localStorage.getItem("password") == snapshot.val().password)
    {
        logindataconfirm1 = true
    }
    else
    {
        logindataconfirm1 = false
    }
    if(localStorage.getItem("username") == snapshot.val().username)
    {
        logindataconfirm2 = true
    }
    else
    {
        logindataconfirm2 = false
    }
    if(localStorage.getItem("accountstatus") == snapshot.val().accountstatus)
    {
        logindataconfirm3 = true
    }
    else
    {
        logindataconfirm3 = false
    }
    console.log(logindataconfirm1, logindataconfirm2, logindataconfirm3)
    if(logindataconfirm1 == false || logindataconfirm2 == false || logindataconfirm3 == false)
    {
        document.getElementById("base").value = "Err: Account Info Edit"
    }
    else
    {
        document.getElementById("base").innerText = localStorage.getItem('username')
    }
})

// This displays deatils of the videos on the front page.
videoDetails()
function videoDetails()
{
    var currentTime = new Date();
    var uploadTime = new Date('2023-06-12T03:06:56Z');
    var timeDiff = currentTime - uploadTime;
    var seconds = Math.floor(timeDiff / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    
    let timeSinceUpload;
    if (days > 0) {
        timeSinceUpload = `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        timeSinceUpload = `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        timeSinceUpload = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
        timeSinceUpload = `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }
    document.getElementById("title1").innerText = document.getElementById("title1").innerText + `${timeSinceUpload}`
    firebase.database().ref("watch/1").on("value", function(snapshot)
    {
        console.log(snapshot.val().views)
        document.getElementById("details1").innerText = document.getElementById("details1").innerText + snapshot.val().views + " views"
    })
    var currentTime = new Date();
    var uploadTime = new Date('2023-06-12T18:45:56Z');
    var timeDiff = currentTime - uploadTime;
    var seconds = Math.floor(timeDiff / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    if (days > 0) {
        timeSinceUpload = `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        timeSinceUpload = `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        timeSinceUpload = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
        timeSinceUpload = `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }
    document.getElementById("title2").innerText = document.getElementById("title2").innerText + `${timeSinceUpload}`
    firebase.database().ref("watch/2").on("value", function(snapshot)
    {
        console.log(snapshot.val().views)
        document.getElementById("details2").innerText = document.getElementById("details2").innerText + snapshot.val().views + " views"
    })
}


// This will redirect the user to the specified watch page.
function redirecttoID(id)
{
    window.location = "watch/" + id + ".html"
}