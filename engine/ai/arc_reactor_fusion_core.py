# INFINITY‑CORE‑ENGINE — ARC REACTOR FUSION CORE
# Generates continuous fusion‑grade energy for long‑duration transformation states.

class ArcReactorFusionCore:
    def __init__(self, fusion_limit=25000.0):
        self.fusion_limit = fusion_limit
        self.output = 0.0
        self.log = []

    def energize(self, amount: float):
        self.output = min(self.fusion_limit, self.output + amount)
        entry = {
            "action": "ENERGIZE",
            "output": self.output,
            "fusion_limit": self.fusion_limit
        }
        self.log.append(entry)
        return entry

    def defuse(self, amount: float):
        self.output = max(0.0, self.output - amount)
        entry = {
            "action": "DEFUSE",
            "output": self.output
        }
        self.log.append(entry)
        return entry

    def meltdown_check(self):
        meltdown = self.output >= self.fusion_limit
        entry = {
            "action": "MELTDOWN_CHECK",
            "output": self.output,
            "fusion_limit": self.fusion_limit,
            "meltdown": meltdown
        }
        self.log.append(entry)
        return entry

    def status(self):
        return {
            "output": self.output,
            "fusion_limit": self.fusion_limit
        }

    def history(self):
        return self.log
