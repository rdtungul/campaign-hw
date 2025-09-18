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
      const res = await fetch("https://webhook-test.com/api/webhooks/cac25144934d229b4fa9eedcc6a9733a", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        responseMsg.textContent = "✅ Thank you! Your message has been sent.";
        responseMsg.className = "mt-2 small text-success";
        form.reset();
      } else {
        responseMsg.textContent = "⚠️ Oops! Something went wrong.";
        responseMsg.className = "mt-2 small text-danger";
      }
    } catch (err) {
      responseMsg.textContent = "❌ Error: " + err.message;
      responseMsg.className = "mt-2 small text-danger";
    }
  });