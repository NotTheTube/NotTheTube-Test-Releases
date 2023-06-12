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

// This will change the size of the video to fit the browser window.
videoSize()
function videoSize()
{
    if(window.location.pathname.includes('watch'))
    {
        document.getElementById("video").style.width = window.innerWidth + 'px'
        document.getElementById("video").style.height = window.innerHeight / 2 + 'px'
    }
    setTimeout(() => {
        videoSize()
    }, 100);
}

// When the website is loaded for more 5 seconds, it will add 1 view to the database.
if(window.location.pathname == 'NotTheTube-Test-Releases/watch/1.html')
{
    setTimeout(() => {
        firebase.database().ref("watch/1").update({
            views: firebase.database.ServerValue.increment(1)
        })
    }, 5000)
}

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
    if(window.location.pathname == 'NotTheTube-Test-Releases/watch/1.html')
    {
        const currentTime = new Date();
        const uploadTime = new Date('2023-06-12T03:06:56Z');
        const timeDiff = currentTime - uploadTime;
        const seconds = Math.floor(timeDiff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        
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
        var view = 0
        firebase.database().ref("watch/1").on("value", function(snapshot)
        {
            firebase.database().ref("watch/1").on("value", function(snapshot)
            {
                if(snapshot.val().views == 1)
                {
                    view = " view"
                }
                else
                {
                    view = " views"
                }
            })
            console.log(snapshot.val().views)
            document.getElementById("details1").innerText = "kirk7715 - " + snapshot.val().views + view + " - " + `${timeSinceUpload}`
        })
        firebase.database().ref("watch/1").on("value", function(snapshot)
        {
            document.getElementById("like").innerText = "Likes (" + snapshot.val().likes + ")"
            document.getElementById("dislike").innerText = "Dislikes (" + snapshot.val().dislikes + ")"
        })
    }
    else if(window.location.pathname == '/watch/2.html')
    {
        const currentTime = new Date();
        const uploadTime = new Date('2023-06-12T18:45:56Z');
        const timeDiff = currentTime - uploadTime;
        const seconds = Math.floor(timeDiff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        
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
        var view = 0
        firebase.database().ref("watch/2").on("value", function(snapshot)
        {
            firebase.database().ref("watch/2").on("value", function(snapshot)
            {
                if(snapshot.val().views == 1)
                {
                    view = " view"
                }
                else
                {
                    view = " views"
                }
            })
            console.log(snapshot.val().views)
            document.getElementById("details1").innerText = "Seb - " + snapshot.val().views + view + " - " + `${timeSinceUpload}`
        })
        firebase.database().ref("watch/2").on("value", function(snapshot)
        {
            document.getElementById("like").innerText = "Likes (" + snapshot.val().likes + ")"
            document.getElementById("dislike").innerText = "Dislikes (" + snapshot.val().dislikes + ")"
        })
    }
    else
    {
        document.getElementById("title1").innerText = "Something went wrong."
        document.getElementById("title1").style.color = "red"
    }
}

// This will like the current video and update the user's liked videos so they cannot keep liking the same video twice.
function likeVideo()
{
    if(window.location.pathname == 'NotTheTube-Test-Releases/watch/1.html')
    {
        if(logindataconfirm1 == true && logindataconfirm2 == true && logindataconfirm3 == true)
        {
            firebase.database().ref("users/" + userid).update({
                likedvideoID1: true
            })
            firebase.database().ref("watch/1").update({
                likes: firebase.database.ServerValue.increment(1)
            })
            firebase.database().ref("watch/1").on("value", function(snapshot)
            {
                document.getElementById("like").innerText = "Likes (" + snapshot.val().likes + ")"
            })
        }
    }
}