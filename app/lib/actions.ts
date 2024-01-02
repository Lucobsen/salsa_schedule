"use server";

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

  const festivals = JSON.parse(data.result) as Festival[];

  const sortedFestivals = festivals.sort(
    (festA, festB) =>
      new Date(festA.startDate).getTime() - new Date(festB.startDate).getTime()
  );

  return { festivals: sortedFestivals } as const;
};

export const addFestival = async (newFestival: Festival) => {
  const { status, statusText, ok } = await fetch(
    `${process.env.KV_REST_API_URL}/sadd/festivals`,
    {
      headers: {
        ContentType: "application/json",
        Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
      },
      method: "POST",
      body: JSON.stringify(newFestival),
      cache: "no-cache",
    }
  );

  if (!ok) {
    throw new Error(`${status}: Failed to add festival - ${statusText}`);
  }
};
