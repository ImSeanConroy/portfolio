import { Link } from 'react-router-dom';

const Card = ({ title, description, link, image }) => {
  return (
    <Link to={ link } className="group bg-gray-100 cursor-pointer relative h-full">
      <div className='hidden sm:block'>
        <div className="z-10 px-5 md:px-10 py-12 absolute opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out">
          <p className="text-4xl font-semibold tracking-wide pb-3">
            { title }
          </p>
          <p className="text-lg sm:text-lg font-light tracking-wide w-80 leading-8">
            { description }
          </p>
        </div>
        <p className="z-10 px-10 py-12 absolute text-xl sm:text-3xl font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition duration-150 ease-in-out"></p>
        <div className="absolute w-full h-full group-hover:bg-gray-100 group-hover:opacity-100 transition duration-150 ease-in-out"></div>
      </div>

      <img className="w-full" src={ image } />

      <div className='pt-6 pb-10 sm:hidden'>
        <p className="text-2xl font-semibold tracking-wide pb-3">
          { title }
        </p>
        <p className="text-md sm:text-lg font-light leading-7 sm:leading-8 tracking-wide w-80">
          { description }
        </p>
      </div>
    </Link>
  );
};

export default Card;
