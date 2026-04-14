/* ============================================================
   INFINITY-CORE-ENGINE // COMMAND BAR ACHIEVEMENTS BUTTON
   Adds Achievements Shortcut • View Trigger • Sheriff-Aligned
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const commandbar = document.getElementById("ice-commandbar");
  if (!commandbar) return;

  // CREATE BUTTON
  const btn = document.createElement("button");
  btn.id = "cmd-achievements-btn";
  btn.className = "cmd-btn";
  btn.textContent = "ACHIEVEMENTS";
  btn.setAttribute("data-view-target", "view-achievements");

  // INSERT INTO RIGHT SIDE OF COMMAND BAR
  const right = commandbar.querySelector(".cmd-right");
  if (right) right.appendChild(btn);

  // CLICK HANDLER
  btn.addEventListener("click", () => {
    const views = document.querySelectorAll(".view");
    views.forEach(v => v.classList.add("hidden"));

    const target = document.getElementById("view-achievements");
    if (target) {
      target.classList.remove("hidden");
      if (typeof renderAchievements === "function") {
        renderAchievements();
      }
    }
  });
});
