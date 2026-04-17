/*
  INFINITY‑CORE‑ENGINE • EVENT BUS
  ------------------------------------------------
  Centralized event router for:
    • Engine subsystems
    • UI listeners
    • Cross‑module communication
    • Global broadcast channels

  This ensures:
    • Zero‑collision event flow
    • Unified dispatching
    • Predictable propagation
    • Engine‑wide observability
*/

window.ENGINE_EVENT_BUS = {
  channels: {},

  on(channel, callback) {
    if (!this.channels[channel]) {
      this.channels[channel] = [];
    }
    this.channels[channel].push(callback);
  },

  off(channel, callback) {
    if (!this.channels[channel]) return;
    this.channels[channel] = this.channels[channel].filter(cb => cb !== callback);
  },

  emit(channel, payload = {}) {
    if (!this.channels[channel]) return;

    this.channels[channel].forEach(cb => {
      try {
        cb(payload);
      } catch (err) {
        console.warn("EVENT BUS ERROR:", err);
      }
    });
  },

  bridgeToDOM(eventName, detail = {}) {
    const event = new CustomEvent(eventName, { detail });
    window.dispatchEvent(event);
  }
};

// Example subsystem bindings
window.addEventListener("ENGINE_SIGNAL", (e) => {
  window.ENGINE_EVENT_BUS.emit("ENGINE_SIGNAL", e.detail);
});

window.addEventListener("REALITY_CORE_SIGNAL", (e) => {
  window.ENGINE_EVENT_BUS.emit("REALITY_CORE_SIGNAL", e.detail);
});

window.addEventListener("ULTRA_INSTINCT_SIGNAL", (e) => {
  window.ENGINE_EVENT_BUS.emit("ULTRA_INSTINCT_SIGNAL", e.detail);
});

window.addEventListener("HYPERSTATE_SIGNAL", (e) => {
  window.ENGINE_EVENT_BUS.emit("HYPERSTATE_SIGNAL", e.detail);
});
