import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatNumber = (num: number, decimals = 1): string => {
  const units = ["", "K", "M", "B", "T"];
  const tier = (Math.log10(num) / 3) | 0;
  if (tier === 0) return num.toString();
  const suffix = units[tier];
  const scale = Math.pow(10, tier * 3);
  const scaled = num / scale;
  return scaled.toFixed(decimals) + suffix;
};
