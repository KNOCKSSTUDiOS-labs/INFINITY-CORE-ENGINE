/*
  INFINITY‑CORE‑ENGINE • TELEMETRY LAYER
  ------------------------------------------------
  Tracks:
    • Engine performance metrics
    • Subsystem timings
    • Event throughput
    • UI latency
    • Audio reactor intensity
    • Hyperstate frequency

  Outputs:
    • Live telemetry panel (if present)
    • JSON snapshots
    • Engine‑wide broadcast events
*/

window.ENGINE_TELEMETRY = {
  metrics: {
    fps: 0,
    lastFrame: performance.now(),
    eventsPerSecond: 0,
    eventCount: 0,
    audioIntensity: 0,
