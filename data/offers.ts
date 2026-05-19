export type Offer = {
  name: string;
  category: "Credit Card" | "Loan App" | "Insurance" | "Demat" | "Trading App" | "Hosting";
  rating: number;
  cta: string;
  affiliateUrl: string;
  badge: string;
  pros: string[];
  cons: string[];
};

export const offers: Offer[] = [
  {
    name: "HDFC Regalia Gold",
    category: "Credit Card",
    rating: 4.7,
    cta: "Apply Now",
    affiliateUrl: "https://your-affiliate-link-1.example",
    badge: "Lifetime Free*",
    pros: ["Lounge access", "Reward points"],
    cons: ["Income criteria"]
  },
  {
    name: "Navi Instant Personal Loan",
    category: "Loan App",
    rating: 4.5,
    cta: "Check Eligibility",
    affiliateUrl: "https://your-affiliate-link-2.example",
    badge: "Instant Approval",
    pros: ["Fast disbursal", "Paperless"],
    cons: ["Rate varies by profile"]
  }
];
