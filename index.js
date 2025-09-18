document.getElementById("contactForm").addEventListener("submit", async function(e) {
      e.preventDefault();

      const form = e.target;
      const data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      };

      try {
        const response = await fetch("https://webhook-test.com/api/webhooks/cac25144934d229b4fa9eedcc6a9733a", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          document.getElementById("formResponse").innerText = "✅ Thank you! Your message has been sent.";
          form.reset();
        } else {
          document.getElementById("formResponse").innerText = "⚠️ Something went wrong. Please try again.";
        }
      } catch (error) {
        document.getElementById("formResponse").innerText = "❌ Failed to connect to server.";
      }
    });