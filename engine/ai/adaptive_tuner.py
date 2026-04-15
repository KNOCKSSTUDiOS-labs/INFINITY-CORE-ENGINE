# INFINITY‑CORE‑ENGINE — ADAPTIVE TUNER
# Dynamically adjusts engine parameters based on patterns and memory.

class AdaptiveTuner:
    def __init__(self, personality, memory):
        self.personality = personality
        self.memory = memory

    def tune(self):
        recent = self.memory.recall_short()
        if not recent:
            return self.personality.all_traits()

        intensity_shift = len(recent) / 50
        focus_shift = sum(1 for r in recent if r.get("type") == "focus") / 10

        self.personality.set_trait("INTENSITY", self.personality.get_trait("INTENSITY") + intensity_shift)
        self.personality.set_trait("FOCUS", self.personality.get_trait("FOCUS") + focus_shift)

        return self.personality.all_traits()
