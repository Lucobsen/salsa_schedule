"use server";

import { festivals } from "./data";

export const addFestival = async () => {
  const response = await fetch(`${process.env.KV_REST_API_URL}/set/festivals`, {
    headers: {
      ContentType: "application/json",
      Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
    },
    method: "POST",
    body: JSON.stringify(festivals),
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error("Failed to add festival");
  }
};

export const getFestivals = async () => {
  const response = await fetch(`${process.env.KV_REST_API_URL}/get/festivals`, {
    method: "GET",
    cache: "no-cache",
    headers: {
      ContentType: "application/json",
      Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to get festivals");
  }

  const data = await response.json();

  return { festivals: data.result } as const;
};
