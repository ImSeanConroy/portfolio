import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';

const Footer = () => {
  return (
    <div className="w-full px-5 md:px-10 py-20">
      <div className="flex flex-col md:flex-row justify-between gap-5">
        
        <div className="text-center w-full">
          <p className="text-xl md:text-2xl font-semibold tracking-wide">
            Sean Conroy © 2023
          </p>
        </div>

        <div className="text-center w-full">
          <div className="text-2xl lg:text-3xl flex flex-row items-center justify-center gap-2">
            <a href="https://www.instagram.com/imseanconroy">
              <AiOutlineInstagram />
            </a>
            <a href="https://www.linkedin.com/in/imseanconroy">
              <BiLogoLinkedin />
            </a>
            <a href="https://www.twitter.com/imseanconroy">
              <AiOutlineTwitter />
            </a>
          </div>
        </div>

        <div className="text-center w-full">
          <p className="text-xl md:text-2xl font-semibold tracking-wide">
            imseanconroy@gmail.com
          </p>
        </div>
      
      </div>
    </div>
  );
};

export default Footer;
