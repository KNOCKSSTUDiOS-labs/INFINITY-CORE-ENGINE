export const voice = {
  speak(text) {
    const utter = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utter);
  },

  stop() {
    speechSynthesis.cancel();
  },

  update(delta) {
  }
};
