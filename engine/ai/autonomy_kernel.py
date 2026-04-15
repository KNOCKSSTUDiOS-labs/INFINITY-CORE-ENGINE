# INFINITY‑CORE‑ENGINE — AUTONOMY KERNEL
# Governs self-directed actions, internal triggers, and autonomous decisions.

class AutonomyKernel:
    def __init__(self, decision_tree, pattern_engine, reinforcement_loop):
        self.decision_tree = decision_tree
        self.pattern_engine = pattern_engine
        self.reinforcement_loop = reinforcement_loop
        self.autonomous_actions = []

    def process(self, context: dict):
        patterns = self.pattern_engine.detect(context)
        decision = None

        if patterns:
            decision = self.decision_tree.evaluate("root", context)

        reinforcement = self.reinforcement_loop.evaluate()

        result = {
            "patterns_detected": patterns,
            "decision": decision,
            "reinforcement_bias": reinforcement
        }

        self.autonomous_actions.append(result)
        return result

    def history(self):
        return self.autonomous_actions
