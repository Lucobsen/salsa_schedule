import { Festival, getFestivals } from "@/app/lib/actions";
import FestivalItem from "../FestivalItem/FestivalItem";
import { Stack } from "@mui/material";
import { addDays, isAfter, isBefore, subDays } from "date-fns";

interface FestivalListProps {
  style: string[] | string;
  startDate: string | undefined;
  endDate: string | undefined;
}

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

const filterFestivals = (
  festivals: Festival[],
  style: string[] | string,
  startDate: string | undefined,
  endDate: string | undefined
) =>
  filterByStyle(festivals, style).filter((festival) =>
    filterByDates(festival, startDate, endDate)
  );

const FestivalList = async ({
  style,
  startDate,
  endDate,
}: FestivalListProps) => {
  const festivals = await getFestivals();

  const items = filterFestivals(festivals, style, startDate, endDate).map(
    (fest) => <FestivalItem key={fest.name} {...fest} />
  );

  return (
    <Stack spacing={4} alignItems="center">
      {items}
    </Stack>
  );
};

export default FestivalList;
