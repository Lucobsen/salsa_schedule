export const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

export interface Festival {
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  styles: string[];
  month: string;
}

export const festivals: Festival[] = [
  {
    name: "Dominican Swag",
    location: "Amsterdam",
    month: "january",
    startDate: new Date("2024-01-05").toISOString(),
    endDate: new Date("2024-01-07").toISOString(),
    styles: ["bachata"],
  },
  {
    name: "Amsterdam International Salsa Festival",
    location: "Amsterdam",
    startDate: new Date("2024-01-26").toISOString(),
    endDate: new Date("2024-01-28").toISOString(),
    styles: ["salsa", "bachata"],
    month: "january",
  },
];
