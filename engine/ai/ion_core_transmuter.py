# INFINITY‑CORE‑ENGINE — ION CORE TRANSMUTER
# Transmutes raw ion energy into specialized elemental output streams.

class IonCoreTransmuter:
    def __init__(self):
        self.elements = {}
        self.active_element = None
        self.log = []

    def register_element(self, name: str, efficiency: float):
        self.elements[name] = efficiency
        entry = {
            "action": "REGISTER_ELEMENT",
            "name": name,
            "efficiency": efficiency
        }
        self.log.append(entry)
        return entry

    def transmute(self, name: str, input_energy: float):
        if name not in self.elements:
            return None
        output = input_energy * self.elements[name]
        self.active_element = {
            "element": name,
            "input": input_energy,
            "output": output
        }
        entry = {
            "action": "TRANSMUTE",
            "data": self.active_element
        }
        self.log.append(entry)
        return entry

    def status(self):
        return self.active_element

    def history(self):
        return self.log
