# INFINITY‑CORE‑ENGINE — TELEMETRY
# Tracks engine performance metrics, usage patterns, and subsystem stats.

import time

class Telemetry:
    def __init__(self):
        self.metrics = {
            "pulse_rate": [],
            "energy_levels": [],
            "mode_switches": [],
            "render_events": 0,
            "uptime_start": int(time.time())
        }

    def record_pulse(self, pulse_value: int):
        self.metrics["pulse_rate"].append({
            "value": pulse_value,
            "timestamp": int(time.time())
        })

    def record_energy(self, energy_state: dict):
        self.metrics["energy_levels"].append({
            "state": energy_state,
            "timestamp": int(time.time())
        })

    def record_mode_switch(self, mode: str):
        self.metrics["mode_switches"].append({
            "mode": mode,
            "timestamp": int(time.time())
        })

    def increment_render_events(self):
        self.metrics["render_events"] += 1

    def get_metrics(self):
        return self.metrics

    def uptime(self):
        return int(time.time()) - self.metrics["uptime_start"]
