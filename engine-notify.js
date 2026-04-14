/* ============================================================
   INFINITY-CORE-ENGINE // NOTIFICATION SYSTEM
   Toast Alerts • Badge Unlocks • System Messages • Warnings
   ============================================================ */

const ICE_NOTIFY = {
  container: null,

  init() {
    this.container = document.createElement("div");
    this.container.id = "ice-notify-container";
    document.body.appendChild(this.container);
  },

  send(message, type = "info") {
    const note = document.createElement("div");
    note.className = `ice-note ${type}`;
    note.textContent = message;

    this.container.appendChild(note);

    setTimeout(() => {
      note.classList.add("show");
    }, 10);

    setTimeout(() => {
      note.classList.remove("show");
      setTimeout(() => note.remove(), 300);
    }, 3200);
  },

  badgeUnlocked(name) {
    this.send(`BADGE UNLOCKED // ${name}`, "badge");
  },

  warning(msg) {
    this.send(`WARNING // ${msg}`, "warn");
  },

  success(msg) {
    this.send(`SUCCESS // ${msg}`, "success");
  },

  system(msg) {
    this.send(`SYSTEM // ${msg}`, "system");
  }
};

document.addEventListener("DOMContentLoaded", () => ICE_NOTIFY.init());
