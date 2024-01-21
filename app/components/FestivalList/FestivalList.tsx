import { getFestivals } from "@/app/lib/actions";
import FestivalItem from "../FestivalItem/FestivalItem";
import { Skeleton, Stack } from "@mui/material";

const FestivalList = async () => {
  const festivals = await getFestivals();

  const items = festivals.map((fest) => (
    <FestivalItem key={fest.name} {...fest} />
  ));

  return (
    <Stack spacing={4} alignItems="center">
      {items}
    </Stack>
  );
};

export default FestivalList;
