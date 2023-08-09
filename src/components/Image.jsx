const Image = ({ image }) => {
  return (
    <div className="w-full px-10 my-10">
      <img className="w-full" src={image} />
    </div>
  );
};

export default Image;
