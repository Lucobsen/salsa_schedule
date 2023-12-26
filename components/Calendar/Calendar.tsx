import { festivals, months } from "@/data/_data";
import { Grid } from "@mui/material";
import MonthButton from "../MonthButton/MonthButton";

const Calendar = () => (
  <Grid container rowGap={2} columnGap={2} justifyContent="center">
    {months.map((month) => (
      <MonthButton key={month} month={month} count={festivals[month].length} />
    ))}
  </Grid>
);

export default Calendar;
