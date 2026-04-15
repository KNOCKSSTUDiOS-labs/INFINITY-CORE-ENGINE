# INFINITY‑CORE‑ENGINE — CHRONO SYNC HARMONICS
# Synchronizes temporal harmonics across multi‑timeline subsystems.

class ChronoSyncHarmonics:
    def __init__(self):
        self.timelines = {}
        self.active_sync = None
        self.log = []

    def register_timeline(self, name: str, frequency: float):
        self.timelines[name] = frequency
        entry = {
            "action": "REGISTER_TIMELINE",
            "name": name,
            "frequency": frequency
        }
        self.log.append(entry)
        return entry

    def sync(self, timeline_a: str, timeline_b: str):
        if timeline_a not in self.timelines or timeline_b not in self.timelines:
            return None
        freq_a = self.timelines[timeline_a]
        freq_b = self.timelines[timeline_b]
        midpoint = (freq_a + freq_b) / 2
        self.active_sync = {
            "timeline_a": timeline_a,
            "timeline_b": timeline_b,
            "harmonic": midpoint
        }
        entry = {
            "action": "SYNC",
            "data": self.active_sync
        }
        self.log.append(entry)
        return entry

    def status(self):
        return self.active_sync

    def history(self):
        return self.log
