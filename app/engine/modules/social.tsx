"use client";

import { useState } from "react";

export default function SocialCutsLabModule() {
  const [socialInput, setSocialInput] = useState("");
  const [socialOutput, setSocialOutput] = useState(null);

  const handleGenerate = () => {
    if (!socialInput.trim()) return;

    // Placeholder for INFINITY‑CORE‑ENGINE integration
    setSocialOutput({
      title: "Generated Social Cut Package",
      summary:
        "Your INFINITY‑CORE‑ENGINE social trailer, teaser, and micro‑cut outputs will appear here once integrated.",
      hooks: [
        "High‑impact opening hook",
        "Emotional beat moment",
        "Character‑driven micro‑cut",
        "Action punch‑in",
        "Atmospheric slow‑burn moment",
      ],
      formats: [
        "9:16 vertical trailer",
        "1:1 square teaser",
        "16:9 cinematic cutdown",
        "Short‑form micro‑edit",
        "Loop‑optimized clip",
      ],
      prompts: {
        veo: "Veo‑ready motion cut prompt",
        runway: "Runway‑ready trailer prompt",
        flux: "Flux‑ready stylized motion prompt",
        firefly: "Firefly‑ready social poster prompt",
        fabrica: "Fabrica‑ready animation cut prompt",
      },
      captions: [
        "Your INFINITY‑CORE‑ENGINE caption will appear here.",
        "Another caption variation.",
      ],
    });
  };

  return (
    <div className="flex flex-col h-full">
      {/* Input */}
      <div className="p-6 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <h3 className="text-xl font-semibold tracking-wide">Social Cuts Lab</h3>
        <p className="text-slate-400 text-sm mt-1">
          Describe a moment, emotion, or theme. The engine will forge social‑ready cuts.
        </p>

        <div className="mt-4 flex gap-3">
          <input
            type="text"
            value={socialInput}
            onChange={(e) => setSocialInput(e.target.value)}
            placeholder="Example: A dramatic reveal moment with rising tension…"
            className="flex-1 px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-400"
          />
          <button
            onClick={handleGenerate}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-400 via-cyan-400 to-fuchsia-400 text-black font-medium hover:opacity-90 transition"
          >
            Cut
          </button>
        </div>
      </div>

      {/* Output */}
      <div className="flex-1 overflow-y-auto p-8 space-y-8">
        {!socialOutput && (
          <div className="text-slate-500 text-sm">
            Your social cut package will appear here once generated.
          </div>
        )}

        {socialOutput && (
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold">{socialOutput.title}</h4>

            <p className="text-slate-300">{socialOutput.summary}</p>

            <div>
              <h5 className="text-lg font-semibold mb-2">Hook Moments</h5>
              <ul className="space-y-1 text-slate-400 text-sm">
                {socialOutput.hooks.map((h, i) => (
                  <li key={i}>• {h}</li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-2">Output Formats</h5>
              <ul className="space-y-1 text-slate-400 text-sm">
                {socialOutput.formats.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-2">Model‑Ready Prompts</h5>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>
                  <span className="text-purple-300 font-medium">Veo:</span>{" "}
                  {socialOutput.prompts.veo}
                </li>
                <li>
                  <span className="text-cyan-300 font-medium">Runway:</span>{" "}
                  {socialOutput.prompts.runway}
                </li>
                <li>
                  <span className="text-indigo-300 font-medium">Flux:</span>{" "}
                  {socialOutput.prompts.flux}
                </li>
                <li>
                  <span className="text-red-300 font-medium">Firefly:</span>{" "}
                  {socialOutput.prompts.firefly}
                </li>
                <li>
                  <span className="text-green-300 font-medium">Fabrica:</span>{" "}
                  {socialOutput.prompts.fabrica}
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-2">Caption Variations</h5>
              <ul className="space-y-1 text-slate-400 text-sm">
                {socialOutput.captions.map((c, i) => (
                  <li key={i}>• {c}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
