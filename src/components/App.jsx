/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { shuffle, createCards } from "../lib/utils";
import { dummyCards } from "../lib/dummyCards.js";
import Header from "./Header.jsx";
import Card from "./Card.jsx";

const API_KEY = "";

function App() {
  const [cards, setCards] = useState(dummyCards);
  const [visitedCardIds, setVisitedCardIds] = useState(new Set());
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  useEffect(() => {
    createCards(API_KEY)
      .then((cards) => {
        console.log("Got cards:", cards);
        if (cards.length > 0) setCards(cards);
        return cards;
      })
      .catch((error) => {
        console.error("Failed getting cards:", error);
      });
  }, []);

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
        <Header {...{ score, maxScore }} />
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
