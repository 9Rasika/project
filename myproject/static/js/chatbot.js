


const sendBtn = document.getElementById("send");
const promptEl = document.getElementById("prompt");
const responseEl = document.getElementById("response");

async function sendPrompt() {
  const prompt = promptEl.value.trim();
  if (!prompt) {
    alert("Please enter a prompt.");
    return;
  }

  responseEl.textContent = "Loading...";

  try {
    const res = await fetch("/api/chat/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: "prompt=" + encodeURIComponent(prompt)
    });

    const data = await res.json();
    responseEl.textContent = data.text || "(no response)";
  } catch (e) {
    responseEl.textContent = "Network error: " + e.message;
  }
}

sendBtn.addEventListener("click", sendPrompt);
promptEl.addEventListener("keydown", (ev) => {
  if (ev.ctrlKey && ev.key === "Enter") {
    sendPrompt();
  }
});

