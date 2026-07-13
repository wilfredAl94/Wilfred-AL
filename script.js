const button = document.querySelector("button");
const textarea = document.querySelector("textarea");

button.addEventListener("click", async () => {
  const prompt = textarea.value.trim();

  if (!prompt) {
    alert("Please enter a prompt.");
    return;
  }

  button.disabled = true;
  button.textContent = "Generating...";

  try {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();

    alert(JSON.stringify(data, null, 2));
  } catch (err) {
    alert("Error: " + err.message);
  }

  button.disabled = false;
  button.textContent = "Generate AI Video";
});
