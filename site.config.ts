export const siteConfig = {
  name: "PoolHub",
  tagline: "Australia's Pool & Outdoor Living Guide",
  domain: "poolhubai.com.au",
  port: 3204,
  accent: { primary: "#06b6d4", hover: "#0891b2" },
  categories: [
    "Pool Building",
    "Pool Maintenance",
    "Pool Equipment",
    "Pool Safety",
    "Pool Heating",
    "Outdoor Living",
    "Spa & Hot Tubs",
    "Pool Renovations",
  ],
  crossPromo: {
    primary: {
      label: "Need a tradie?",
      url: "https://tradihubai.com.au",
      cta: "Get Quotes Free",
    },
    network: ["tradihubai.com.au", "renohubai.com.au", "solarhubai.com.au", "propertyhubai.com.au"],
  },
  newsletter: { enabled: true },
  ads: { adsense: false, houseAds: true },
  socials: { facebook: "", instagram: "", tiktok: "" },
}

export type SiteConfig = typeof siteConfig
