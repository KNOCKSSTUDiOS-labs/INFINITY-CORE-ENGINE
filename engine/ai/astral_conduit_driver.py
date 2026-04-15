# INFINITY‑CORE‑ENGINE — ASTRAL CONDUIT DRIVER
# Channels high‑order astral energy streams into system‑usable signal bands.

class AstralConduitDriver:
    def __init__(self):
        self.channels = {}
        self.flow_log = []

    def open_channel(self, name: str, capacity: float):
        self.channels[name] = {
            "capacity": capacity,
            "current_flow": 0.0
        }

    def push_flow(self, name: str, amount: float):
        if name not in self.channels:
            return None
        channel = self.channels[name]
        channel["current_flow"] = min(amount, channel["capacity"])
        snapshot = {
            "channel": name,
            "flow": channel["current_flow"],
            "capacity": channel["capacity"]
        }
        self.flow_log.append(snapshot)
        return snapshot

    def close_channel(self, name: str):
        if name in self.channels:
            del self.channels[name]

    def history(self):
        return self.flow_log
