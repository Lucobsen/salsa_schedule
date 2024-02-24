import { Festival } from "@/app/lib/actions";
import { isBefore, addDays, isAfter, subDays } from "date-fns";

const filterByStyle = (festivals: Festival[], style: string[] | string) =>
  festivals.filter((festival) => {
    if (!style) return true;

    return typeof style === "string"
      ? festival.styles.includes(style)
      : style.some((value) => festival.styles.includes(value));
  });

const filterByDates = (
  festival: Festival,
  startDate: string | undefined,
  endDate: string | undefined
) => {
  if (startDate === undefined && endDate === undefined) return true;

  if (startDate === undefined && endDate !== undefined)
    return isBefore(festival.endDate, addDays(endDate, 1));

  if (startDate !== undefined && endDate === undefined)
    return isAfter(festival.startDate, subDays(startDate, 1));

  if (startDate !== undefined && endDate !== undefined)
    return (
      isAfter(festival.startDate, subDays(startDate, 1)) &&
      isBefore(festival.endDate, addDays(endDate, 1))
    );
};

export const filterFestivals = (
  festivals: Festival[],
  style: string[] | string,
  startDate: string | undefined,
  endDate: string | undefined
) =>
  filterByStyle(festivals, style).filter((festival) =>
    filterByDates(festival, startDate, endDate)
  );
