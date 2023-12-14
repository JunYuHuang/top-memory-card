"use strict";

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

function reorder(array, orderOfIndices) {
  if (array.length !== orderOfIndices.length) return;
  const res = [];
  for (const i of orderOfIndices) {
    res[i] = array[i];
  }
  return res;
}

function getCards() {
  // TODO
  return [];
}

function getIndices(arraySize) {
  if (arraySize < 0 || !Number.isInteger(arraySize)) return [];
  const res = [];
  for (let i = 0; i < arraySize; i++) {
    res.push(i);
  }
  return res;
}

export { shuffle, reorder, getCards, getIndices };
