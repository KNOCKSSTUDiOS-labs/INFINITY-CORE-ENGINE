const MotionEngine = {
  plan(core, script) {
    const lengthScore = Math.min(script.length / 400, 3); // rough heuristic

    return {
      cameraPath: lengthScore > 2 ? "orbital_sweep" : "dolly_in",
      moves: [
        { type: "establishing_slow_push", duration: 3 },
        { type: "parallax_pan", duration: 4 },
        { type: "hero_orbit", duration: 3 },
        { type: "final_drift_out", duration: 2 }
      ],
      easing: "cubic_in_out",
      notes: "Designed for cinematic, large-scale motion language."
    };
  }
};

window.MotionEngine = MotionEngine;
