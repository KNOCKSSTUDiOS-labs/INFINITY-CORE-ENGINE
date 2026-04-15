# INFINITY‑CORE‑ENGINE — VOID CHANNEL EXTRACTOR
# Extracts raw void‑tier energy from dimensional fractures for high‑risk subsystems.

class VoidChannelExtractor:
    def __init__(self, extraction_limit=5000.0):
        self.extraction_limit = extraction_limit
        self.current_extract = 0.0
        self.log = []

    def extract(self, amount: float):
        self.current_extract = min(self.extraction_limit, self.current_extract + amount)
        entry = {
            "action": "EXTRACT",
            "value": self.current_extract,
            "limit": self.extraction_limit
        }
        self.log.append(entry)
        return entry

    def purge(self):
        entry = {
            "action": "PURGE",
            "value": self.current_extract
        }
        self.current_extract = 0.0
        self.log.append(entry)
        return entry

    def status(self):
        return {
            "current_extract": self.current_extract,
            "extraction_limit": self.extraction_limit
        }

    def history(self):
        return self.log
