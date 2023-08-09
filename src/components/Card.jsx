const Card = ({ title, image }) => {
  return (
    <div className="group bg-gray-100 cursor-pointer relative">
      <p className="z-10 px-10 py-12 absolute text-2xl sm:text-3xl font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out">
        {title}
      </p>
      <div className="absolute w-full h-full group-hover:bg-white group-hover:opacity-80 transition duration-150 ease-in-out"></div>
      <img className="w-full" src={image} />
    </div>
  );
};

export default Card;
