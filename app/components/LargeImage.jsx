const LargeImage = ({ image }) => {
  return (
    <>
      <div className="w-full px-5 md:px-10 my-2 md:mb-10">
        <img className="h-100" src={image} alt="" />
      </div>
    </>
  );
};

export default LargeImage;
