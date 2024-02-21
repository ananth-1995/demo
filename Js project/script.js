/*function propose(){
    var userName =prompt("whats your name");
 var proposalMessage = document.getElementById("proposal-message");
 var proposalMessage = document.getElementById("Propose-button");
 

if(userName){
    var message = 'Hi ${userName}! i love You';

proposalMessage.innerHTML = message;
proposalMessage.style.display = 'block';
proposalMessage.style.display = 'none';
    
}

} */


function propose() {
    var userName = prompt("What's your name");
    var proposalMessage = document.getElementById("proposal-message");
    var proposeButton = document.getElementById("propose-button");

    if (userName) {
        var message = `Hi ${userName}! I love you`;
        proposalMessage.innerHTML = message;
        proposalMessage.style.display = 'block';
        proposeButton.style.display = 'none';
    }
}

