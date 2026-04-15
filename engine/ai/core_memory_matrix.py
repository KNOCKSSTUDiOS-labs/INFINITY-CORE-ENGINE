# INFINITY‑CORE‑ENGINE — CORE MEMORY MATRIX
# Handles persistent memory nodes, weighted recall, and adaptive imprinting.

class CoreMemoryMatrix:
    def __init__(self):
        self.nodes = {}
        self.weights = {}

    def imprint(self, key: str, value, weight: float = 1.0):
        self.nodes[key] = value
        self.weights[key] = weight
        return self.nodes[key]

    def recall(self, key: str):
        return self.nodes.get(key)

    def weighted_recall(self):
        return sorted(
            self.nodes.items(),
            key=lambda x: self.weights.get(x[0], 0),
            reverse=True
        )

    def erase(self, key: str):
        self.nodes.pop(key, None)
        self.weights.pop(key, None)
