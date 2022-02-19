import Card from "./Card";

const Collections = () => {
  return (
    <section className="mx-16 mt-20 relative flex flex-col gap-y-10">
      <img className="absolute right-0" src="dots-right.svg" alt="dots" />
      <img
        className="absolute top-[60rem] -left-20"
        src="dots-left.svg"
        alt="dots"
      />
      <img
        className="absolute top-[40rem] -right-20"
        src="ellipse3.svg"
        alt="background"
      />

      <div className="flex flex-col gap-y-10">
        <h2 className="text-8xl z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#AC32E4] via-[#7918F2] to-[#4801FF] font-semibold">
          Collections
        </h2>
        <p className="text-2xl z-10">
          With more than 180+ hand drawn traits, each NFT is unique and comes
          with a membership to an exclusive group of successful investors. Join
          an ambitious ever-growing community with multiple benefits and
          utilities.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-x-14 gap-y-14">
        <Card imgSrc={"monkey1.svg"} user={"user1.svg"} />
        <Card imgSrc={"monkey2.svg"} user={"user2.svg"} />
        <Card imgSrc={"monkey3.svg"} user={"user3.svg"} />
        <Card imgSrc={"monkey4.svg"} user={"user1.svg"} />
        <Card imgSrc={"monkey5.svg"} user={"user2.svg"} />
        <Card imgSrc={"monkey6.svg"} user={"user3.svg"} />
      </div>
    </section>
  );
};
export default Collections;
