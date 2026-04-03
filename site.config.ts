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
      label: "Get 3 Free Quotes",
      url: "https://tradihubai.com.au/jobs/new?trade=pool-building&ref=poolhub",
      cta: "Get Quotes Now",
    },
    network: ["tradihubai.com.au", "renohubai.com.au", "solarhubai.com.au", "propertyhubai.com.au"],
  },
  newsletter: { enabled: true },
  ads: { adsense: false, houseAds: true },
  socials: { facebook: "", instagram: "", tiktok: "" },
}

export type SiteConfig = typeof siteConfig
