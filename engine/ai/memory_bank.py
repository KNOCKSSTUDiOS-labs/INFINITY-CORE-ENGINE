# INFINITY‑CORE‑ENGINE — MEMORY BANK
# Stores long-term and short-term engine memory for adaptive behavior.

class MemoryBank:
    def __init__(self):
        self.short_term = []
        self.long_term = []

    def store_short(self, data: dict):
        self.short_term.append(data)
        if len(self.short_term) > 50:
            self.short_term.pop(0)

    def store_long(self, data: dict):
        self.long_term.append(data)

    def recall_short(self):
        return self.short_term[-10:]

    def recall_long(self):
        return self.long_term

    def clear_short(self):
        self.short_term = []

    def clear_long(self):
        self.long_term = []
