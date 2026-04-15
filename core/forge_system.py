# INFINITY‑CORE‑ENGINE — FORGE SYSTEM
# Creation logic for modules, modes, visuals, and sub-engines.

class ForgeSystem:
    def __init__(self):
        self.forged_modules = []
        self.forged_modes = []
        self.forged_materials = []
        self.forged_engines = []

    def forge_module(self, name: str, data: dict):
        module = {"name": name, "data": data}
        self.forged_modules.append(module)
        return module

    def forge_mode(self, name: str, properties: dict):
        mode = {"name": name, "properties": properties}
        self.forged_modes.append(mode)
        return mode

    def forge_material(self, name: str, attributes: dict):
        material = {"name": name, "attributes": attributes}
        self.forged_materials.append(material)
        return material

    def forge_engine(self, name: str, signature: dict):
        engine = {"name": name, "signature": signature}
        self.forged_engines.append(engine)
        return engine

    def get_forge_state(self):
        return {
            "modules": self.forged_modules,
            "modes": self.forged_modes,
            "materials": self.forged_materials,
            "engines": self.forged_engines
        }
