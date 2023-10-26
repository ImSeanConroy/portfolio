const Image = ({ image }) => {
  return (
    <>
      <div className="w-full px-5 md:px-10 my-5 md:mb-10">
        <img className="h-100" src={image} />
      </div>
    </>
  );
};

export default Image;
