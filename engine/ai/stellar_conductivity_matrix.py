# INFINITY‑CORE‑ENGINE — STELLAR CONDUCTIVITY MATRIX
# Regulates stellar‑tier energy flow between high‑density nodes.

class StellarConductivityMatrix:
    def __init__(self):
        self.nodes = {}
        self.flow_log = []

    def register_node(self, name: str, conductivity: float):
        self.nodes[name] = conductivity
        return {"node": name, "conductivity": conductivity}

    def transfer(self, source: str, target: str, amount: float):
        if source not in self.nodes or target not in self.nodes:
            return None
        flow = {
            "source": source,
            "target": target,
            "amount": amount,
            "conductivity_source": self.nodes[source],
            "conductivity_target": self.nodes[target]
        }
        self.flow_log.append(flow)
        return flow

    def list_nodes(self):
        return self.nodes

    def history(self):
        return self.flow_log
