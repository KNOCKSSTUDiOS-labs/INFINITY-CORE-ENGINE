// SYSTEM KERNEL · INFINITY-CORE-ENGINE
// Oversees global engine state, heartbeat, and failsafes.

(function () {
  const statusText = document.getElementById("engineStatusText");

  let heartbeat = 0;

  function log(msg) {
    console.log(
      "%cSYSTEM KERNEL · " + msg,
      "color:#9b9bb2;font-weight:bold;font-size:12px;"
    );
  }

  function updateHeartbeat() {
    heartbeat++;
    if (heartbeat % 5 === 0) {
      log("Heartbeat stable · " + heartbeat);
    }
  }

  function kernelTick() {
    updateHeartbeat();
    setTimeout(kernelTick, 2000);
  }

  function init() {
    log("Kernel online");
    if (statusText) {
      statusText.textContent = "SYSTEM KERNEL · ACTIVE";
    }
    kernelTick();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
