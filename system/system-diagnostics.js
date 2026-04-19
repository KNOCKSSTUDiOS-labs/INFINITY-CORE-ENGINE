// SYSTEM DIAGNOSTICS · INFINITY-CORE-ENGINE
// Health checks, latency pings, environment scan, and fault detection.

(function () {
  const statusText = document.getElementById("engineStatusText");

  function log(msg) {
    console.log(
      "%cDIAGNOSTICS · " + msg,
      "color:#4be3ff;font-weight:bold;font-size:12px;"
    );
  }

  // Simulated latency check
  async function ping() {
    const start = performance.now();
    await delay(200 + Math.random() * 300);
    const end = performance.now();
    return Math.floor(end - start);
  }

  // Simulated environment scan
  function scanEnvironment() {
    return {
      userAgent: navigator.userAgent,
      online: navigator.onLine,
      cores: navigator.hardwareConcurrency || "unknown",
      memory: navigator.deviceMemory || "unknown",
    };
  }

  // Fault detection (simulated)
  function detectFaults() {
    const faults = [];

    if (!navigator.onLine) faults.push("OFFLINE_MODE");
    if ((navigator.deviceMemory || 4) < 2) faults.push("LOW_MEMORY");
    if ((navigator.hardwareConcurrency || 4) < 2) faults.push("LOW_CPU");

    return faults;
  }

  async function runDiagnostics() {
    log("Running diagnostics…");

    const latency = await ping();
    log("Latency: " + latency + "ms");

    const env = scanEnvironment();
    log("Environment: " + JSON.stringify(env));

    const faults = detectFaults();
    if (faults.length > 0) {
      log("Faults detected: " + faults.join(", "));
    } else {
      log("No faults detected.");
    }

    if (statusText) {
      statusText.textContent = "DIAGNOSTICS · COMPLETE";
    }
  }

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  document.addEventListener("DOMContentLoaded", () => {
    log("Diagnostics Module Ready");
    runDiagnostics();
  });
})();

