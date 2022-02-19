const GoldenTicket = () => {
  return (
    <div className="mt-32 z-10 px-20 flex bg-gradient-to-r from-[#AC32E4] via-[#7918F2] to-[#4801FF]">
      <div className="flex flex-col gap-y-10 mt-16">
        <h3 className="text-5xl font-semibold text-[#E2C668]">
          The Golden Guests
        </h3>
        <p className="text-xl mr-10">
          The Golden Guests edition by the Billionaire Club are the rarest NFTs.
          They are all hand drawn and have no element in common with the regular
          collection.
        </p>
        <div className="flex relative">
          <button className="z-10 bg-gradient-to-r from-[#7918F2] to-[#4801FF] hover:from-[#4801FF] hover:to-[#7918F2] text-3xl font-semibold px-4 py-2 border-2 border-black w-3/4 hover:translate-x-3 hover:translate-y-1.5 transition-all duration-300 ease-in-out">
            Join us to register for the Presale
          </button>
          <div className="bg-black w-3/4 h-full absolute"></div>
        </div>
      </div>
      <img src="/goldenticket.svg" alt="golden ticket" />
    </div>
  );
};

export default GoldenTicket;
