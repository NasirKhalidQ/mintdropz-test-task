import Collections from "./Collections";
import GoldenTicket from "./GoldenTicket";

const Landing = () => {
  return (
    <>
      <section className="flex flex-col relative">
        <div className="flex">
          <img
            className="absolute -top-20 w-[36rem] z-30"
            src="monkey-main.svg"
            alt=""
          />
          <img
            className="absolute top-10 -left-6 w-[20rem] z-10"
            src="ellipse1.svg"
            alt=""
          />
          <img
            className="absolute -top-20 left-6 w-[40rem] z-20"
            src="arrows.svg"
            alt=""
          />
        </div>
        <div className="flex justify-end flex-col mt-32 mr-40">
          <img className="absolute -top-20 right-2" src="ellipse2.svg" alt="" />
          <div className="flex justify-end mr-32 relative">
            <h2 className="text-8xl font-bold uppercase">Exclusive</h2>
            <img
              className="absolute -right-8 -top-8 -rotate-[55deg]"
              src="/vector.svg"
              alt="vector"
            />
            <img
              className="absolute -right-14 -top-4 -rotate-[20deg]"
              src="/vector.svg"
              alt="vector"
            />
            <img
              className="absolute -right-16 top-4"
              src="/vector.svg"
              alt="vector"
            />
          </div>
          <div className="flex justify-end">
            <h2 className="text-5xl font-medium bg-gradient-to-r text-transparent bg-clip-text from-[#00DBDE] to-[#FC00FF]">
              newest NFT release
            </h2>
          </div>
          <div className="flex mt-20 justify-end text-right">
            <div className="flex flex-col justify-end text-xl max-w-[40rem]">
              <p>
                The <span className="font-bold">BILLIONAIRE CLUB</span> is a
                private collection of 10 000 billionaire apes NFTs—unique
                digital collectibles. The apes are stored as ERC-721 tokens on
                the Ethereum blockchain and hosted on IPFS.
              </p>
              <p className="flex justify-end text-[#7918F2]">
                Reveal on October 20th.
              </p>
              <div className="flex gap-x-2 mt-10 min-w-[40rem]">
                <input
                  className="flex text-gray-400 text-center flex-1 outline-none bg-transparent border-2 border-[#7918F2]"
                  type="text"
                  placeholder="your@email.com"
                />
                <button className="btnColor text-[28px] font-medium py-4 px-10">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Collections />
      <GoldenTicket />
      <div className="flex flex-col gap-y-4 items-center justify-center z-10 mt-52">
        <h3 className=" text-5xl font-semibold bg-gradient-to-r text-transparent bg-clip-text from-[#00DBDE] to-[#FC00FF]">
          Get Aped with Us
        </h3>
        <div className="flex gap-x-2">
          <p className="text-2xl hover:border-b-4 ml-20 border-[#007AFF] cursor-pointer">
            Sign up for our newsletter
          </p>
          <img src="/cursor.svg" alt="cursor" />
        </div>
      </div>
      <footer className="mt-44 mx-20 pb-10">
        <hr />
        <div className="flex gap-x-6 text-gray-500 pt-6 place-items-center">
          <img className="w-[178px] h-[44px]" src="/navbar-image.svg" alt="" />
          <a
            className=" hover:text-[#7918F2] transition-all ease-in-out duration-300"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="hover:text-[#7918F2] transition-all ease-in-out duration-300"
            href="#"
          >
            Privacy Policy
          </a>
          <div className="flex gap-x-4 grow justify-end mr-10">
            <img src="twitter.svg" alt="twitter" />
            <img src="discord.svg" alt="discord" />
            <img src="instagram.svg" alt="instagram" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Landing;
