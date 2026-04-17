"use client";

import { useState } from "react";

export default function SceneDirectorModule() {
  const [sceneInput, setSceneInput] = useState("");
  const [sceneOutput, setSceneOutput] = useState(null);

  const handleGenerate = () => {
    if (!sceneInput.trim()) return;

    // Placeholder for INFINITY‑CORE‑ENGINE integration
    setSceneOutput({
      title: "Generated Scene",
      summary:
        "Your INFINITY‑CORE‑ENGINE cinematic scene output will appear here once integrated.",
      shots: [
        "Wide establishing shot",
        "Medium character reveal",
        "Close-up emotional beat",
        "Tracking shot movement",
        "Dynamic action frame",
        "Atmospheric closing shot",
      ],
      cinematography: [
        "Camera angle",
        "Lens choice",
        "Lighting style",
        "Color grading",
        "Motion style",
        "Atmosphere",
      ],
      prompts: [
        "Veo-ready cinematic scene prompt",
        "Runway-ready sequence prompt",
        "Flux/Firefly/Fabrica motion prompt",
      ],
    });
  };

  return (
    <div className="flex flex-col h-full">
      {/* Input */}
      <div className="p-6 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <h3 className="text-xl font-semibold tracking-wide">Scene Director</h3>
        <p className="text-slate-400 text-sm mt-1">
          Describe a cinematic moment, emotion, or camera move. The engine will direct it.
        </p>

        <div className="mt-4 flex gap-3">
          <input
            type="text"
            value={sceneInput}
            onChange={(e) => setSceneInput(e.target.value)}
            placeholder="Example: A neon-lit chase through a rainy cyberpunk alley…"
            className="flex-1 px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400"
          />
          <button
            onClick={handleGenerate}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-400 via-cyan-400 to-fuchsia-400 text-black font-medium hover:opacity-90 transition"
          >
            Direct
          </button>
        </div>
      </div>

      {/* Output */}
      <div className="flex-1 overflow-y-auto p-8 space-y-8">
        {!sceneOutput && (
          <div className="text-slate-500 text-sm">
            Your cinematic scene will appear here once generated.
          </div>
        )}

        {sceneOutput && (
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold">{sceneOutput.title}</h4>

            <p className="text-slate-300">{sceneOutput.summary}</p>

            <div>
              <h5 className="text-lg font-semibold mb-2">Shot List</h5>
              <ul className="space-y-1 text-slate-400 text-sm">
                {sceneOutput.shots.map((s, i) => (
                  <li key={i}>• {s}</li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-2">Cinematography Breakdown</h5>
              <ul className="space-y-1 text-slate-400 text-sm">
                {sceneOutput.cinematography.map((c, i) => (
                  <li key={i}>• {c}</li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-2">Cinematic Prompts</h5>
              <ul className="space-y-1 text-slate-400 text-sm">
                {sceneOutput.prompts.map((p, i) => (
                  <li key={i}>• {p}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
