import type { Metadata } from 'next'

import SubHeading from '../components/SubHeading';
import BodyText from '../components/BodyText';
import BodyImage from '../components/BodyImage';
import LargeImage from '../components/LargeImage';
import PageMetadata from '../components/PageMetadata'

export const metadata: Metadata = PageMetadata({
  title: 'Junior Software Engineer at Cisco - Sean Conroy',
  description: "Transforming complex problems into seamless solutions with a touch of creativity. Explore portfolio to learm more.",
  keywords: ["ImSeanConroy", "Software Engineer", "Portfolio", "Web Development", "Cisco"],
  link: 'https://imseanconroy.co.uk/about',
  image: 'https://www.imseanconroy.co.uk/other/socials.png'
})

const AboutPages = () => {
  return (
    <>
      <LargeImage image="/about/main.png" />
      <div className="max-w-3xl mx-auto">
        <div className="px-5 md:px-10 mt-12 md:mt-20 mb-16 md:mb-28">
          <SubHeading main={true} text="Transforming complex problems into seamless solutions with a touch of creativity." />
          <BodyText text="Currently, I am a Junior Software Engineer at Cisco, a global technology leader and powerhouse. At Cisco, I've had the opportunity to rotated through various areas of the business, gaining a wide varitry of software development experience while developing and maintaining large-scale projects. However, what truly excites me is the opportunity to continually grow, and Cisco has been the perfect environment to nurture this passion." />
          <BodyImage image="/about/main.png" />
          <BodyText text="Outside my professional life, I'm deeply fascinated with electronics. I've been immersing myself in hands-on projects involving Arduino, diving into the world of 3D printing, and building my own electronic devices from scratch. This endeavor isn't just about technology; it's about the thrill of creating and understanding the nuances of how things work. I believe life, much like software development, is all about the experiences and the challenges you're brave enough to undertake. In this portfolio, you'll discover a blend of my professional accomplishments and personal projects. I invite you to explore, and should you wish to discuss any collaborative opportunities or simply share a travel story or a recipe, please don't hesitate to reach out!" />
        </div>
      </div>
    </>
  );
};

export default AboutPages;