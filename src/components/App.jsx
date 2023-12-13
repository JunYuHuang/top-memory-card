/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { dummyCards } from "./../lib/dummyCards";

function App() {
  useEffect(() => {
    console.log(dummyCards[0]);
  }, []);

  return (
    <>
      <h1 className="bg-red-200">Memory Card Game</h1>
      {/* <img
        src={"./src/assets/" + dummyCards[0].imgSrc}
        alt="todo"
        className=""
      /> */}
    </>
  );
}

export default App;
