animation/renderer.js 
class AnimationRenderer {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId) || document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.animations = [];
    this.isRunning = false;
    this.fps = 60;
    this.deltaTime = 1000 / this.fps;
    this.setupCanvas();
  }

  setupCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    window.addEventListener('resize', () => this.setupCanvas());
  }

  addAnimation(config) {
    const animation = {
      id: Math.random().toString(36),
      startTime: Date.now(),
      duration: config.duration || 1000,
      easing: config.easing || 'linear',
      draw: config.draw,
      onComplete: config.onComplete,
      data: config.data || {}
    };
    this.animations.push(animation);
    return animation.id;
  }

  easeLinear(t) { return t; }
  easeInQuad(t) { return t * t; }
  easeOutQuad(t) { return t * (2 - t); }
  easeInOutQuad(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }

  getEasingFunction(name) {
    const easings = {
      linear: this.easeLinear,
      inQuad: this.easeInQuad,
      outQuad: this.easeOutQuad,
      inOutQuad: this.easeInOutQuad
    };
    return easings[name] || this.easeLinear;
  }

  render() {
    const now = Date.now();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.animations = this.animations.filter(anim => {
      const elapsed = now - anim.startTime;
      const progress = Math.min(elapsed / anim.duration, 1);
      const eased = this.getEasingFunction(anim.easing)(progress);

      anim.draw(this.ctx, eased, anim.data);

      if (progress === 1 && anim.onComplete) {
        anim.onComplete();
      }

      return progress < 1;
    });

    if (this.isRunning) {
      requestAnimationFrame(() => this.render());
    }
  }

  play() {
    this.isRunning = true;
    this.render();
  }

  stop() {
    this.isRunning = false;
  }

  clear() {
    this.animations = [];
  }
}

export default AnimationRenderer;
