/*
  INFINITY‑CORE‑ENGINE • RENDERER LAYER
  ------------------------------------------------
  Handles:
    • Frame rendering loop
    • UI animation sync
    • Protocol‑driven visual effects
    • Engine‑wide render hooks

  This is the visual heartbeat of the engine.
*/

window.ENGINE_RENDERER = {
  frame: 0,
  hooks: [],

  start() {
    this.loop();
  },

  loop() {
    this.frame++;

    // Run registered render hooks
    this.hooks.forEach(fn => {
      try {
        fn(this.frame);
      } catch (err) {
        console.warn("RENDER HOOK ERROR:", err);
      }
    });

    // Dispatch render event
    const event = new CustomEvent("ENGINE_RENDER_FRAME", {
      detail: {
        frame: this.frame,
        timestamp: performance.now()
      }
    });
    window.dispatchEvent(event);

    requestAnimationFrame(() => this.loop());
  },

  onRender(fn) {
    this.hooks.push(fn);
  },

  offRender(fn) {
    this.hooks = this.hooks.filter(h => h !== fn);
  }
};

// Default hooks
window.ENGINE_RENDERER.onRender(() => {
  const el = document.querySelector("[data-render-frame]");
  if (el) el.textContent = window.ENGINE_RENDERER.frame;
});

// Auto‑start renderer
window.addEventListener("DOMContentLoaded", () => {
  window.ENGINE_RENDERER.start();
});
