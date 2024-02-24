import {
  Typography,
  Card,
  CardActions,
  Stack,
  Divider,
  OutlinedInput,
  Button,
} from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FilterItem } from "./FilterItem";

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

  const setUrlDateSearchParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const clearFilters = () => {
    const params = new URLSearchParams();

    replace(`${pathname}?${params.toString()}`);
  };

  const isFilterItemChecked = (key: string) =>
    searchParams.getAll("style")?.toString().includes(key);

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
          <FilterItem
            label="Salsa"
            isChecked={isFilterItemChecked("salsa")}
            onCheckedChange={() => setUrlSearchParams("style", "salsa")}
          />
          <FilterItem
            label="Bachata"
            isChecked={isFilterItemChecked("bachata")}
            onCheckedChange={() => setUrlSearchParams("style", "bachata")}
          />
          <FilterItem
            label="Kizomba"
            isChecked={isFilterItemChecked("kizomba")}
            onCheckedChange={() => setUrlSearchParams("style", "kizomba")}
          />
        </Stack>

        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ borderColor: "#fff" }}
        />

        <Stack>
          <Typography sx={{ color: "#fff" }}>Dates</Typography>
          <OutlinedInput
            sx={{ color: "#fff", border: "1px solid #fff", mb: 2 }}
            name={"startDateFilter"}
            id={"startDateFilter"}
            size="small"
            type="date"
            value={searchParams.get("startDate") ?? ""}
            onChange={({ target }) =>
              setUrlDateSearchParams("startDate", target.value)
            }
          />
          <OutlinedInput
            sx={{ color: "#fff", border: "1px solid #fff", mb: 2 }}
            name={"endDateFilter"}
            id={"endDateFilter"}
            size="small"
            type="date"
            value={searchParams.get("endDate") ?? ""}
            onChange={({ target }) =>
              setUrlDateSearchParams("endDate", target.value)
            }
          />
        </Stack>

        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ borderColor: "#fff" }}
        />

        <Button
          variant="contained"
          size="small"
          sx={{ border: "1px solid #fff" }}
          onClick={() => clearFilters()}
        >
          Clear All
        </Button>
      </CardActions>
    </Card>
  );
};

export default FestivalFilters;
