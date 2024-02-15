import {
  Typography,
  Card,
  CardActions,
  Checkbox,
  FormControlLabel,
  Stack,
} from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const CheckboxItem = ({
  label,
  onCheckedChange,
  isChecked,
}: {
  label: string;
  isChecked?: boolean;
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

const FestivalFilters = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const setUrlSearchParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    const paramExists = params.has(key, value);

    if (value && !paramExists) {
      params.append(key, value);
    } else {
      params.delete(key, value);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
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
            isChecked={searchParams
              .getAll("style")
              ?.toString()
              .includes("salsa")}
            onCheckedChange={() => setUrlSearchParams("style", "salsa")}
          />
          <CheckboxItem
            label="Bachata"
            isChecked={searchParams
              .getAll("style")
              ?.toString()
              .includes("bachata")}
            onCheckedChange={() => setUrlSearchParams("style", "bachata")}
          />
          <CheckboxItem
            label="Kizomba"
            isChecked={searchParams
              .getAll("style")
              ?.toString()
              .includes("kizomba")}
            onCheckedChange={() => setUrlSearchParams("style", "kizomba")}
          />
        </Stack>

        {/* <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ borderColor: "#fff" }}
        />

        <Stack>
          <Typography sx={{ color: "#fff" }}>Months</Typography>
          <CheckboxItem
            label="March"
            isChecked={searchParams
              .getAll("month")
              ?.toString()
              .includes("march")}
            onCheckedChange={() => setUrlSearchParams("month", "march")}
          />
          <CheckboxItem
            label="April"
            isChecked={searchParams
              .getAll("month")
              ?.toString()
              .includes("april")}
            onCheckedChange={() => setUrlSearchParams("month", "april")}
          />
          <CheckboxItem
            label="May"
            isChecked={searchParams.getAll("month")?.toString().includes("may")}
            onCheckedChange={() => setUrlSearchParams("month", "may")}
          />
        </Stack> */}
      </CardActions>
    </Card>
  );
};

export default FestivalFilters;
