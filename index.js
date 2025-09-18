form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const res = await fetch("https://hooks.zapier.com/hooks/catch/11800156/umg4nj2/", {
      method: "POST",
      body: formData, // no headers → avoids CORS preflight
    });

    if (res.ok) {
      responseMsg.textContent = "✅ Sent to Zapier!";
      responseMsg.style.color = "green";
      form.reset();
    } else {
      responseMsg.textContent = "❌ Failed to send.";
      responseMsg.style.color = "red";
    }
  } catch (err) {
    console.error("Error submitting form:", err);
    responseMsg.textContent = "⚠️ Network error.";
    responseMsg.style.color = "red";
  }
});
