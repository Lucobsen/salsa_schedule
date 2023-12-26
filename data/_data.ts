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
    startDate: new Date("05-01-2024").toLocaleDateString(),
    endDate: new Date("07-01-2024").toLocaleDateString(),
    styles: ["bachata"],
  },
  {
    name: "Amsterdam International Salsa Festival",
    location: "Amsterdam",
    startDate: new Date("26-01-2024").toLocaleDateString(),
    endDate: new Date("28-01-2024").toLocaleDateString(),
    styles: ["salsa", "bachata"],
    month: "january",
  },
];
