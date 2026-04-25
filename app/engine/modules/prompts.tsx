"use client";

import { useState } from "react";

export default function PromptForgeModule() {
  const [promptInput, setPromptInput] = useState("");
  const [promptOutput, setPromptOutput] = useState<{
    title: string;
    summary: string;
    cinematic: string[];
    modelPrompts: {
      veo: string;
      runway: string;
      flux: string;
      firefly: string;
      fabrica: string;
    };
  } | null>(null);

  const handleGenerate = () => {
    if (!promptInput.trim()) return;

    // Placeholder for INFINITY-CORE-ENGINE integration
    setPromptOutput({
      title: "Generated Prompt Pack",
      summary:
        "Your INFINITY-CORE-ENGINE prompt set will appear here once integrated.",
      cinematic: [
        "Cinematic lighting",
        "Camera movement",
        "Lens style",
        "Atmosphere",
        "Color grade",
        "Shot composition",
      ],
      modelPrompts: {
        veo: "Veo-ready cinematic prompt",
        runway: "Runway-ready motion/scene prompt",
        flux: "Flux-ready stylized prompt",
        firefly: "Firefly-ready visual prompt",
        fabrica: "Fabrica-ready animation/3D prompt",
      },
    });
  };

  return (
    <div className="flex flex-col h-full">
      {/* Input */}
      <div className="p-6 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <h3 className="text-xl font-semibold tracking-wide">Prompt Forge</h3>
        <p className="text-slate-400 text-sm mt-1">
          Enter your creative vision. The engine will forge prompts for every AI model.
        </p>

        <div className="mt-4 flex gap-3">
          <input
            type="text"
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
            placeholder="Example: Epic dragon battle over a crystal kingdom at sunset..."
            className="flex-1 px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-400"
          />
          <button
            onClick={handleGenerate}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-400 via-cyan-400 to-fuchsia-400 text-black font-medium hover:opacity-90 transition"
          >
            Forge
          </button>
        </div>
      </div>

      {/* Output */}
      <div className="flex-1 overflow-y-auto p-8 space-y-8">
        {!promptOutput && (
          <div className="text-slate-500 text-sm">
            Your forged prompts will appear here once generated.
          </div>
        )}

        {promptOutput && (
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold">{promptOutput.title}</h4>

            <p className="text-slate-300">{promptOutput.summary}</p>

            <div>
              <h5 className="text-lg font-semibold mb-2">Cinematic Elements</h5>
              <ul className="space-y-1 text-slate-400 text-sm">
                {promptOutput.cinematic.map((c, i) => (
                  <li key={i}>• {c}</li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-2">Model-Specific Prompts</h5>
              <div className="space-y-3 text-slate-400 text-sm">
                <div>
                  <span className="text-cyan-400 font-medium">Veo:</span>{" "}
                  {promptOutput.modelPrompts.veo}
                </div>
                <div>
                  <span className="text-fuchsia-400 font-medium">Runway:</span>{" "}
                  {promptOutput.modelPrompts.runway}
                </div>
                <div>
                  <span className="text-indigo-400 font-medium">Flux:</span>{" "}
                  {promptOutput.modelPrompts.flux}
                </div>
                <div>
                  <span className="text-amber-400 font-medium">Firefly:</span>{" "}
                  {promptOutput.modelPrompts.firefly}
                </div>
                <div>
                  <span className="text-emerald-400 font-medium">Fabrica:</span>{" "}
                  {promptOutput.modelPrompts.fabrica}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
