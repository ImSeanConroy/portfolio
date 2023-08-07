const Card = ({ title, image }) => {
  return (
    <div className="group bg-gray-100 cursor-pointer relative">
      <div className="absolute px-10 py-12 w-full h-full group-hover:bg-white group-hover:opacity-80 transition duration-150 ease-in-out">
        <p className="z-10 text-2xl sm:text-3xl font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out">{title}</p>
      </div>
      <img className="w-100" src={image} />
    </div>
  );
};

export default Card;
