var firebaseConfig = {
    apiKey: "AIzaSyAgc18mjp-nnNpMkTxS1TsFtXrDYxjZ_hQ",
    authDomain: "website-c2d65.firebaseapp.com",
    databaseURL: "https://website-c2d65-default-rtdb.firebaseio.com",
    projectId: "website-c2d65",
    storageBucket: "website-c2d65.appspot.com",
    messagingSenderId: "685972253867",
    appId: "1:685972253867:web:6017059dad25749b0edbee"
  };

firebase.initializeApp(firebaseConfig);


function sweets()
{
    window.location = "sweets.html";
}

function order()
{
    window.location = "TRANSFER.html";
}

function contacts()
{
    window.location = "contacts.html";
}

function transfer()
{
    window.location = "why.html";
}

function back()
{
    window.location = "index.html";
}

function placeOrder()
{
    window.location = "thank.html";

    input_name = document.getElementById("input_name").value;
    input_items = document.getElementById("input_items").value;
    input_number = document.getElementById("input_number").value;
    firebase.database().ref("/").child(input_items).update({
        name: input_name , 
        item: input_item , 
        number: input_number
    })};

function startOrder()
{
    window.location = "order.html";
}