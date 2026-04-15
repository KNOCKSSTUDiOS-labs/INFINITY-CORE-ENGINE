# INFINITY‑CORE‑ENGINE — DIVINE MODE ENGINE
# Handles god-tier transformations, resonance multipliers, and divine logic.

class DivineModeEngine:
    def __init__(self, mythic_core):
        self.mythic_core = mythic_core
        self.modes = []
        self.active_mode = None

    def define_mode(self, name: str, multiplier: float, aura: str):
        self.modes.append({
            "name": name,
            "multiplier": multiplier,
            "aura": aura
        })

    def activate(self, name: str):
        mode = next((m for m in self.modes if m["name"] == name), None)
        if not mode:
            return None

        self.active_mode = mode
        self.mythic_core.ascend(
            tier=name,
            amplifier=mode["multiplier"],
            signature={"aura": mode["aura"]}
        )
        return mode

    def current(self):
        return self.active_mode

    def list_modes(self):
        return self.modes
