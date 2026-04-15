# INFINITY‑CORE‑ENGINE — MATERIAL DEFINITIONS
# Defines the core mythic-industrial materials used across the engine.

class Materials:
    def __init__(self):
        self.materials = {
            "OBSIDIAN_CORE": {
                "finish": "matte_black",
                "texture": "dense_stone",
                "energy_reactivity": "low",
                "description": "Void-born monolith base material."
            },
            "SENTINEL_STEEL": {
                "finish": "brushed_metal",
                "texture": "industrial_alloy",
                "energy_reactivity": "medium",
                "description": "Engineered structural alloy forged under cosmic pressure."
            },
            "VOIDGLASS": {
                "finish": "translucent_dark",
                "texture": "smooth",
                "energy_reactivity": "high",
                "description": "Holographic crystalline material infused with Astral Pulse Violet™."
            },
            "FLUXLINE_BLUE": {
                "finish": "glowing",
                "texture": "liquid_energy",
                "energy_reactivity": "extreme",
                "description": "Pure motion energy condensed into visible form."
            },
            "ASTRAL_PULSE_VIOLET": {
                "finish": "radiant",
                "texture": "cosmic_wave",
                "energy_reactivity": "extreme",
                "description": "Consciousness energy that powers glyph activation."
            },
            "EMBERSTONE": {
                "finish": "molten",
                "texture": "cracked_rock",
                "energy_reactivity": "volatile",
                "description": "Heat-forged transformation material used in forge states."
            }
        }

    def get(self, name: str):
        return self.materials.get(name, None)

    def list(self):
        return list(self.materials.keys())

    def add(self, name: str, data: dict):
        self.materials[name] = data
