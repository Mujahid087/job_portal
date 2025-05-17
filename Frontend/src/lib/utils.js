// console.log("Logging inputs:", inputs);
// console.log("Logging merged classes:", twMerge(clsx(inputs)));import { clsx } from "clsx";
// import { twMerge } from "tailwind-merge"

// export function cn(...inputs) {
//   return twMerge(clsx(inputs));
// }

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  console.log("Logging inputs:", inputs);
  const merged = twMerge(clsx(inputs));
  console.log("Logging merged classes:", merged);
  return merged;
}
