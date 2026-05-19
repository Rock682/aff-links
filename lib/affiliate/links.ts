const map: Record<string, string> = {
  "hdfc-regalia": "https://go.arthaorbit.in/r/hdfc-regalia?src=earnkaro",
  "navi-loan": "https://go.arthaorbit.in/r/navi-loan?src=impact"
};

export function resolveAffiliateLink(slug: string, utm = "homepage") {
  const base = map[slug] ?? "#";
  return `${base}&utm_source=arthaorbit&utm_medium=affiliate&utm_campaign=${utm}`;
}
