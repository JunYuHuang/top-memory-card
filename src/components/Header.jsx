/* eslint-disable react/prop-types */
function Header({ score, maxScore }) {
  return (
    <>
      <h1 className="mb-6 text-5xl font-bold uppercase">Memory Card</h1>
      <p className="mb-6">
        Score points by clicking on cards that you have not clicked on!
      </p>
      <p className="text-right text-xl">Current Score: {score}</p>
      <p className="text-right mb-3 text-xl">Best Score: {maxScore}</p>
    </>
  );
}

export default Header;
