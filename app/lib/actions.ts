"use server";

export interface Festival {
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  styles: string[];
  url?: string;
}

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

  const data: {
    result: string;
  } = await response.json();

  return { festivals: JSON.parse(data.result) as Festival[] } as const;
};

export const addFestival = async () => {
  const response = await fetch(`${process.env.KV_REST_API_URL}/set/festivals`, {
    headers: {
      ContentType: "application/json",
      Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
    },
    method: "POST",
    body: JSON.stringify([]),
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error("Failed to add festival");
  }
};
