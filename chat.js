// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



     