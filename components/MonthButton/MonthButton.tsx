import { Grid } from "@mui/material";
import Link from "next/link";

interface MonthButtonProps {
  month: string;
  count: number;
}

const MonthButton = ({ month, count }: MonthButtonProps) => (
  <Grid item xs={12} sm={3} sx={{ height: 50 }}>
    <Link
      tabIndex={count === 0 ? -1 : undefined}
      aria-disabled={count === 0}
      style={{
        opacity: count === 0 ? 0.5 : 1,
        pointerEvents: count === 0 ? "none" : "all",
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
      {`${month} - ${count}`}
    </Link>
  </Grid>
);

export default MonthButton;
