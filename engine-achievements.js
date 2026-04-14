/* ============================================================
   INFINITY-CORE-ENGINE // ACHIEVEMENT REGISTRY
   Tracks Badges • Stores Milestones • Syncs With UI
   ============================================================ */

const ICE_ACHIEVEMENTS = {
  data: {
    badges: [],
    milestones: [],
    levels: {}
  },

  init() {
    this.load();
    console.log("[ACHIEVEMENTS] REGISTRY ONLINE");
  },

  load() {
    const saved = localStorage.getItem("ICE_ACHIEVEMENTS");
    if (saved) {
      this.data = JSON.parse(saved);
    }
  },

  save() {
    localStorage.setItem("ICE_ACHIEVEMENTS", JSON.stringify(this.data));
  },

  awardBadge(badgeId, label) {
    if (!this.data.badges.includes(badgeId)) {
      this.data.badges.push(badgeId);
      this.save();
      ICE_NOTIFY.badgeUnlocked(label);
    }
  },

  addMilestone(name, value) {
    this.data.milestones.push({ name, value, time: Date.now() });
    this.save();
    ICE_NOTIFY.system(`MILESTONE // ${name}`);
  },

  setLevel(category, level) {
    this.data.levels[category] = level;
    this.save();
    ICE_NOTIFY.success(`LEVEL UP // ${category} → ${level}`);
  },

  getBadges() {
    return this.data.badges;
  },

  getMilestones() {
    return this.data.milestones;
  },

  getLevels() {
    return this.data.levels;
  }
};

document.addEventListener("DOMContentLoaded", () => ICE_ACHIEVEMENTS.init());
