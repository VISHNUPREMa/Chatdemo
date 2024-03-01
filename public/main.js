const socket = io();

const buttonOne = document.getElementById("send-btn");
const userContainer = document.querySelector('.user-container');
const inputContainer = document.querySelector('.input-container');

let username; 

function createUser() {
    const usernameInput = document.getElementById('username');
    username = usernameInput.value.trim();

    if (username !== '') {
        userContainer.style.display = 'none';
        inputContainer.style.display = 'block';
        socket.emit('new user', username);
    } else {
        alert('Please enter a valid username.');
    }
}

buttonOne.onclick = function sendMesssage() {
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value.trim();
    
    if (message !== "") {
        const messageObject = {
            username: username,
            message: message
        };

        socket.emit("message", messageObject);
        messageInput.value = "";
    }
}

socket.on("message", (messageObject) => {
    const chatMessage = document.getElementById("chat-message");
    const messageElement = document.createElement("li");
    messageElement.innerHTML = `${messageObject.username}: <br> ${messageObject.message}`;
    messageElement.classList.add(`sender-${messageObject.username.toLowerCase()}`);

    chatMessage.prepend(messageElement);
});



