"use server";

import { isAfter } from "date-fns";

export interface Festival {
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  styles: string[];
  url: string;
}

export const getFestivals = async () => {
  const response = await fetch(`${process.env.KV_REST_API_URL}/get/festivals`, {
    method: "GET",
    headers: {
      ContentType: "application/json",
      Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
    },
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error("Failed to get festivals");
  }

  const data: {
    result: string;
  } = await response.json();

  const festivals = JSON.parse(data.result) as Festival[];

  // TODO: move this sorting to the backend
  const sortedFestivals = festivals.sort(
    (festA, festB) =>
      new Date(festA.startDate).getTime() - new Date(festB.startDate).getTime()
  );

  // TODO: move this filtering to the backend
  return sortedFestivals.filter((festival) => {
    const now = Date.now();
    const endDate = new Date(festival.endDate).getTime();

    return isAfter(endDate, now);
  });
};

export const setFestivals = async (festivals: Festival[]) => {
  const { ok, status, statusText } = await fetch(
    `${process.env.KV_REST_API_URL}/set/festivals`,
    {
      headers: {
        ContentType: "application/json",
        Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
      },
      method: "POST",
      body: JSON.stringify(festivals),
      cache: "no-cache",
    }
  );

  if (!ok) {
    throw new Error(`${status}: Failed to add festival - ${statusText}`);
  }
};
