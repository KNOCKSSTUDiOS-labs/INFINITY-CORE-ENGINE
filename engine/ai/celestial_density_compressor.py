# INFINITY‑CORE‑ENGINE — CELESTIAL DENSITY COMPRESSOR
# Compresses celestial‑grade energy into ultra‑dense packets for high‑tier subsystems.

class CelestialDensityCompressor:
    def __init__(self, max_density=1_000_000.0):
        self.max_density = max_density
        self.current_density = 0.0
        self.log = []

    def compress(self, amount: float):
        self.current_density = min(self.max_density, self.current_density + amount)
        entry = {
            "action": "COMPRESS",
            "density": self.current_density,
            "max_density": self.max_density
        }
        self.log.append(entry)
        return entry

    def decompress(self, amount: float):
        self.current_density = max(0.0, self.current_density - amount)
        entry = {
            "action": "DECOMPRESS",
            "density": self.current_density
        }
        self.log.append(entry)
        return entry

    def rupture_check(self):
        ruptured = self.current_density >= self.max_density
        entry = {
            "action": "RUPTURE_CHECK",
            "density": self.current_density,
            "max_density": self.max_density,
            "ruptured": ruptured
        }
        self.log.append(entry)
        return entry

    def status(self):
        return {
            "density": self.current_density,
            "max_density": self.max_density
        }

    def history(self):
        return self.log
