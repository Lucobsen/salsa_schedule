import { festivals } from "@/data/_data";
import { Container, Typography } from "@mui/material";

interface MonthProps {
  params: {
    month: string;
  };
}

const Month = ({ params }: MonthProps) => {
  const { month } = params;
  const monthFestivals = festivals.filter((fest) => fest.month === month);

  return (
    <Container sx={{ mt: 10 }}>
      {monthFestivals.length === 0 && (
        <Typography>No festivals found</Typography>
      )}

      {monthFestivals &&
        monthFestivals.map((fest) => <Typography>{fest.name}</Typography>)}
    </Container>
  );
};

export default Month;
