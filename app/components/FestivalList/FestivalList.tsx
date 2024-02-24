import { getFestivals } from "@/app/lib/actions";
import FestivalItem from "../FestivalItem/FestivalItem";
import { Stack } from "@mui/material";
import { filterFestivals } from "./FestivalList.utils";

interface FestivalListProps {
  style: string[] | string;
  startDate: string | undefined;
  endDate: string | undefined;
}

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
