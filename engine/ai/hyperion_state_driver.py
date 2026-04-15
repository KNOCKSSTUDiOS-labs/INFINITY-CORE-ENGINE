# INFINITY‑CORE‑ENGINE — HYPERION STATE DRIVER
# Manages elevated operational states and transitions between power tiers.

class HyperionStateDriver:
    def __init__(self):
        self.state = "BASE"
        self.log = []

    def shift(self, new_state: str):
        entry = {
            "from": self.state,
            "to": new_state
        }
        self.state = new_state
        self.log.append(entry)
        return entry

    def current(self):
        return self.state

    def history(self):
        return self.log
