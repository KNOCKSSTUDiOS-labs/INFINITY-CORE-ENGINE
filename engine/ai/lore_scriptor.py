# INFINITY‑CORE‑ENGINE — LORE SCRIPTOR
# Generates lore fragments, mythic descriptions, and world-building text.

class LoreScriptor:
    def __init__(self):
        self.entries = []

    def generate(self, seed: dict):
        theme = seed.get("theme", "unknown")
        power = seed.get("power", "undefined")
        tone = seed.get("tone", "neutral")

        text = f"In the era of {theme}, the engine's core resonated with {power}, shaping destinies with a {tone} undertone."

        entry = {
            "seed": seed,
            "text": text
        }

        self.entries.append(entry)
        return entry

    def history(self):
        return self.entries
