/* eslint-disable react/prop-types */
function Card({ card }) {
  const { id, title, imgSrc } = card;

  return (
    <button className="rounded-2xl shadow-xl h-80 overflow-hidden bg-gray-200">
      <img
        src={imgSrc}
        alt={title}
        className="object-cover bg-gray-200 w-full h-full"
        data-card-id={id}
      />
    </button>
  );
}

export default Card;
