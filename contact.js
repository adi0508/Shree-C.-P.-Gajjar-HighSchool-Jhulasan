// Select the contact form
const contactForm = document.getElementById("contact-form");

// Helper function for in-page notifications
function showMessage(msg, success = true) {
  const div = document.createElement("div");
  div.textContent = msg;
  div.style.position = "fixed";
  div.style.top = "20px";
  div.style.right = "20px";
  div.style.padding = "12px 20px";
  div.style.borderRadius = "10px";
  div.style.backgroundColor = success ? "#10b981" : "#ef4444";
  div.style.color = "#fff";
  div.style.fontWeight = "bold";
  div.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
  div.style.zIndex = 1000;
  div.style.transition = "all 0.3s ease";
  document.body.appendChild(div);

  // Fade out after 4 seconds
  setTimeout(() => {
    div.style.opacity = "0";
    setTimeout(() => div.remove(), 500);
  }, 4000);
}

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById("name").value.trim();
    const emailPhone = document.getElementById("email_phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !emailPhone || !message) {
      showMessage("Please fill in all fields!", false);
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/send_message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email_phone: emailPhone,
          message,
        }),
      });

      const result = await response.json();

      if (result.status === "success") {
        showMessage(result.message, true);
        contactForm.reset();
      } else {
        showMessage(result.message, false);
      }
    } catch (error) {
      console.error("Error:", error);
      showMessage("Failed to send message. Try again later.", false);
    }
  });
}
