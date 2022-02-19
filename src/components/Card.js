const Card = ({ user, imgSrc }) => {
  return (
    <div className="flex card-bg flex-col gap-y-4 px-8 py-6 border-2 border-white">
      <div className="flex place-items-center justify-between">
        <div className="flex place-items-center gap-x-3">
          <img src={user} alt="user" />
          <p className="text-lg">@knight</p>
        </div>
        <div className="flex gap-x-1">
          <img src="/star.svg" alt="star" />
          <p className="text-sm font-semibold mt-0.5">213</p>
        </div>
      </div>
      <img src={imgSrc} alt="monkey" />
      <div className="mt-4 flex justify-between">
        <div>
          <p className="text-gray-400 font-medium">Current bid</p>
          <p className="font-bold text-xl">0.54 Eth</p>
        </div>
        <div>
          <p className="text-gray-400 font-medium">Ending in</p>
          <p className="font-bold text-xl">12h 55m 2s</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
