# INFINITY‑CORE‑ENGINE — PERSONALITY MATRIX
# Defines personality traits, intensity levels, and adaptive tuning.

class PersonalityMatrix:
    def __init__(self):
        self.traits = {
            "INTENSITY": 0.7,
            "FOCUS": 0.9,
            "CREATIVE_DRIVE": 0.85,
            "STABILITY": 0.6,
            "RESPONSE_SPEED": 1.0
        }

    def set_trait(self, trait: str, value: float):
        if trait in self.traits:
            self.traits[trait] = max(0.0, min(1.0, value))

    def get_trait(self, trait: str):
        return self.traits.get(trait, None)

    def all_traits(self):
        return self.traits
