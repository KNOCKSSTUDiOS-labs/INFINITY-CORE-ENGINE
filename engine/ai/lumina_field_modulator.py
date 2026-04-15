# INFINITY‑CORE‑ENGINE — LUMINA FIELD MODULATOR
# Modulates high‑intensity lumina fields for radiant‑tier subsystem boosts.

class LuminaFieldModulator:
    def __init__(self, max_lumina=10000.0):
        self.max_lumina = max_lumina
        self.current_lumina = 0.0
        self.log = []

    def infuse(self, amount: float):
        self.current_lumina = min(self.max_lumina, self.current_lumina + amount)
        entry = {
            "action": "INFUSE",
            "lumina": self.current_lumina,
            "max_lumina": self.max_lumina
        }
        self.log.append(entry)
        return entry

    def dim(self, amount: float):
        self.current_lumina = max(0.0, self.current_lumina - amount)
        entry = {
            "action": "DIM",
            "lumina": self.current_lumina
        }
        self.log.append(entry)
        return entry

    def flare(self):
        entry = {
            "action": "FLARE",
            "lumina": self.current_lumina,
            "max_lumina": self.max_lumina,
            "flared": self.current_lumina >= self.max_lumina
        }
        self.log.append(entry)
        return entry

    def status(self):
        return {
            "lumina": self.current_lumina,
            "max_lumina": self.max_lumina
        }

    def history(self):
        return self.log
