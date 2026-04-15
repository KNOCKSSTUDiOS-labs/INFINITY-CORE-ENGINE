# INFINITY‑CORE‑ENGINE — BOOT SEQUENCE
# Void → Pulse → Monolith Rise → Glyph Activation → Energy Ignition → Identity Lock → Online

class BootSequence:
    def __init__(self, core, glyphs, energy):
        self.core = core
        self.glyphs = glyphs
        self.energy = energy
        self.sequence_log = []

    def step(self, name: str):
        self.sequence_log.append(name)
        return name

    def run(self):
        self.step("VOID")
        self.energy.charge(flux=0.5)
        self.step("FIRST_PULSE")

        self.core.set_mode(self.core.mode.ACTIVE if hasattr(self.core, "mode") else "ACTIVE")
        self.step("MONOLITH_RISE")

        for glyph in self.glyphs.glyphs.keys():
            self.glyphs.activate(glyph)
        self.step("GLYPH_ACTIVATION")

        self.energy.charge(flux=1.0, astral=0.5, ember=0.3)
        self.step("ENERGY_IGNITION")

        self.step("IDENTITY_LOCK")

        self.core.set_mode(self.core.mode.GOD_MODE if hasattr(self.core, "mode") else "GOD_MODE")
        self.step("ENGINE_ONLINE")

        return self.sequence_log
