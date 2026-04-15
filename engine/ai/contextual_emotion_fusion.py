# INFINITY‑CORE‑ENGINE — CONTEXTUAL EMOTION FUSION
# Blends sentiment, emotion model, and context into a unified emotional state.

class ContextualEmotionFusion:
    def __init__(self, emotion_model, sentiment_analyzer):
        self.emotion_model = emotion_model
        self.sentiment_analyzer = sentiment_analyzer
        self.fusion_log = []

    def fuse(self, context: dict):
        sentiment = self.sentiment_analyzer.analyze(context)
        emotion = self.emotion_model.get()

        fused = {
            "sentiment": sentiment["sentiment"],
            "emotion_state": emotion,
            "combined_intensity": (emotion["intensity"] + sentiment["score"]) / 2
        }

        self.fusion_log.append(fused)
        return fused

    def history(self):
        return self.fusion_log
