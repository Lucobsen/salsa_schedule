import { months } from "@/data/_data";
import { Grid } from "@mui/material";
import Link from "next/link";

const Calendar = () => (
  <Grid container rowGap={2} columnGap={2} justifyContent="center">
    {months.map((month) => (
      <Grid item xs={12} sm={3} key={month} sx={{ height: 50 }}>
        <Link
          style={{
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "unset",
            color: "#fff",
            border: "2px solid #fff",
            borderRadius: 2,
            display: "flex",
            height: "100%",
            textTransform: "uppercase",
            backgroundColor: "#1976d2",
          }}
          href={`/${month}`}
        >
          {month}
        </Link>
      </Grid>
    ))}
  </Grid>
);

export default Calendar;
