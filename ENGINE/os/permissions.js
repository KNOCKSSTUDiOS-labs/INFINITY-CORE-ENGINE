export const permissions = {
  rules: {},

  grant(subject, action) {
    if (!this.rules[subject]) {
      this.rules[subject] = new Set();
    }
    this.rules[subject].add(action);
  },

  revoke(subject, action) {
    if (!this.rules[subject]) return;
    this.rules[subject].delete(action);
  },

  allowed(subject, action) {
    return this.rules[subject] && this.rules[subject].has(action);
  },

  update(delta) {
  }
};
