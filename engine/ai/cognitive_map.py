# INFINITY‑CORE‑ENGINE — COGNITIVE MAP
# Represents conceptual links, associations, and weighted relationships.

class CognitiveMap:
    def __init__(self):
        self.nodes = {}
        self.links = []

    def add_node(self, name: str, data=None):
        self.nodes[name] = data or {}

    def add_link(self, source: str, target: str, weight: float = 1.0):
        self.links.append({
            "source": source,
            "target": target,
            "weight": weight
        })

    def get_associations(self, node: str):
        return [
            link for link in self.links
            if link["source"] == node or link["target"] == node
        ]

    def strengthen_link(self, source: str, target: str, amount: float):
        for link in self.links:
            if link["source"] == source and link["target"] == target:
                link["weight"] += amount

    def weaken_link(self, source: str, target: str, amount: float):
        for link in self.links:
            if link["source"] == source and link["target"] == target:
                link["weight"] = max(0, link["weight"] - amount)
