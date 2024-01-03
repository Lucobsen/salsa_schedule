"use client";

import { getFestivals, setFestivals } from "@/app/lib/actions";
import { Fab } from "@mui/material";

const DeleteFestivalButton = ({ name }: { name: string }) => (
  <Fab
    color="error"
    size="small"
    disabled={name !== "Luke's Test"}
    onClick={async () => {
      const festivals = await getFestivals();
      const filteredFestivals = festivals.filter(
        (festival) => festival.name !== name
      );
      await setFestivals(filteredFestivals);
    }}
    sx={{
      display: name !== "Luke's Test" ? "none" : "block",
      border: "1px solid#fff",
      position: "static",
      minHeight: "20px",
      height: "20px",
      width: "20px",
    }}
  />
);

export default DeleteFestivalButton;
