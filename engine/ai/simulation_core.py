# INFINITY‑CORE‑ENGINE — SIMULATION CORE
# Runs hypothetical engine states for testing, training, and forecasting.

class SimulationCore:
    def __init__(self, energy_system, glyph_system):
        self.energy_system = energy_system
        self.glyph_system = glyph_system
        self.simulations = []

    def run(self, scenario: dict):
        energy_clone = scenario.get("energy", self.energy_system.get_state())
        glyph_clone = scenario.get("glyphs", self.glyph_system.get_state())

        result = {
            "energy_after": {
                "fluxline": min(100, energy_clone["fluxline"] + scenario.get("fluxline_delta", 0)),
                "astral_pulse": min(100, energy_clone["astral_pulse"] + scenario.get("astral_pulse_delta", 0)),
                "emberstone": min(100, energy_clone["emberstone"] + scenario.get("emberstone_delta", 0))
            },
            "glyphs_after": glyph_clone,
            "scenario": scenario
        }

        self.simulations.append(result)
        return result

    def list_simulations(self):
        return self.simulations
