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
      // Hide chatbot and clear conversation
      chatbotContainer.style.display = "none";
      chatbotIcon.innerHTML = '<i class="fas fa-comments"></i>'; // Icon for opening
      chatOutput.innerHTML = ""; // Clear the conversation when closing the chatbot
    } else {
      // Show chatbot
      chatbotContainer.style.display = "block";
      chatbotIcon.innerHTML = '<i class="fas fa-times"></i>'; // Icon for closing
    }
  });

  // Handle chatbot responses
  sendBtn.addEventListener("click", function () {
    const message = userInput.value.trim();
    if (message) {
      // Add user message with icon
      const userMessage = `
        <div class="user-message">
          <div class="message-icon"><i class="fas fa-user"></i></div>
          <div class="message-content">You: ${message}</div>
        </div>`;
      chatOutput.innerHTML += userMessage;

      // Simulate a chatbot response
      setTimeout(() => {
        const botResponse = getChatbotResponse(message);
        // Add bot message with icon
        chatOutput.innerHTML += `
          <div class="bot-message">
            <div class="message-content">${botResponse}</div>
            <div class="message-icon"><i class="fas fa-robot"></i></div>
          </div>`;
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
      return "Bot: I'm Ismael Mours, a Junior Full Stack Developer based in Johannesburg. I specialize in building efficient web applications and REST APIs.";
    } else if (lowerCaseMessage.includes("skills") || lowerCaseMessage.includes("competencies")) {
      return "Bot: I have experience in Back End Development with Java and Spring Boot, as well as front-end technologies like React, JavaScript, HTML, CSS, and Tailwind.";
    } else if (lowerCaseMessage.includes("projects") || lowerCaseMessage.includes("work")) {
      return "Bot: I've worked on various projects, including a Property Maintenance System and a Birthday Stokvel for managing group savings.";
    } else if (lowerCaseMessage.includes("contact") || lowerCaseMessage.includes("reach")) {
      return "Bot: You can reach me at 0730662618 or email me at monnapuleismaelmours@gmail.com.";
    } else {
      return "Bot: I’m here to assist you. What would you like to know more about?";
    }
  }
});
