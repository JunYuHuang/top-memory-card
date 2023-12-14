/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { shuffle } from "../lib/utils";
import { dummyCards } from "../lib/dummyCards.js";
import Card from "./Card.jsx";

function App() {
  const [cards, setCards] = useState(dummyCards);
  const [visitedCardIds, setVisitedCardIds] = useState(new Set());
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  const resetGame = function () {
    setMaxScore((prevMaxScore) => Math.max(prevMaxScore, score));
    setScore(0);
    setVisitedCardIds(new Set());
  };

  const progressGame = function (cardId) {
    setScore((prevScore) => prevScore + 1);
    setVisitedCardIds(
      (prevVisitedCardIds) => new Set(prevVisitedCardIds.add(cardId))
    );
  };

  const handleCardClick = (e) => {
    const cardId = e.target.dataset.cardId;
    if (cardId === null || cardId === "") return;
    visitedCardIds.has(cardId) ? resetGame() : progressGame(cardId);
  };

  return (
    <main className="flex flex-col items-center min-h-screen">
      <div className="max-w-screen-md min-w-[200px] w-full my-8 px-4">
        <h1 className="mb-6 text-5xl font-bold uppercase">Memory Card</h1>
        <p className="mb-6">
          Score points by clicking on cards that you have not clicked on!
        </p>
        <p className="text-right text-xl">Current Score: {score}</p>
        <p className="text-right mb-3 text-xl">Best Score: {maxScore}</p>
        <div
          className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))]"
          onClick={handleCardClick}
        >
          {shuffle(cards.slice()).map((card) => (
            <Card key={card.id} {...{ card, handleCardClick }} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
