const Image = ({ image }) => {
  return (
    <div className="w-full p-10">
      <img className="w-full" src={image} />
    </div>
  );
};

export default Image;
