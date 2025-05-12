// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toIDR = (value: number, negative: any = "Rp 0") => {
  if (typeof value === "number" || typeof value === "string") {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  }

  return negative;
};
