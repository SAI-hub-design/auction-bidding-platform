function placeBid(id){

let currentBid = document.getElementById("bid"+id).innerText;
let userBid = document.getElementById("userBid"+id).value;

currentBid = parseInt(currentBid);
userBid = parseInt(userBid);

if(userBid > currentBid){
document.getElementById("bid"+id).innerText = userBid;
alert("Bid placed successfully!");
}
else{
alert("Bid must be higher than current bid!");
}

}

function login(){
alert("Login successful!");
window.location.href="index.html";
}

function createAuction(){
alert("Auction created successfully!");
}
function startTimer(id,time){

let timer = time;

setInterval(function(){

if(timer > 0){

timer--;

document.getElementById("timer"+id).innerText = timer;

}

},1000);

}

startTimer(1,60);
startTimer(2,60);