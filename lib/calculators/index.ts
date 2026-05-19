export const emi = (p: number, annualRate: number, months: number) => {
  const r = annualRate / 1200;
  return (p * r * (1 + r) ** months) / ((1 + r) ** months - 1);
};

export const sip = (monthly: number, annualRate: number, months: number) => {
  const r = annualRate / 1200;
  return monthly * ((((1 + r) ** months) - 1) / r) * (1 + r);
};
