export const os = {
  name: "ASCEND-OS INFINITY",
  version: "1.0.0",
  locale: "en-US",
  region: "GLOBAL",

  setLocale(loc) {
    this.locale = loc;
  },

  setRegion(reg) {
    this.region = reg;
  },

  info() {
    return {
      name: this.name,
      version: this.version,
      locale: this.locale,
      region: this.region
    };
  },

  update(delta) {
  }
};
