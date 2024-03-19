const chatbox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

const chatGPT = new OpenAIChatGPT({
    apiKey: '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', // Replace with your OpenAI API key
    chatTitle: 'ChatGPT Embedded',
    welcomeMessage: 'Hello! How can I assist you today?'
});

async function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage === '') return;

    // Display user message in chat box
    displayMessage(userMessage, 'user');

    // Send user message to ChatGPT
    const response = await chatGPT.send(userMessage);

    // Display ChatGPT response in chat box
    displayMessage(response.data.choices[0].message.content, 'chatGPT');

    // Clear user input field
    userInput.value = '';
}

function displayMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'chatGPT-message');
    messageElement.innerText = message;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to bottom
}