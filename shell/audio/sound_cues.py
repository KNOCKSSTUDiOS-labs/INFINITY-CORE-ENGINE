# INFINITY‑CORE‑ENGINE — SOUND CUES
# Defines the engine's audio identity: hums, pulses, impacts, surges.

class SoundCues:
    def __init__(self):
        self.cues = {
            "CORE_HUM": {
                "type": "ambient",
                "intensity": 0.4,
                "description": "Low-frequency monolith hum"
            },
            "PULSE_BEAT": {
                "type": "heartbeat",
                "intensity": 0.7,
                "description": "Engine pulse rhythm"
            },
            "FLUX_SURGE": {
                "type": "energy",
                "intensity": 0.9,
                "description": "Fluxline Blue™ surge crackle"
            },
            "EMBER_IMPACT": {
                "type": "impact",
                "intensity": 1.0,
                "description": "Emberstone™ forged-metal strike"
            },
            "ASTRAL_DRIFT": {
                "type": "ambient",
                "intensity": 0.5,
                "description": "Astral Pulse Violet™ cosmic resonance"
            }
        }

    def get(self, cue_name: str):
        return self.cues.get(cue_name, None)

    def list(self):
        return list(self.cues.keys())

    def add(self, cue_name: str, data: dict):
        self.cues[cue_name] = data
