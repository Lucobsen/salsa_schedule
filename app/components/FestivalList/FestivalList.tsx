import { Festival, getFestivals } from "@/app/lib/actions";
import FestivalItem from "../FestivalItem/FestivalItem";
import { Stack } from "@mui/material";

interface FestivalListProps {
  style: string[] | string;
  month: string[] | string;
}

const filterByStyle = (festivals: Festival[], style: string[] | string) =>
  festivals.filter((festival) => {
    if (!style) return true;

    return typeof style === "string"
      ? festival.styles.includes(style)
      : style.some((value) => festival.styles.includes(value));
  });

const FestivalList = async ({ style, month }: FestivalListProps) => {
  const festivals = await getFestivals();

  const items = filterByStyle(festivals, style).map((fest) => (
    <FestivalItem key={fest.name} {...fest} />
  ));

  return (
    <Stack spacing={4} alignItems="center">
      {items}
    </Stack>
  );
};

export default FestivalList;
