# INFINITY‑CORE‑ENGINE — QUANTUM FLUX REGULATOR
# Regulates quantum‑tier fluctuations to maintain subsystem stability.

class QuantumFluxRegulator:
    def __init__(self, threshold=0.001):
        self.threshold = threshold
        self.current_flux = 0.0
        self.log = []

    def measure(self, flux: float):
        self.current_flux = flux
        entry = {
            "flux": flux,
            "stable": abs(flux) <= self.threshold
        }
        self.log.append(entry)
        return entry

    def recalibrate(self, new_threshold: float):
        self.threshold = new_threshold
        entry = {
            "action": "RECALIBRATE",
            "threshold": new_threshold
        }
        self.log.append(entry)
        return entry

    def status(self):
        return {
            "current_flux": self.current_flux,
            "threshold": self.threshold
        }

    def history(self):
        return self.log
