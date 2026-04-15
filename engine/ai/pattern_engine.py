# INFINITY‑CORE‑ENGINE — PATTERN ENGINE
# Detects behavioral, visual, and energy patterns for adaptive responses.

class PatternEngine:
    def __init__(self):
        self.patterns = []

    def register_pattern(self, name: str, detector):
        self.patterns.append({
            "name": name,
            "detector": detector
        })

    def detect(self, data):
        detected = []
        for pattern in self.patterns:
            if pattern["detector"](data):
                detected.append(pattern["name"])
        return detected

    def list_patterns(self):
        return [p["name"] for p in self.patterns]
