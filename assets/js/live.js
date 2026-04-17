document.addEventListener("DOMContentLoaded", () => {
  const viewerCountEl = document.getElementById("hi-viewer-count");
  const chatWindow = document.getElementById("hi-chat-window");
  const chatInput = document.getElementById("hi-chat-input");
  const chatSend = document.getElementById("hi-chat-send");

  // Fake viewer count pulse (front‑end only; real analytics can be wired later)
  if (viewerCountEl) {
    let base = 12;
    setInterval(() => {
      const variance = Math.floor(Math.random() * 6) - 2;
      const count = Math.max(1, base + variance);
      viewerCountEl.textContent = `LIVE VIEWERS: ${count}`;
    }, 3000);
  }

  // Local demo chat (no backend, just front‑end simulation)
  function appendChatMessage(user, text, cls = "") {
    if (!chatWindow) return;
    const row = document.createElement("div");
    row.className = `hi-chat-message ${cls}`.trim();

    const u = document.createElement("span");
    u.className = "hi-chat-user";
    u.textContent = user;

    const t = document.createElement("span");
    t.className = "hi-chat-text";
    t.textContent = text;

    row.appendChild(u);
    row.appendChild(t);
    chatWindow.appendChild(row);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  if (chatSend && chatInput) {
    chatSend.addEventListener("click", () => {
      const value = chatInput.value.trim();
      if (!value) return;
      appendChatMessage("YOU", value);
      chatInput.value = "";
    });

    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        chatSend.click();
      }
    });
  }
});
