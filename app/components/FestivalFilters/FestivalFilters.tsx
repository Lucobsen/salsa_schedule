import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

interface FestivalFiltersProps {
  filterFestivals: (value: string) => void;
}

const FestivalFilters = ({ filterFestivals }: FestivalFiltersProps) => (
  <Card
    sx={{
      minHeight: 100,
      maxWidth: "100%",
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      border: "2px solid #fff",
      backgroundColor: "#1976d2",
      borderTopStyle: "none",
    }}
    raised
  >
    <CardContent sx={{ ml: 1, pb: 0 }}>
      <Typography sx={{ color: "#fff" }} variant="h6">
        Festival Filters
      </Typography>
    </CardContent>

    <CardActions sx={{ ml: 1.5 }}>
      <FormControlLabel
        sx={{ color: "#fff" }}
        label="Kizomba"
        control={
          <Checkbox
            sx={{
              color: "#fff",
              "&.Mui-checked": {
                color: "#fff",
              },
            }}
            onChange={() => filterFestivals("kizomba")}
          />
        }
      />
    </CardActions>
  </Card>
);

export default FestivalFilters;
