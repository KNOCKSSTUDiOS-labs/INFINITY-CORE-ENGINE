// ADMIN PANEL JS · INFINITY-CORE-ENGINE

(function () {
  function log(el, msg) {
    document.getElementById(el).textContent += msg + "\n";
  }

  window.triggerRender = function () {
    log("renderLog", "Triggering render job…");
    INFINITY_RENDER_QUEUE.enqueue({
      id: "ADMIN-" + Math.floor(Math.random() * 999999),
    });
  };

  window.addCredits = function () {
    INFINITY_CREDITS.addCredits(5);
    log("creditLog", "Added 5 credits.");
  };

  window.deductCredits = function () {
    INFINITY_CREDITS.deductCredits(1);
    log("creditLog", "Deducted 1 credit.");
  };

  window.emitEvent = function () {
    INFINITY_EVENTS.emit("admin:test", { time: Date.now() });
    log("eventLog", "Emitted test event.");
  };

  INFINITY_EVENTS.on("admin:test", (data) => {
    log("eventLog", "Event received: " + JSON.stringify(data));
  });
})();

