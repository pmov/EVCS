//https://CarCRUDApp-1-QR-Code-1.parnam.repl.co?ev=xyz
//https://www.the-qrcode-generator.com/
const firebaseConfig = {
  apiKey: "AIzaSyAWinTxSrHnsduUx5HZcvI6f3OBHsVWJMU",
  authDomain: "e-v-station-app-863b4.firebaseapp.com",
  databaseURL: "https://e-v-station-app-863b4-default-rtdb.firebaseio.com",
  projectId: "e-v-station-app-863b4",
  storageBucket: "e-v-station-app-863b4.appspot.com",
  messagingSenderId: "349543281909",
  appId: "1:349543281909:web:a9f745461dd54c221dc1bc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();

var c;

function main(){
const queryString = window.location.href;

console.log(queryString);
var url = new URL(queryString);
c = url.searchParams.get("ev");
console.log(c);
if(c == null)
{
  c = "default";
}
console.log(c);

recordExit();
}
function recordExit()
{
  const carRef = dbRef.child('/Admin/'+c);
  let temp = 0;
  carRef.once("value", function(snapshot) {
  snapshot.forEach(function(child) {
    console.log(child.key+": "+child.val());
    temp = parseInt(child.val());
    carRef.child('Data').set(temp-1);
    console.log("Car Left");
  });
  });
}

window.onload = main();
