var logindataconfirm1
var logindataconfirm2
var logindataconfirm3
var red
var green
var data3
var data = null
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
var firebaseRef = firebase.database().ref("amountofusers")
checkinfo()
function checkdropdown(selected)
{
    console.log("click")
    console.log(selected)
    console.log(selected.options[selected.selectedIndex].value)
    if(selected.options[selected.selectedIndex].value == "View Profile")
    {
       if(selected.options[selected.selectedIndex - 1].value == "Not signed in.")
       {
           window.location = "/NotTheTube/new/account/login.htm"
       }
       else
       {
           window.location = "/NotTheTube/profile/" + localStorage.getItem("userid") + ".htm"
       }
    }
}
if(localStorage.getItem("userid") == "" || localStorage.getItem("userid") == null || localStorage.getItem("username") == "" || localStorage.getItem("username") == null || localStorage.getItem("password") == "" || localStorage.getItem("password") == null || localStorage.getItem("accountstatus") == "" || localStorage.getItem("accountstatus") == null && localStorage.getItem("request") == null || localStorage.getItem("request") == "")
{
    if(window.location.pathname == "/NotTheTube/new/acount/login.htm")
    {
        document.getElementById("main").innerHTML = "<div id='messagetype'><section class='message error'><header></header><h2 style='font-family: 'Roboto';'><span>Critical Attention!</span> Stored account information may be corrupted, deleted or tampered with which is not allowed. Your account may be looked at if this problem keeps continuing. If this is a glitch that keeps happening let me know on my discord account kirk#7715. You can log back in <a href='./new/account/login/htm'>here</a> or you can <a href='./new/account/signup.htm'>sign up</a></h2></section></div>"
    }

}
if(window.location.pathname == "/NotTheTube/upload.htm")
{
    console.log("0")
    if(logindataconfirm1 == false || logindataconfirm2 == false || logindataconfirm3 == false)
    {
        console.log("1")
        document.getElementById("main").innerHTML = "<div id='messagetype'><section class='message warning'><header></header><h2 style='font-family: 'Roboto';'><span>Attention!</span> Account information has changed since last visit, therefore you have been automatically logged out. You can log back in <a href='./new/account/login/htm'>here</a> or you can <a href='./new/account/signup.htm'>sign up</a></h2></section></div>"
    }
    if(localStorage.getItem("userid") == "")
    {
        console.log("2")
        document.getElementById("main").innerHTML = "<div id='messagetype'><section class='message warning'><header></header><h2 style='font-family: 'Roboto';'><span>Attention!</span> Account information has changed since last visit, therefore you have been automatically logged out.</h2></section></div>"
    }
}
function senddatalogin()
{
    var user = document.getElementById("username").value
    var pass = document.getElementById("password").value
    localStorage.setItem("username", user)
    localStorage.setItem("password", pass)
    document.getElementById("main").innerHTML = "<center><h1 class='ytmed'>Logging you in...</h1></center>"
    checkinfo()
    if(logindataconfirm1 == false || logindataconfirm2 == false || logindataconfirm3 == false)
    {
        document.getElementById("main").innerHTML = "<div id='messagetype'><section class='message error'><header></header><h2><span>Attention!</span> Incorrect credentials. If you need to switch accounts please enter the User ID on the new input box so we can check the account you are trying to log in to.</h2></section></div><center><h1 class='ytmed'>Welcome back!</h1><h3 class='ytlight'>(if you don't have an account yet head to <a href='/new/account/signup.htm'>the signup page</a>)</h3><div id='usernamediv'><h3 class='deftext'>Username:&nbsp;&nbsp;</h3><input id='username' oninput='check()'></div><br><h3 class='deftext' id='usertext'>User ID:&nbsp;&nbsp;</h3><input id='newuserid' type='number'>&nbsp;<button onclick='setnewuserid()' id='buttonuserid'>Set new User ID</button><br><div id='passworddiv'><h3 class='deftext'>Password:&nbsp;&nbsp;</h3><input id='password'></div><br><br><button id='signup' onclick='senddatalogin()'>Log In</button></center>"
        localStorage.setItem("request", "")
    }
    else
    {
        window.location = "/NotTheTube/index.htm"
    }
}
function setnewuserid()
{
    localStorage.setItem("userid", document.getElementById("newuserid").value)
    document.getElementById("buttonuserid").innerText = "New User ID set."
    document.getElementById("buttonuserid").disabled = true
}
function autologin()
{
    if(localStorage.getItem("request") == "login-signupdata" && window.location.pathname == "/NotTheTube/new/account/login.htm")
    {
        document.getElementById("main").innerHTML = "<center><h1 class='ytmed'>Logging you in...</h1></center>"
        if(logindataconfirm1 == false || logindataconfirm2 == false || logindataconfirm3 == false)
        {
            document.getElementById("main").innerHTML = "<div id='messagetype'><section class='message error'><header></header><h2><span>Error!</span> An error occurred when logging into your newly made account. This usually means that the database has broke mid-login or there is a problem with your internet. Try again later or try and login again.</h2></section></div><center><h1 class='ytmed'>Welcome back!</h1><h3 class='ytlight'>(if you don't have an account yet head to <a href='/new/account/signup.htm'>the signup page</a>)</h3><div id='usernamediv'><h3 class='deftext'>Username:&nbsp;&nbsp;</h3><input id='username' oninput='check()'></div><br><div id='passworddiv'><h3 class='deftext'>Password:&nbsp;&nbsp;</h3><input id='password'></div><br><br><button id='signup' onclick='senddatalogin()'>Log In</button></center>"
            localStorage.setItem("request", "")
        }
        else
        {
            localStorage.setItem("request", "alreadyloggedin")
            window.location = "/NotTheTube/index.htm"
        }
    }
    if(localStorage.getItem("request") == "login-logback" && window.location.pathname == "/NotTheTube/new/account/login.htm")
    {
        if(logindataconfirm1 == false || logindataconfirm2 == false || logindataconfirm3 == false)
        {
            document.getElementById("main").innerHTML = "<div id='messagetype'><section class='message warning'><header></header><h2 style='font-family: 'Roboto';'><span>Attention!</span> Account information has changed since last visit, therefore you have been automatically logged out.</h2></section></div><center><h1 class='ytmed'>Welcome back!</h1><h3 class='ytlight'>(if you don't have an account yet head to <a href='/new/account/signup.htm'>the signup page</a>)</h3><div id='usernamediv'><h3 class='deftext'>Username:&nbsp;&nbsp;</h3><input id='username' oninput='check()'></div><br><div id='passworddiv'><h3 class='deftext'>Password:&nbsp;&nbsp;</h3><input id='password'></div><br><br><button id='signup' onclick='senddatalogin()' disabled='true'>Log In</button></center>"
            localStorage.getItem("alreadyloggedin")
        }
    }
}
function update()
{
    firebaseRef.set(data + 1)
}
function senddata()
{
    var firebaseRef = firebase.database().ref("amountofusers")
    firebaseRef.once("value", function(snapshot) {
        document.getElementById("signup").disabled = true
        document.getElementById("signup").innerHTML = "Sending login data to database... (1/3)"
        data = snapshot.val()
        localStorage.setItem("userid", data)
        update()
        console.log(data)
        var user = document.getElementById("username").value
        var pass = document.getElementById("password").value
        database.ref("users/" + data).set
        ({
            password: pass,
            username: user,
            userid: data,
            accountstatus: "active"
        })
        document.getElementById("signup").innerHTML = "Creating login data locally... (2/3)"
        localStorage.setItem("username", user)
        localStorage.setItem("password", pass)
        localStorage.setItem("accountstatus", "active")
        localStorage.setItem("request", "login-signupdata")
        document.getElementById("signup").innerHTML = "Logging into account... (3/3)"
        window.location = "login.htm"
    })
}
var searchbar = document.getElementById("search")
var searchbutton = document.getElementById("searchrequest")
var profile = document.getElementById("profile")
var input
sizechange()
function main()
{
    window.location = "../../NotTheTube/index.htm"
}
function sizechange()
{
    profile.style.marginLeft = window.innerWidth - 330
    if(window.location.pathname.includes('watch'))
    {
        document.getElementById("video").style.width = window.innerWidth + 'px'
        document.getElementById("video").style.height = window.innerHeight / 2 + 'px'
    }
    setTimeout(() => {
        sizechange()
    }, 500);
}
if(window.location.pathname.includes('watch'))
{
    if(localStorage.getItem(window.location.pathname) == "" || localStorage.getItem(window.location.pathname) == null)
    {
        localStorage.setItem(window.location.pathname, true)
        if(window.location.pathname == "/NotTheTube/watch/1.htm")
        {
            firebaseRef = firebase.database().ref("watch/1/views")
            firebaseRef.once("value", function(snapshot) {
                data = Math.round(snapshot.val() + 1)
                var data2 = Math.round(snapshot.val().dislikes - 1)
                var data3 = Math.round(snapshot.val().likes + 1)
                database.ref("watch/1").set
                ({
                    views: data,
                    likes: data3,
                    dislikes: data2,
                })
            })
        }
    }
}
function check()
{
    console.log("check ran")
    if(0 < document.getElementById("username").value.length && 7 < document.getElementById("password").value.length)
    {
        console.log(document.getElementById("username").value.length)
        console.log(document.getElementById("password").value.length)
        document.getElementById("signup").disabled = false
    }
    else
    {
        document.getElementById("signup").disabled = true
    }
    if(document.getElementById("password").value.length == 0)
    {
        document.getElementById("passworddetect1").style.backgroundColor = ""
        document.getElementById("passworddetect2").style.backgroundColor = ""
        document.getElementById("passworddetect3").style.backgroundColor = ""
        document.getElementById("passworddetect4").style.backgroundColor = ""
    }
    else if(document.getElementById("password").value.length > 0 && 8 > document.getElementById("password").value.length)
    {
        document.getElementById("passworddetect1").style.backgroundColor = "red"
        document.getElementById("passworddetect2").style.backgroundColor = ""
        document.getElementById("passworddetect3").style.backgroundColor = ""
        document.getElementById("passworddetect4").style.backgroundColor = ""
    }
    else if(document.getElementById("password").value.length > 7 && 16 > document.getElementById("password").value.length)
    {
        document.getElementById("passworddetect1").style.backgroundColor = "yellow"
        document.getElementById("passworddetect2").style.backgroundColor = "yellow"
        document.getElementById("passworddetect3").style.backgroundColor = ""
        document.getElementById("passworddetect4").style.backgroundColor = ""
    }
    else if(document.getElementById("password").value.length > 15 && 32 > document.getElementById("password").value.length)
    {
        document.getElementById("passworddetect1").style.backgroundColor = "green"
        document.getElementById("passworddetect2").style.backgroundColor = "green"
        document.getElementById("passworddetect3").style.backgroundColor = "green"
        document.getElementById("passworddetect4").style.backgroundColor = ""
    }
    else
    {
        document.getElementById("passworddetect1").style.backgroundColor = "blue"
        document.getElementById("passworddetect2").style.backgroundColor = "blue"
        document.getElementById("passworddetect3").style.backgroundColor = "blue"
        document.getElementById("passworddetect4").style.backgroundColor = "blue"
    }
}
function checkinfo()
{
    document.getElementById("displayuser").innerText = "Account Info Error"
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
        if(logindataconfirm1 == false || logindataconfirm2 == false || logindataconfirm3 == false)
        {
            if(window.location.pathname != "/NotTheTube/new/account/login.htm")
            {
                window.location = "/NotTheTube/new/account/login.htm"
            }
            document.getElementById("displayuser").innerText = "Err: Account Info Edit"
            document.getElementById("main").innerHTML = "<div id='messagetype'><section class='message warning'><header></header><h2 style='font-family: 'Roboto';'><span>Attention!</span> Account information has changed since last visit, therefore you have been automatically logged out.</h2></section></div><center><h1 class='ytmed'>Welcome back!</h1><h3 class='ytlight'>(if you don't have an account yet head to <a href='/new/account/signup.htm'>the signup page</a>)</h3><div id='usernamediv'><h3 class='deftext'>Username:&nbsp;&nbsp;</h3><input id='username' oninput='check()'></div><br><div id='passworddiv'><h3 class='deftext'>Password:&nbsp;&nbsp;</h3><input id='password'></div><br><br><button id='signup' onclick='senddatalogin()'>Log In</button></center>"
        }
        else
        {
            document.getElementById("displayuser").innerText = localStorage.getItem("username")
        }
    })
}
var firebaseRef = firebase.database().ref("watch/1")
    firebaseRef.once("value", function(snapshot) {
        data = snapshot.val().views
        console.log(data.toString().length)
        var data2 = snapshot.val().likes + snapshot.val().dislikes
        console.log(data2)
        data2 = snapshot.val().dislikes / data2
        console.log(data2)
        data2 = 1 - data2
        console.log(data2)
        green = data2 * 255
        data3 = 100 - data2 * 100
        console.log(data2 * 255 - 255)
        red = Math.abs(data2 * 255 - 255)
        data2 = Math.round(data2 * 100)
        console.log(data2)
        console.log(data3)
        if(document.getElementById("likevideo"))
        {
        document.getElementById("likevideo").innerText = "Like (" + snapshot.val().likes + ")"
        document.getElementById("dislikevideo").innerText = "Dislike (" + snapshot.val().dislikes + ")"
        if(data == 1)
        {
            document.getElementById("view").innerText = "1 view"
        }
        else if(data < 1000)
        {
            document.getElementById("view").innerText = data + " views"
        }
        else if(data > 999 && 1000000 > data)
        {
            if(data.toString().length == 4)
            {
                document.getElementById("view").innerText = data.toString().charAt(0) + "." + data.toString().charAt(1) + "K views"
            }
            else if(data.toString().length == 5)
            {
                document.getElementById("view").innerText = data.toString().charAt(0) + data.toString().charAt(1) + "." + data.toString().charAt(2) + "K views"
            }
            else if(data.toString().length == 6)
            {
                document.getElementById("view").innerText = data.toString().charAt(0) + data.toString().charAt(1) + data.toString().charAt(2) + "K views"
            }
        }
        else if(data > 999999)
        {
            if(data.toString().length == 7)
            {
                document.getElementById("view").innerText = data.toString().charAt(0) + "." + data.toString().charAt(1) + "M views"
            }
            else if(data.toString().length == 8)
            {
                document.getElementById("view").innerText = data.toString().charAt(0) + data.toString().charAt(1) + "." + data.toString().charAt(2) + "M views"
            }
            else if(data.toString().length == 9)
            {
                document.getElementById("view").innerText = data.toString().charAt(0) + data.toString().charAt(1) + data.toString().charAt(2) + "M views"
            }
        }
        document.getElementById("recommendedvideo1ratio").innerText = data2 + "%"
        document.getElementById("recommendedvideo1ratio").style.color = "rgb(" + red + ", " + green + ", 0)"
        }
        if(data == 1)
        {
            document.getElementById("view").innerText = "1 view"
        }
        else if(data < 1000)
        {
            document.getElementById("view").innerText = data + " views"
        }
        else if(data > 999 && 1000000 > data)
        {
            if(data.toString().length == 4)
            {
                document.getElementById("view").innerText = data.toString().charAt(0) + "." + data.toString().charAt(1) + "K views"
            }
            else if(data.toString().length == 5)
            {
                document.getElementById("view").innerText = data.toString().charAt(0) + data.toString().charAt(1) + "." + data.toString().charAt(2) + "K views"
            }
            else if(data.toString().length == 6)
            {
                document.getElementById("view").innerText = data.toString().charAt(0) + data.toString().charAt(1) + data.toString().charAt(2) + "K views"
            }
        }
        else if(data > 999999)
        {
            if(data.toString().length == 7)
            {
                document.getElementById("view").innerText = data.toString().charAt(0) + "." + data.toString().charAt(1) + "M views"
            }
            else if(data.toString().length == 8)
            {
                document.getElementById("view").innerText = data.toString().charAt(0) + data.toString().charAt(1) + "." + data.toString().charAt(2) + "M views"
            }
            else if(data.toString().length == 9)
            {
                document.getElementById("view").innerText = data.toString().charAt(0) + data.toString().charAt(1) + data.toString().charAt(2) + "M views"
            }
        }
        document.getElementById("recommendedvideo1ratio").innerText = data2 + "%"
        document.getElementById("recommendedvideo1ratio").style.color = "rgb(" + red + ", " + green + ", 0)"
    })
