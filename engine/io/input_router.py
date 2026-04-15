# INFINITY‑CORE‑ENGINE — INPUT ROUTER
# Routes user, system, and engine-level inputs to the correct subsystems.

class InputRouter:
    def __init__(self):
        self.routes = {}

    def register(self, input_type: str, handler):
        self.routes[input_type] = handler

    def unregister(self, input_type: str):
        if input_type in self.routes:
            del self.routes[input_type]

    def handle(self, input_type: str, payload=None):
        if input_type in self.routes:
            return self.routes[input_type](payload)
        return None

    def list_routes(self):
        return list(self.routes.keys())
