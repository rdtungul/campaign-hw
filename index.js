  const form = document.getElementById("contactForm");
  const responseMsg = document.getElementById("formResponse");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("https://hooks.zapier.com/hooks/catch/11800156/umg4nj2/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        responseMsg.textContent = "✅ Message sent successfully to Zapier!";
        responseMsg.className = "mt-2 small text-success";
        form.reset();
      } else {
        responseMsg.textContent = "⚠️ Failed to send message to Zapier.";
        responseMsg.className = "mt-2 small text-danger";
      }
    } catch (err) {
      responseMsg.textContent = "❌ Error: " + err.message;
      responseMsg.className = "mt-2 small text-danger";
    }
  });