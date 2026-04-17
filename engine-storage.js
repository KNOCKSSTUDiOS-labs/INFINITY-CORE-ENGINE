/*
  INFINITY‑CORE‑ENGINE • STORAGE LAYER
  ------------------------------------------------
  Handles:
    • Local engine state persistence
    • Session caching
    • Engine recovery after reload
    • Subsystem snapshot storage

  Storage keys:
    • ICE_ENGINE_STATE
    • ICE_REALITY_CORE
    • ICE_VISUAL_PROTOCOL
    • ICE_ULTRA_INSTINCT
    • ICE_HYPERSTATE
*/

window.ENGINE_STORAGE = {
  keys: {
    engine: "ICE_ENGINE_STATE",
    rc: "ICE_REALITY_CORE",
    vp: "ICE_VISUAL_PROTOCOL",
    ui: "ICE_ULTRA_INSTINCT",
    hs: "ICE_HYPERSTATE"
  },

  save(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.warn("ENGINE STORAGE SAVE ERROR:", err);
    }
  },

  load(key, fallback = null) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (err) {
      console.warn("ENGINE STORAGE LOAD ERROR:", err);
      return fallback;
    }
  },

  restoreAll() {
    // Engine
    const engineState = this.load(this.keys.engine);
    if (engineState && window.INFINITY_CORE_ENGINE) {
      window.INFINITY_CORE_ENGINE.updateStatus(engineState.status);
      window.INFINITY_CORE_ENGINE.updateMode(engineState.mode);
      window.INFINITY_CORE_ENGINE.updateMetrics(engineState.metrics);
    }

    // Reality‑Core
    const rcState = this.load(this.keys.rc);
    if (rcState && window.REALITY_CORE) {
      window.REALITY_CORE.applyState(rcState);
    }

    // Visual Protocol
    const vpState = this.load(this.keys.vp);
    if (vpState && window.ENGINE_VISUAL_PROTOCOL) {
      window.ENGINE_VISUAL_PROTOCOL.applyState(vpState);
    }

    // Ultra Instinct
    const uiState = this.load(this.keys.ui);
    if (uiState && window.ULTRA_INSTINCT) {
      window.
