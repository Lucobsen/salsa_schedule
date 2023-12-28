export interface Festival {
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  styles: string[];
  url?: string;
}

export const festivals: Festival[] = [
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
  {
    name: "El Sol Spring",
    location: "Warsaw, Poland",
    startDate: new Date("2024-03-08").toISOString(),
    endDate: new Date("2024-03-11").toISOString(),
    styles: ["salsa", "bachata"],
    url: "https://elsolspring.pl/en/",
  },
  {
    name: "Fever Bachata World Congress 2024 (Cartoon Edition)",
    location: "Valencia, Spain",
    startDate: new Date("2024-04-18").toISOString(),
    endDate: new Date("2024-04-22").toISOString(),
    styles: ["bachata"],
    url: "https://lasalsadelbaile.com/FBWC2024",
  },
  {
    name: "Lisbon Salsa Marathon",
    location: "Lisbon, Portugal",
    startDate: new Date("2024-04-26").toISOString(),
    endDate: new Date("2024-04-28").toISOString(),
    styles: ["salsa"],
    url: "https://www.lisbonsalsamarathon.com/",
  },
  {
    name: "World Stars Salsa Festival",
    location: "Varna, Bulgaria",
    startDate: new Date("2024-04-26").toISOString(),
    endDate: new Date("2024-04-30").toISOString(),
    styles: ["salsa", "bachata", "kizomba"],
    url: "https://varnasalsafestival.com/",
  },
  {
    name: "5* Mambo City Congress",
    location: "London, UK",
    startDate: new Date("2024-05-03").toISOString(),
    endDate: new Date("2024-05-06").toISOString(),
    styles: ["salsa"],
    url: "https://5starcongress.com/",
  },
  {
    name: "Salsa Spring",
    location: "Greece",
    startDate: new Date("2024-05-16").toISOString(),
    endDate: new Date("2024-05-19").toISOString(),
    styles: ["salsa"],
    url: "https://salsaspring.gr/",
  },
  {
    name: "Croatian Summer Salsa Festival",
    location: "Rovinj, Croatia",
    startDate: new Date("2024-06-10").toISOString(),
    endDate: new Date("2024-06-17").toISOString(),
    styles: ["salsa", "bachata"],
    url: "https://www.crosalsafestival.com/",
  },
  {
    name: "Berlin Salsa Congress",
    location: "Berlin, Germany",
    startDate: new Date("2024-08-22").toISOString(),
    endDate: new Date("2024-08-25").toISOString(),
    styles: ["salsa", "bachata"],
    url: "https://berlinsalsacongress.co/",
  },
  {
    name: "Prague Salsa Marathon",
    location: "Prague, Czech Republic",
    startDate: new Date("2024-09-19").toISOString(),
    endDate: new Date("2024-09-23").toISOString(),
    styles: ["salsa"],
    url: "https://www.praguesalsa.com/events/PSM.2024.autumn",
  },
  {
    name: "El Sol Festival",
    location: "Katowice, Poland",
    startDate: new Date("2024-11-14").toISOString(),
    endDate: new Date("2024-11-18").toISOString(),
    styles: ["salsa", "bachata", "kizomba", "cuban"],
    url: "https://elsolfestival.pl/en/",
  },
  {
    name: "Transylvania Salsa Fest",
    location: "Cluj-Napoca, Romania",
    startDate: new Date("2024-11-21").toISOString(),
    endDate: new Date("2024-11-25").toISOString(),
    styles: ["salsa", "bachata", "kizomba"],
    url: "https://www.goandance.com/en/events/6532-transilvania-salsa-fest-2024-13th-edition",
  },
];
