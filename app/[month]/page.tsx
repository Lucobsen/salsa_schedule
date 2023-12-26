import FestivalItem from "@/components/Festival/Festival";
import { festivals } from "@/data/_data";
import { Container } from "@mui/material";

interface MonthProps {
  params: {
    month: string;
  };
}

const Month = ({ params }: MonthProps) => {
  const { month } = params;

  //! TODO: sort by start & end dates
  const monthFestivals = festivals[month];

  return (
    <Container sx={{ mt: 10 }}>
      {monthFestivals.map((fest) => (
        <FestivalItem key={fest.name} {...fest} />
      ))}
    </Container>
  );
};

export default Month;
