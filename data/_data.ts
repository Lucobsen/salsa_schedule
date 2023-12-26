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
  url?: string;
}

export const festivals: Record<string, Festival[]> = {
  january: [
    {
      name: "Dominican Swag",
      location: "Amsterdam, Netherlands",
      startDate: new Date("2024-01-05").toISOString(),
      endDate: new Date("2024-01-08").toISOString(),
      styles: ["bachata"],
      url: "https://dominican-swag.com",
    },
    {
      name: "Amsterdam International Salsa Festival",
      location: "Amsterdam, Netherlands",
      startDate: new Date("2024-01-26").toISOString(),
      endDate: new Date("2024-01-28").toISOString(),
      styles: ["salsa", "bachata"],
      url: "https://www.extremos.nl/amsterdam-int-salsa-festival/",
    },
  ],
  february: [],
  march: [
    {
      name: "El Sol Spring",
      location: "Poland",
      startDate: new Date("2024-03-08").toISOString(),
      endDate: new Date("2024-03-11").toISOString(),
      styles: ["salsa"],
    },
  ],
  april: [
    {
      name: "World Stars Salsa Festival",
      location: "Bulgaria",
      startDate: new Date("2024-04-26").toISOString(),
      endDate: new Date("2024-04-30").toISOString(),
      styles: ["salsa"],
    },
  ],
  may: [
    {
      name: "5* Mambo City Congress",
      location: "London, UK",
      startDate: new Date("2024-05-03").toISOString(),
      endDate: new Date("2024-05-06").toISOString(),
      styles: ["salsa"],
    },
    {
      name: "Salsa Spring",
      location: "Greece",
      startDate: new Date("2024-05-16").toISOString(),
      endDate: new Date("2024-05-19").toISOString(),
      styles: ["salsa"],
    },
  ],
  june: [
    {
      name: "Croatian Summer Salsa Festival",
      location: "Rovinj, Croatia",
      startDate: new Date("2024-06-10").toISOString(),
      endDate: new Date("2024-06-17").toISOString(),
      styles: ["salsa", "bachata", "kizomba"],
    },
  ],
  july: [],
  august: [
    {
      name: "Berlin Salsa Congress",
      location: "Berlin, Germany",
      startDate: new Date("2024-08-22").toISOString(),
      endDate: new Date("2024-08-25").toISOString(),
      styles: ["salsa", "bachata"],
    },
  ],
  september: [],
  october: [],
  november: [
    {
      name: "El Sol",
      location: "Poland",
      startDate: new Date("2024-11-14").toISOString(),
      endDate: new Date("2024-11-18").toISOString(),
      styles: ["salsa"],
    },
    {
      name: "Transylvaniafest",
      location: "Cluj-Napoca, Romania",
      startDate: new Date("2024-11-21").toISOString(),
      endDate: new Date("2024-11-25").toISOString(),
      styles: ["salsa", "bachata"],
    },
  ],
  december: [],
};
