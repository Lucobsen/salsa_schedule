"use server";

const API_URL = "http://localhost:3000/api";

export async function addFestival() {
  const response = await fetch(API_URL, {
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Failed to add festival");
  }

  return response.json();
}

export async function getFestivals() {
  const response = await fetch(API_URL, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to get festivals");
  }

  return response.json();
}
