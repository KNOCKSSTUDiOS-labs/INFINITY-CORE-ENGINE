"use client";

import { useState } from "react";

const systems = [
  { id: "worlds", label: "World Forge" },
  { id: "characters", label: "Character Foundry" },
  { id: "scenes", label: "Scene Director" },
  { id: "prompts", label: "Prompt Forge" },
  { id: "posters", label: "Poster & Key Art" },
  { id: "scripts", label: "Script & Voice Stage" },
  { id: "social", label: "Social Cuts Lab" },
  { id: "godmode", label: "GOD MODE" },
];

export default function ProducerConsole() {
  const [activeSystem, setActiveSystem] = useState("worlds");
  const [producerInput, setProducerInput] = useState("");
  const [producerOutput, setProducerOutput] = useState<{
    title: string;
    summary: string;
    systemsTriggered: string[];
    deliverables: string[];
  } | null>(null);

  const handleRun = () => {
    if (!producerInput.trim()) return;

    setProducerOutput({
      title: "Ultra Producer Output",
      summary:
        "Your INFINITY‑CORE‑ENGINE theatrical‑grade multi‑system output will appear here once integrated.",
      systemsTriggered: [
        "World Forge",
        "Character Foundry",
        "Scene Director",
        "Prompt Forge",
        "Poster & Key Art",
        "Script & Voice",
        "Social Cuts",
        "GOD MODE Fusion",
      ],
      deliverables: [
        "World bible",
        "Character sheets",
        "Scene sequence",
        "Model‑ready prompts",
        "Poster concepts",
        "Script beats",
        "Trailer cut ideas",
        "Full cinematic package",
      ],
    });
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <h3 className="text-2xl font-semibold tracking-wide">
          Ultra Producer — Theatrical GOD MODE
        </h3>
        <p className="text-slate-400 text-sm mt-1">
          hollywoodimaging.studio • KNOCKS HOLLYWOOD MOTION PICTURES • INFINITY‑CORE‑ENGINE
        </p>
      </div>

      {/* System Selector */}
      <div className="flex gap-2 px-6 py-4 overflow-x-auto border-b border-white/10 bg-black/40 backdrop-blur-xl">
        {systems.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSystem(s.id)}
            className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
              activeSystem === s.id
                ? "bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-400 text-black font-semibold"
                : "bg-white/5 text-slate-300 hover:bg-white/10"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="p-6 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <input
          type="text"
          value={producerInput}
          onChange={(e) => setProducerInput(e.target.value)}
          placeholder="Describe the full cinematic package you want to produce…"
          className="w-full px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
        />

        <button
          onClick={handleRun}
          className="mt-4 px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-400 text-black font-medium hover:opacity-90 transition"
        >
          Run Ultra Producer
        </button>
      </div>

      {/* Output */}
      <div className="flex-1 overflow-y-auto p-8 space-y-8">
        {!producerOutput && (
          <div className="text-slate-500 text-sm">
            Your theatrical‑grade multi‑system output will appear here once generated.
          </div>
        )}

        {producerOutput && (
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold">{producerOutput.title}</h4>

            <p className="text-slate-300">{producerOutput.summary}</p>

            <div>
              <h5 className="text-lg font-semibold mb-2">Systems Triggered</h5>
              <ul className="space-y-1 text-slate-400 text-sm">
                {producerOutput.systemsTriggered.map((s, i) => (
                  <li key={i}>• {s}</li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-2">Deliverables</h5>
              <ul className="space-y-1 text-slate-400 text-sm">
                {producerOutput.deliverables.map((d, i) => (
                  <li key={i}>• {d}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
