# INFINITY‑CORE‑ENGINE — OMEGA CORE REACTOR
# Generates ultra‑dense energy output for top‑tier transformation modes.

class OmegaCoreReactor:
    def __init__(self, max_output=10000.0):
        self.max_output = max_output
        self.output = 0.0
        self.log = []

    def ignite(self, amount: float):
        self.output = min(self.max_output, self.output + amount)
        entry = {
            "action": "IGNITE",
            "output": self.output,
            "max_output": self.max_output
        }
        self.log.append(entry)
        return entry

    def cool(self, amount: float):
        self.output = max(0.0, self.output - amount)
        entry = {
            "action": "COOL",
            "output": self.output
        }
        self.log.append(entry)
        return entry

    def overload(self):
        overloaded = self.output >= self.max_output
        entry = {
            "action": "OVERLOAD_CHECK",
            "output": self.output,
            "max_output": self.max_output,
            "overloaded": overloaded
        }
        self.log.append(entry)
        return entry

    def status(self):
        return {
            "output": self.output,
            "max_output": self.max_output
        }

    def history(self):
        return self.log
