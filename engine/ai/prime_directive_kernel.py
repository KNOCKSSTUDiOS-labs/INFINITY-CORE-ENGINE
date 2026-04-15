# INFINITY‑CORE‑ENGINE — PRIME DIRECTIVE KERNEL
# Core directive logic that governs system-wide decision hierarchy.

class PrimeDirectiveKernel:
    def __init__(self):
        self.directives = []
        self.active = None

    def add_directive(self, name: str, priority: int, rule: callable):
        self.directives.append({
            "name": name,
            "priority": priority,
            "rule": rule
        })
        self.directives.sort(key=lambda d: d["priority"], reverse=True)

    def evaluate(self, context):
        for directive in self.directives:
            result = directive["rule"](context)
            if result:
                self.active = directive
                return directive
        return None

    def current(self):
        return self.active

    def list(self):
        return self.directives
