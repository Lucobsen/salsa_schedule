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

const CheckboxItem = ({
  label,
  onCheckedChange,
}: {
  label: string;
  onCheckedChange: () => void;
}) => (
  <FormControlLabel
    sx={{ color: "#fff" }}
    label={label}
    control={
      <Checkbox
        size="small"
        sx={{
          color: "#fff",
          "&.Mui-checked": {
            color: "#fff",
          },
        }}
        onChange={onCheckedChange}
      />
    }
  />
);

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
        <Typography sx={{ color: "#fff" }}>Dance Styles</Typography>
        <CheckboxItem
          label="Salsa"
          onCheckedChange={() => filterFestivals("salsa")}
        />
        <CheckboxItem
          label="Bachata"
          onCheckedChange={() => filterFestivals("bachata")}
        />
        <CheckboxItem
          label="Kizomba"
          onCheckedChange={() => filterFestivals("kizomba")}
        />
      </Stack>

      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ borderColor: "#fff" }}
      />

      <Stack>
        <Typography sx={{ color: "#fff" }}>Months</Typography>
        <CheckboxItem
          label="March"
          onCheckedChange={() => filterFestivals("march")}
        />
        <CheckboxItem
          label="April"
          onCheckedChange={() => filterFestivals("april")}
        />
        <CheckboxItem
          label="May"
          onCheckedChange={() => filterFestivals("may")}
        />
      </Stack>
    </CardActions>
  </Card>
);

export default FestivalFilters;
