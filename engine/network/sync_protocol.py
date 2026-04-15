# INFINITY‑CORE‑ENGINE — SYNC PROTOCOL
# Handles state synchronization between distributed engine nodes.

class SyncProtocol:
    def __init__(self):
        self.last_sync = None
        self.nodes = []

    def register_node(self, node_id: str):
        if node_id not in self.nodes:
            self.nodes.append(node_id)

    def unregister_node(self, node_id: str):
        if node_id in self.nodes:
            self.nodes.remove(node_id)

    def generate_sync_packet(self, state: dict):
        return {
            "nodes": self.nodes,
            "state": state,
            "timestamp": self._timestamp()
        }

    def _timestamp(self):
        import time
        return int(time.time())

    def receive_sync_packet(self, packet: dict):
        self.last_sync = packet
        return packet
