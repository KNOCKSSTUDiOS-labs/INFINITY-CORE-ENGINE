# INFINITY‑CORE‑ENGINE — ZENITH OVERDRIVE ARRAY
# Activates peak‑tier overdrive sequences for god‑mode transformations.

class ZenithOverdriveArray:
    def __init__(self):
        self.stages = []
        self.active_stage = None
        self.log = []

    def add_stage(self, name: str, multiplier: float):
        stage = {
            "name": name,
            "multiplier": multiplier
        }
        self.stages.append(stage)
        return stage

    def engage(self, name: str):
        for stage in self.stages:
            if stage["name"] == name:
                self.active_stage = stage
                entry = {
                    "action": "ENGAGE",
                    "stage": stage
                }
                self.log.append(entry)
                return entry
        return None

    def disengage(self):
        entry = {
            "action": "DISENGAGE",
            "stage": self.active_stage
        }
        self.active_stage = None
        self.log.append(entry)
        return entry

    def status(self):
        return self.active_stage

    def history(self):
        return self.log
