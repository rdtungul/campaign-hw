document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const responseDiv = document.getElementById("formResponse");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // stop form from refreshing the page

    // Collect form data
    const formData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };

    try {
      // Send data to Zapier webhook
      const response = await fetch("https://hooks.zapier.com/hooks/catch/11800156/umgb4jj/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        responseDiv.innerHTML = `<span class="text-success">✅ Thank you! Your message has been sent.</span>`;
        form.reset();
      } else {
        responseDiv.innerHTML = `<span class="text-danger">❌ Oops! Something went wrong. Please try again.</span>`;
      }
    } catch (error) {
      console.error("Error:", error);
      responseDiv.innerHTML = `<span class="text-danger">⚠️ Failed to send. Check your connection.</span>`;
    }
  });
});
