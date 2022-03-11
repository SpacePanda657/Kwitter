
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCIPAT4FmjOTY_xxMLqA4yRPg2vdK8a2QI",
      authDomain: "kwitter-c554d.firebaseapp.com",
      projectId: "kwitter-c554d",
      storageBucket: "kwitter-c554d.appspot.com",
      messagingSenderId: "332494486350",
      appId: "1:332494486350:web:fe3b961d702a27672e7c1f"
    };
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
