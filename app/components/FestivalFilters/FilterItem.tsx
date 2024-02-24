import { Checkbox, FormControlLabel } from "@mui/material";

export const FilterItem = ({
  label,
  onCheckedChange,
  isChecked,
}: {
  label: string;
  isChecked: boolean;
  onCheckedChange: () => void;
}) => (
  <FormControlLabel
    sx={{ color: "#fff" }}
    label={label}
    control={
      <Checkbox
        size="small"
        checked={isChecked}
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
