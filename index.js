document.getElementById("contactForm").addEventListener("submit", async function(e) {
      e.preventDefault();

      const form = e.target;
      const data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      };

      try {
        const response = await fetch("https://hooks.zapier.com/hooks/catch/11800156/umgb4jj/", {
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