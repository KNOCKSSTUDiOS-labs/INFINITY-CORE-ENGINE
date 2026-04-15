# INFINITY‑CORE‑ENGINE — ASTRAL SYNC CORE
# Synchronizes astral‑tier subsystems into a unified harmonic state.

class AstralSyncCore:
    def __init__(self):
        self.subsystems = {}
        self.active_sync = None
        self.log = []

    def register_subsystem(self, name: str, resonance: float):
        self.subsystems[name] = resonance
        entry = {
            "action": "REGISTER_SUBSYSTEM",
            "name": name,
            "resonance": resonance
        }
        self.log.append(entry)
        return entry

    def synchronize(self, names: list):
        selected = {n: self.subsystems[n] for n in names if n in self.subsystems}
        if not selected:
            return None
        harmonic = sum(selected.values()) / len(selected)
        self.active_sync = {
            "subsystems": selected,
            "harmonic": harmonic
        }
        entry = {
            "action": "SYNCHRONIZE",
            "sync": self.active_sync
        }
        self.log.append(entry)
        return entry

    def status(self):
        return self.active_sync

    def history(self):
        return self.log
