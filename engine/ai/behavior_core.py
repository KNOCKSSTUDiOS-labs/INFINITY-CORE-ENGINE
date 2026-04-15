# INFINITY‑CORE‑ENGINE — BEHAVIOR CORE
# Base class for AI-driven behaviors, reactions, and adaptive responses.

class BehaviorCore:
    def __init__(self):
        self.behaviors = {}
        self.active_behaviors = []

    def register_behavior(self, name: str, handler):
        self.behaviors[name] = handler

    def activate(self, name: str, context=None):
        if name in self.behaviors:
            self.active_behaviors.append(name)
            return self.behaviors[name](context)
        return None

    def deactivate(self, name: str):
        if name in self.active_behaviors:
            self.active_behaviors.remove(name)

    def list_behaviors(self):
        return list(self.behaviors.keys())

    def get_active(self):
        return self.active_behaviors
