# INFINITY‑CORE‑ENGINE — ETHERIC WAVEFORM MODULATOR
# Shapes etheric waveform patterns for cross‑realm signal coherence.

class EthericWaveformModulator:
    def __init__(self):
        self.waveforms = []
        self.last_output = None

    def generate(self, amplitude: float, frequency: float):
        waveform = {
            "amplitude": amplitude,
            "frequency": frequency,
            "signature": amplitude * frequency
        }
        self.waveforms.append(waveform)
        self.last_output = waveform
        return waveform

    def modulate(self, factor: float):
        if not self.last_output:
            return None
        modulated = {
            "amplitude": self.last_output["amplitude"] * factor,
            "frequency": self.last_output["frequency"] * factor,
            "signature": self.last_output["signature"] * factor
        }
        self.waveforms.append(modulated)
        self.last_output = modulated
        return modulated

    def history(self):
        return self.waveforms
