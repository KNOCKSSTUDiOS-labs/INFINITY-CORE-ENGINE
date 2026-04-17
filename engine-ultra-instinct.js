/*
  INFINITY‑CORE‑ENGINE • ULTRA INSTINCT LAYER
  ------------------------------------------------
  This is the highest reactive layer of the engine.
  It governs:
    • Autonomous response states
    • Instantaneous adaptation
    • Peak‑mode visual triggers
    • Overdrive synchronization with Reality‑Core + Visual Protocol

  States:
    • UI-DORMANT
    • UI-ACTIVE
    • UI-ASCENDED
    • UI-TRANSCENDENT
*/

window.ULTRA_INSTINCT = {
  state: "UI-DORMANT",

  transitions: {
    "UI-DORMANT": "UI-ACTIVE",
    "UI-ACTIVE": "UI-ASCENDED",
    "UI-ASCENDED": "UI-TRANSCENDENT",
    "UI-TRANSCENDENT": "UI-DORMANT"
  },

  applyState(newState) {
    this.state = newState;

    const el = document.querySelector("[data-ultra-instinct]");
    if (el) {
      el.setAttribute("data-ultra-instinct", newState);
      el.classList.remove("ui-animate");
      void el.offsetWidth;
      el.classList.add("ui-animate");
    }

    this.broadcast(newState);
  },

  next() {
    const nextState = this.transitions[this.state] || "UI-DORMANT";
    this.applyState(nextState);
  },

  ignite() {
    this.applyState("UI-ACTIVE");
  },

  ascend() {
    this.applyState("UI-ASCENDED");
  },

  transcend() {
    this.applyState("UI-TRANSCENDENT");
  },

  broadcast(state) {
    const event = new CustomEvent("ULTRA_INSTINCT_SIGNAL", {
      detail: {
        state,
        timestamp: Date.now()
      }
    });
    window.dispatchEvent(event);
  }
};

// Auto-cycle Ultra Instinct every 9 seconds
setInterval(() => {
  window.ULTRA_INSTINCT.next();
}, 9000);
