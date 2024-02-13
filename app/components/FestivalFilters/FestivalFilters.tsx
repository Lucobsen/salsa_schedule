import {
  Typography,
  Card,
  CardActions,
  Checkbox,
  FormControlLabel,
  Stack,
  Divider,
} from "@mui/material";

interface FestivalFiltersProps {
  filterFestivals: (value: string) => void;
}

const FestivalFilters = ({ filterFestivals }: FestivalFiltersProps) => (
  <Card
    sx={{
      minHeight: 100,
      maxHeight: 300,
      maxWidth: "100%",
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      border: "2px solid #fff",
      backgroundColor: "#1976d2",
      borderTopStyle: "none",
    }}
    raised
  >
    <CardActions sx={{ ml: 1.5 }}>
      <Stack>
        <Typography variant="h6" sx={{ color: "#fff" }}>
          Dance Styles
        </Typography>
        <FormControlLabel
          sx={{ color: "#fff" }}
          label="Salsa"
          control={
            <Checkbox
              sx={{
                color: "#fff",
                "&.Mui-checked": {
                  color: "#fff",
                },
              }}
              onChange={() => filterFestivals("salsa")}
            />
          }
        />
        <FormControlLabel
          sx={{ color: "#fff" }}
          label="Bachata"
          control={
            <Checkbox
              sx={{
                color: "#fff",
                "&.Mui-checked": {
                  color: "#fff",
                },
              }}
              onChange={() => filterFestivals("bachata")}
            />
          }
        />
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
      </Stack>

      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ borderColor: "#fff" }}
      />

      <Stack>
        <Typography variant="h6" sx={{ color: "#fff" }}>
          Months
        </Typography>
        <FormControlLabel
          sx={{ color: "#fff" }}
          label="March"
          control={
            <Checkbox
              sx={{
                color: "#fff",
                "&.Mui-checked": {
                  color: "#fff",
                },
              }}
              onChange={() => filterFestivals("march")}
            />
          }
        />
        <FormControlLabel
          sx={{ color: "#fff" }}
          label="April"
          control={
            <Checkbox
              sx={{
                color: "#fff",
                "&.Mui-checked": {
                  color: "#fff",
                },
              }}
              onChange={() => filterFestivals("april")}
            />
          }
        />
      </Stack>
    </CardActions>
  </Card>
);

export default FestivalFilters;
