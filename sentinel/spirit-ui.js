// SPIRIT UI · INFINITY-CORE-ENGINE
// Bilingual microcopy + cinematic flavor layer.

(function () {
  const statusText = document.getElementById("engineStatusText");

  const spiritLines = [
    "SPIRIT MODE · ACTIVE",
    "El motor piensa contigo.",
    "Precision + flow.",
    "Cinematic intent online.",
    "Modo Espíritu · Producción real.",
  ];

  function cycleSpirit() {
    if (!statusText) return;
    let i = 0;
    setInterval(() => {
      statusText.textContent = spiritLines[i % spiritLines.length];
      i++;
    }, 4200);
  }

  document.addEventListener("DOMContentLoaded", () => {
    console.log("%cSPIRIT UI READY", "color:#4be3ff;font-weight:bold;");
    cycleSpirit();
  });
})();