function recommendvid1()
{
    window.location = "../NotTheTube/watch/1.htm"
}
function likevideo()
{
    if(localStorage.getItem(window.location.pathname + "lod") == "dislike" || localStorage.getItem(window.location.pathname + "lod") == "" || localStorage.getItem(window.location.pathname + "lod") == null)
    {
        var firebaseRef = firebase.database().ref("watch/1")
        firebaseRef.once("value", function(snapshot) {
            if(localStorage.getItem(window.location.pathname + "lod") == "" || localStorage.getItem(window.location.pathname + "lod") == null)
            {
                var data2 = Math.round(snapshot.val().likes + 1)
                localStorage.setItem(window.location.pathname + "lod", "like")
            }
            else
            {
                var data2 = Math.round(snapshot.val().likes + 1)
                var data = Math.round(snapshot.val().dislikes - 1)
                localStorage.setItem(window.location.pathname + "lod", "like")
            }
            var data = Math.round(snapshot.val().dislikes - 1)
            var data2 = Math.round(snapshot.val().likes + 1)
            var data3 = snapshot.val().views
            console.log(data)
            console.log(data2)
            console.log()
            console.log()
            database.ref("watch/1").set
            ({
                likes: data2,
                dislikes: data,
                views: data3
            })
        })
    }
}
function dislikevideo()
{
    if(localStorage.getItem(window.location.pathname + "lod") == "like" || localStorage.getItem(window.location.pathname + "lod") == "" || localStorage.getItem(window.location.pathname + "lod") == null)
    {
        localStorage.setItem(window.location.pathname + "lod", "dislike")
        var firebaseRef = firebase.database().ref("watch/1")
        firebaseRef.once("value", function(snapshot) {
            var data = Math.round(snapshot.val().dislikes + 1)
            var data2 = Math.round(snapshot.val().likes - 1)
            var data3 = snapshot.val().views
            console.log(data)
            console.log(data2)
            console.log()
            console.log()
            database.ref("watch/1").set
            ({
                likes: data2,
                dislikes: data,
                views: data3
            })
        })
    }
}
loadlikeordislike()
function loadlikeordislike()
{
    console.log("Ran")
    if(localStorage.getItem(window.location.pathname + "lod") == null || localStorage.getItem(window.location.pathname + "lod") != "" && document.getElementById("likevideo"))
    {
        if(localStorage.getItem(window.location.pathname + "lod") == "like")
        {
            document.getElementById("likevideo").style.color = "green"
            document.getElementById("dislikevideo").style.color = ""
        }
        else if(localStorage.getItem(window.location.pathname + "lod") == "dislike")
        {
            document.getElementById("dislikevideo").style.color = "red"
            document.getElementById("likevideo").style.color = ""
        }
    }
    setTimeout(() => {
        loadlikeordislike()
    }, 500);       
}