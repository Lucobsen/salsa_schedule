import FestivalItem from "@/components/Festival/Festival";
import { festivals } from "@/data/_data";
import { Container, Typography } from "@mui/material";

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
      {monthFestivals.length === 0 && (
        <Typography>No festivals found</Typography>
      )}

      {monthFestivals.length > 0 &&
        monthFestivals.map((fest) => <FestivalItem {...fest} />)}
    </Container>
  );
};

export default Month;
