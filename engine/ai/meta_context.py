# INFINITY‑CORE‑ENGINE — META CONTEXT
# Tracks global context, narrative state, and high-level engine awareness.

class MetaContext:
    def __init__(self):
        self.context = {
            "narrative_state": "IDLE",
            "active_arcs": [],
            "global_flags": {},
            "last_event": None
        }

    def set_narrative_state(self, state: str):
        self.context["narrative_state"] = state

    def add_arc(self, arc_name: str):
        if arc_name not in self.context["active_arcs"]:
            self.context["active_arcs"].append(arc_name)

    def remove_arc(self, arc_name: str):
        if arc_name in self.context["active_arcs"]:
            self.context["active_arcs"].remove(arc_name)

    def set_flag(self, key: str, value):
        self.context["global_flags"][key] = value

    def get_flag(self, key: str):
        return self.context["global_flags"].get(key)

    def record_event(self, event: dict):
        self.context["last_event"] = event

    def get_context(self):
        return self.context
