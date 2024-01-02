import { getFestivals } from "@/app/lib/actions";
import FestivalItem from "../FestivalItem/FestivalItem";

const FestivalList = async () => {
  const { festivals } = await getFestivals();
  const items = festivals.map((fest) => (
    <FestivalItem key={fest.name} {...fest} />
  ));

  return <>{items}</>;
};

export default FestivalList;
