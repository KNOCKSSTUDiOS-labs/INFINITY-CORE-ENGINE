# INFINITY‑CORE‑ENGINE — EXPRESSION ENGINE
# Converts emotional vectors and context into expressive output signals.

class ExpressionEngine:
    def __init__(self, emotion_model):
        self.emotion_model = emotion_model
        self.expressions = []

    def generate(self, context: dict):
        emotion = self.emotion_model.get()

        output = {
            "tone": self._tone(emotion),
            "energy": self._energy(emotion),
            "signature": self._signature(context, emotion)
        }

        self.expressions.append(output)
        return output

    def _tone(self, emotion):
        if emotion["confidence"] > 0.7:
            return "assertive"
        if emotion["intensity"] > 0.7:
            return "charged"
        return "neutral"

    def _energy(self, emotion):
        return (emotion["intensity"] + emotion["agility"]) / 2

    def _signature(self, context, emotion):
        return {
            "context_hash": hash(str(context)) % 999999,
            "aura_level": emotion["aura"]
        }

    def history(self):
        return self.expressions
