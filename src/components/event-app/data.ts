// Demo/decorative data used purely for dashboard visual richness (hourly trend widget).
// All core features — attendees, check-ins, votes, draw winners, feedback — are 100% real data from the SQLite backend.

export const HOURLY = [
  { l: "<7PM", v: 12 },
  { l: "7-7:30", v: 98 },
  { l: "7:30-8", v: 112 },
  { l: "8-8:30", v: 52 },
  { l: "8:30-9", v: 15 },
  { l: ">9PM", v: 0 },
];

export const LIVE_NAMES = [
  { n: "Hafizuddin bin Ramli", div: "ES", gate: "Gate A" },
  { n: "Jasmine Wong", div: "GTS", gate: "Gate B" },
  { n: "Vikram Nair", div: "ERP", gate: "Gate A" },
  { n: "Grace Tan", div: "Finance", gate: "VIP" },
  { n: "Amirul Hakim", div: "PS", gate: "Gate B" },
  { n: "Norzaini binti Othman", div: "P&P", gate: "Gate A" },
  { n: "Lee Chee Keong", div: "GTS", gate: "Gate A" },
  { n: "Patrick Lim", div: "P&P", gate: "Gate B" },
  { n: "Suraya binti Ahmad", div: "ERP", gate: "VIP" },
];

export const PRIZES = [
  { tab: "Grand Prize", label: "🏆 Grand Prize — MacBook Pro 14\"", short: "🏆 Grand" },
  { tab: "Gold Prize", label: "🥇 Gold Prize — iPhone 16 Pro", short: "🥇 Gold" },
  { tab: "Silver Prize", label: "🥈 Silver Prize — iPad Air", short: "🥈 Silver" },
  { tab: "Consolation", label: "🎁 Consolation — Voucher RM500", short: "🎁 Consolation" },
];

export const DIVISIONS = [
  "P&P — People & Payroll",
  "ERP — Enterprise Resource Planning",
  "GTS — Global Technology Services",
  "PS — Professional Services",
  "Finance",
  "ES — Employee Solutions",
];

export const FUNCTIONS = ["CSM — Customer Success", "PS — Professional Services", "Support", "Finance", "ES — Employee Solutions", "DATA", "GTS — Global Tech Services"];

export const DIETARY = ["No Preference", "Halal", "Vegetarian", "Vegan", "Gluten-Free"];

export const GAME_ITEMS = ["🎁", "💰", "⭐", "🏆", "💎"];
export const GAME_OBSTACLES = ["🚧", "💣", "❌"];
