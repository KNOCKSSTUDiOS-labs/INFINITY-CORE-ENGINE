// FILE: engine.js
// Subscription + pipeline config for INFINITY-CORE-ENGINE

export const InfinitySubscriptions = {
  free: {
    id: "FREE",
    label: "Free",
    billing: ["monthly", "yearly"],
    features: [
      "Basic 2D rendering",
      "Low-res previews",
      "Single social export"
    ]
  },
  pro: {
    id: "PRO",
    label: "Pro",
    billing: ["monthly", "yearly"],
    features: [
      "Full HD 2D/3D",
      "Multi-platform social export",
      "Priority render queue"
    ]
  },
  ultra: {
    id: "ULTRA",
    label: "Ultra",
    billing: ["monthly", "yearly"],
    features: [
      "4K–8K multi-framework render",
      "Advanced VFX pipeline",
      "Extended GPU/NPU time"
    ]
  },
  business: {
    id: "BUSINESS",
    label: "Business",
    billing: ["monthly", "yearly"],
    features: [
      "Team access",
      "Commercial rights",
      "Multi-brand pipelines"
    ]
  },
  enterprise: {
    id: "ENTERPRISE",
    label: "Enterprise",
    billing: ["monthly", "yearly"],
    features: [
      "Custom render stacks",
      "Dedicated GPU/NPU clusters",
      "Custom social + broadcast routing"
    ]
  }
};

// Core pipeline config – you can expand this per framework
export const InfinityPipeline = {
  engines: {
    dyablo: "DYABLO-Garden",
    gi: "GI-CINEMA-APP-L",
    infinity: "INFINITY-CORE-ENGINE"
  },
  routes: {
    render: ["GPU", "NPU"],
    storage: ["Firebase"],
    social: ["YouTube", "Shorts", "Commercials", "Global"]
  },
  useVercel: false,
  useSupabase: false,
  useNetlify: false
};
