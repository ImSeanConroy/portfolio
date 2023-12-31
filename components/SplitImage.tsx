const SplitImage = ({
  imageOne,
  imageTwo,
}: {
  imageOne: string;
  imageTwo: string;
}) => {
  return (
    <>
      <div className="px-5 md:px-10 my-5 md:mb-10 flex flex-ro gap-5 md:gap-10">
        <div className="basis-1/2">
          <img src={imageOne} alt="" />
        </div>
        <div className="basis-1/2">
          <img src={imageTwo} alt="" />
        </div>
      </div>
    </>
  );
};

export default SplitImage;
