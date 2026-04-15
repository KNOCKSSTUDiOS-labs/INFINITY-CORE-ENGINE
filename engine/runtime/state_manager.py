# INFINITY‑CORE‑ENGINE — STATE MANAGER
# Handles global engine state, transitions, and persistence.

class StateManager:
    def __init__(self):
        self.state = {
            "engine_online": False,
            "current_mode": "IDLE",
            "last_pulse": 0,
            "glyphs_active": [],
            "energy_snapshot": {}
        }

    def update_mode(self, mode: str):
        self.state["current_mode"] = mode

    def update_pulse(self, pulse: int):
        self.state["last_pulse"] = pulse

    def update_glyphs(self, glyph_list: list):
        self.state["glyphs_active"] = glyph_list

    def update_energy(self, energy_state: dict):
        self.state["energy_snapshot"] = energy_state

    def set_online(self, value: bool):
        self.state["engine_online"] = value

    def get_state(self):
        return self.state
