/*
  INFINITY‑CORE‑ENGINE • HYPERSTATE LAYER
  ------------------------------------------------
  This is the OVERMODE layer.
  It governs:
    • Multi‑system fusion states
    • Engine overclock thresholds
    • Cross‑protocol resonance
    • FORM‑R × RC × UI combined states

  Hyperstates:
    • HS‑IDLE
    • HS‑SYNC
    • HS‑FUSION
    • HS‑ASCENSION
    • HS‑OMNI
*/

window.ENGINE_HYPERSTATE = {
  state: "HS-IDLE",

  transitions: {
    "HS-IDLE": "HS-SYNC",
    "HS-SYNC": "HS-FUSION",
    "HS-FUSION": "HS-ASCENSION",
    "HS-ASCENSION": "HS-OMNI",
    "HS-OMNI": "HS-IDLE"
  },

  applyState(newState) {
    this.state = newState;

    const el = document.querySelector("[data-hyperstate]");
    if (el) {
      el.setAttribute("data-hyperstate", newState);
      el.classList.remove("hs-animate");
      void el.offsetWidth;
      el.classList.add("hs-animate");
    }

    this.broadcast(newState);
    this.syncWithSubsystems(newState);
  },

  next() {
    const nextState = this.transitions[this.state] || "HS-IDLE";
    this.applyState(nextState);
  },

  broadcast(state) {
    const event = new CustomEvent("HYPERSTATE_SIGNAL", {
      detail: {
        state,
        timestamp: Date.now()
      }
    });
    window.dispatchEvent(event);
  },

  syncWithSubsystems(state) {
    // FORM‑R
    if (window.ENGINE_VISUAL_PROTOCOL) {
      if (state === "HS-FUSION") window.ENGINE_VISUAL_PROTOCOL.next();
      if (state === "HS-ASCENSION") window.ENGINE_VISUAL_PROTOCOL.applyState("FORM-R-ASCEND");
    }

    // Reality‑Core
    if (window.REALITY_CORE) {
      if (state === "HS-SYNC") window.REALITY_CORE.ignite();
      if (state === "HS-OMNI") window.REALITY_CORE.overload();
    }

    // Ultra Instinct
    if (window.ULTRA_INSTINCT) {
      if (state === "HS-FUSION") window.ULTRA_INSTINCT.ascend();
      if (state === "HS-OMNI") window.ULTRA_INSTINCT.transcend();
    }
  }
};

// Auto‑cycle Hyperstate every 11 seconds
setInterval(() => {
  window.ENGINE_HYPERSTATE.next();
}, 11000);
