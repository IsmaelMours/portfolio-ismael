document.addEventListener("DOMContentLoaded", function () {
  const chatbotContainer = document.getElementById("chatbot-container");
  const chatbotIcon = document.getElementById("chatbot-icon");
  const chatOutput = document.getElementById("chat-output");
  const sendBtn = document.getElementById("send-btn");
  const userInput = document.getElementById("user-input");

  // Toggle chatbot visibility
  chatbotIcon.addEventListener("click", function () {
    const isChatbotVisible = chatbotContainer.style.display === "block";

    if (isChatbotVisible) {
      chatbotContainer.style.display = "none";
      chatbotIcon.innerHTML = '<i class="fas fa-comments"></i>'; // Icon for opening
    } else {
      chatbotContainer.style.display = "block";
      chatbotIcon.innerHTML = '<i class="fas fa-times"></i>'; // Icon for closing
    }
  });

  // Handle chatbot responses
  sendBtn.addEventListener("click", function () {
    const message = userInput.value.trim();
    if (message) {
      const userMessage = `<div class="user-message">You: ${message}</div>`;
      chatOutput.innerHTML += userMessage;

      // Simulate a chatbot response
      setTimeout(() => {
        const botResponse = getChatbotResponse(message);
        chatOutput.innerHTML += botResponse;
        chatOutput.scrollTop = chatOutput.scrollHeight; // Scroll to the bottom
      }, 500);

      // Clear the input field
      userInput.value = "";
    }
  });

  // Function to get bot response based on user input
  function getChatbotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes("who are you") || lowerCaseMessage.includes("introduction")) {
      return `<div class="bot-message">Bot: I'm Ismael Mours, a Junior Full Stack Developer based in Johannesburg. I specialize in building efficient web applications and REST APIs.</div>`;
    } else if (lowerCaseMessage.includes("skills") || lowerCaseMessage.includes("competencies")) {
      return `<div class="bot-message">Bot: I have experience in Back End Development with Java and Spring Boot, as well as front-end technologies like React, JavaScript, HTML, CSS, and Tailwind.</div>`;
    } else if (lowerCaseMessage.includes("projects") || lowerCaseMessage.includes("work")) {
      return `<div class="bot-message">Bot: I've worked on various projects, including a Property Maintenance System and a Birthday Stokvel for managing group savings.</div>`;
    } else if (lowerCaseMessage.includes("contact") || lowerCaseMessage.includes("reach")) {
      return `<div class="bot-message">Bot: You can reach me at 0730662618 or email me at monnapuleismaelmours@gmail.com.</div>`;
    } else {
      return `<div class="bot-message">Bot: I’m here to assist you. What would you like to know more about?</div>`;
    }
  }
});
