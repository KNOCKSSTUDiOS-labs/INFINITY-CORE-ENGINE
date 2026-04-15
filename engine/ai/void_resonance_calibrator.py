# INFINITY‑CORE‑ENGINE — VOID RESONANCE CALIBRATOR
# Tunes system resonance to void‑frequency bands for deep‑state operations.

class VoidResonanceCalibrator:
    def __init__(self, baseline=0.0):
        self.baseline = baseline
        self.current = baseline
        self.log = []

    def tune(self, offset: float):
        self.current = self.baseline + offset
        entry = {
            "baseline": self.baseline,
            "offset": offset,
            "current": self.current
        }
        self.log.append(entry)
        return entry

    def reset(self):
        self.current = self.baseline
        entry = {
            "baseline": self.baseline,
            "current": self.current,
            "reset": True
        }
        self.log.append(entry)
        return entry

    def history(self):
        return self.log
