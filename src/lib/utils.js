/* eslint-disable no-unused-vars */
"use strict";
import { v4 as uuid } from "uuid";

function randomPos(array) {
  if (array.length < 1) throw new Error("Array is empty!");
  const pos = Math.floor(Math.random() * array.length);
  return pos;
}

function shuffle(array) {
  if (array.length < 1) return array;
  const res = [];
  while (array.length > 0) {
    const pos = randomPos(array);
    res.push(array[pos]);
    array.splice(pos, 1);
  }
  return res;
}

async function getGifUrl(options = {}) {
  const baseApiUrl = options["apiUrl"]
    ? options.apiUrl
    : "https://api.giphy.com/v1/gifs/random";
  const apiKey = options["apiKey"] ? options.apiKey : "";
  const completeUrl = `${baseApiUrl}?api_key=${apiKey}`;
  console.log(completeUrl);

  function isError(response) {
    return Array.isArray(response.data);
  }

  function extractAPIData(data) {
    return {
      title: data.data.title,
      imgSrc: data.data.images.original.url,
    };
  }

  try {
    const response = await fetch(completeUrl, { mode: "cors" });
    const data = await response.json();
    if (isError(data)) throw new Error(data);
    return extractAPIData(data);
  } catch (error) {
    return error;
  }
}

function createCard(apiData, makeIdFn = uuid) {
  return {
    ...apiData,
    id: "card-" + makeIdFn(),
  };
}

async function createCards(apiKey, count = 12) {
  if (!Number.isInteger(count) || count < 1) return [];
  const apiResults = [];

  function isError(item) {
    if (item === undefined || item === null) return true;
    return item.name === "Error";
  }

  for (let i = 0; i < count; i++) {
    apiResults.push(getGifUrl({ apiKey }));
  }

  try {
    const res = await Promise.all(apiResults);
    if (isError(res[0])) throw new Error("Invalid cards created");
    return res.map((res) => createCard(res));
  } catch (error) {
    console.error("Failed to create cards", error);
    return [];
  }
}

export { shuffle, createCards };
