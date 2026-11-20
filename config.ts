// Auto-generated configuration for BLS Spain Egypt AutoBot

export const config = {
  botName: "BLS Spain Egypt",
  country: "Egypt",
  provider: "BLS International",
  destination: "Spain",
  loginUrl: "https://egypt.blsspainvisa.com/account/login",
  centers: [
  "Cairo (Giza / Agouza)"
],
  visaCategories: [
  "Tourism",
  "Business",
  "Family Visit",
  "Study",
  "Work",
  "Transit"
],
  defaultPolling: {
    minIntervalSeconds: 30,
    maxIntervalSeconds: 60,
  },
  alerts: {
    telegram: {
      supportUser: "iqrouter",
    },
    whatsapp: {
      supportNumber: "+201200655872",
    },
  },
} as const;

export type RouteConfig = typeof config;
