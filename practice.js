
var firebaseConfig = {
    apiKey: "AIzaSyDF6voVsawyNcc0qJ9qpRuzuCbPnZMpR6Y",
    authDomain: "practice-database-9300e.firebaseapp.com",
    databaseURL: "https://practice-database-9300e-default-rtdb.firebaseio.com",
    projectId: "practice-database-9300e",
    storageBucket: "practice-database-9300e.appspot.com",
    messagingSenderId: "827591898091",
    appId: "1:827591898091:web:102ebace596469fea11fae"
  };
  

  firebase.initializeApp(firebaseConfig);

  function addUser(){
      user_name = document.getElementById("user-name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }