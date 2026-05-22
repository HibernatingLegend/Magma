// Interactive Logic for the Project Hub
function initializeSystem() {
    const messageElement = document.getElementById('message');
    
    // Simulate a quick diagnostic check
    messageElement.innerText = "Running system checks...";
    messageElement.style.color = "#ea6045"; // Warning color during load

    setTimeout(() => {
        messageElement.innerText = "🚀 Core systems operational. JavaScript link established successfully!";
        messageElement.style.color = "#58a6ff"; // Success blue
    }, 1200);
}
