# INFINITY‑CORE‑ENGINE — SIGNAL ROUTER
# Routes internal signals between subsystems with priority weighting.

class SignalRouter:
    def __init__(self):
        self.routes = {}
        self.log = []

    def register(self, signal_name: str, handler):
        self.routes[signal_name] = handler

    def send(self, signal_name: str, payload=None):
        handler = self.routes.get(signal_name)
        if not handler:
            return None
        result = handler(payload)
        self.log.append({"signal": signal_name, "payload": payload, "result": result})
        return result

    def history(self):
        return self.log
