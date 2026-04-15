# INFINITY‑CORE‑ENGINE — CELESTIAL OVERCLOCK PULSE
# Drives temporary overclock surges for peak‑mode transformations.

class CelestialOverclockPulse:
    def __init__(self, limit=10.0):
        self.limit = limit
        self.current = 0.0
        self.log = []

    def surge(self, amount: float):
        self.current = min(self.limit, self.current + amount)
        entry = {
            "action": "SURGE",
            "value": self.current,
            "limit": self.limit
        }
        self.log.append(entry)
        return entry

    def drain(self, amount: float):
        self.current = max(0.0, self.current - amount)
        entry = {
            "action": "DRAIN",
            "value": self.current
        }
        self.log.append(entry)
        return entry

    def status(self):
        return {
            "current": self.current,
            "limit": self.limit
        }

    def history(self):
        return self.log
