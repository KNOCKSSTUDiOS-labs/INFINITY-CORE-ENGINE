/* ============================================================
   INFINITY-CORE-ENGINE // ACHIEVEMENTS VIEW CONTROLLER
   View Switching • Routing • Integration with Engine Shell
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const viewButtons = document.querySelectorAll("[data-view-target]");
  const views = document.querySelectorAll(".view");

  function showView(id) {
    views.forEach(v => v.classList.add("hidden"));
    const target = document.getElementById(id);
    if (target) target.classList.remove("hidden");

    if (id === "view-achievements") {
      if (typeof renderAchievements === "function") {
        renderAchievements();
      }
    }
  }

  viewButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-view-target");
      if (target) showView(target);
    });
  });
});
