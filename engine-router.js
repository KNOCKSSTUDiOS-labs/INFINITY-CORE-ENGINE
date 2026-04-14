/* ============================================================
   INFINITY-CORE-ENGINE // MASTER VIEW ROUTER
   Global View Switching • Safe State Reset • Engine Navigation
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const views = document.querySelectorAll(".view");
  const triggers = document.querySelectorAll("[data-view-target]");

  function openView(id) {
    // Hide all views
    views.forEach(v => v.classList.add("hidden"));

    // Show target view
    const target = document.getElementById(id);
    if (target) target.classList.remove("hidden");

    // Auto-run view-specific loaders
    switch (id) {
      case "view-achievements":
        if (typeof renderAchievements === "function") {
          renderAchievements();
        }
        break;

      // Add more view loaders here as engine expands
      default:
        break;
    }
  }

  // Bind triggers
  triggers.forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-view-target");
      if (id) openView(id);
    });
  });

  // Default view
  openView("view-home");
});
