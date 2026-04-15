# INFINITY‑CORE‑ENGINE — ORCHESTRATOR
# Coordinates AI subsystems into a unified decision and action pipeline.

class Orchestrator:
    def __init__(self, intent_router, meta_reasoner, autonomy_kernel):
        self.intent_router = intent_router
        self.meta_reasoner = meta_reasoner
        self.autonomy_kernel = autonomy_kernel
        self.orchestration_log = []

    def process(self, query: dict):
        intent = query.get("intent")
        payload = query.get("payload")

        routed = self.intent_router.handle(intent, payload)
        meta = self.meta_reasoner.evaluate(query)
        auto = self.autonomy_kernel.process(query)

        result = {
            "intent_result": routed,
            "meta_analysis": meta,
            "autonomy_output": auto
        }

        self.orchestration_log.append(result)
        return result

    def history(self):
        return self.orchestration_log
