import SubHeading from '../components/SubHeading';
import BodyText from '../components/BodyText';
import BodyImage from '../components/BodyImage';
import Image from '../components/Image';

const AboutPages = () => {
  return (
    <>
      <Image image="/about.png" />
      <div className="max-w-3xl mx-auto">
        <div className="px-5 md:px-10 mt-12 md:mt-20 mb-16 md:mb-28">
          <SubHeading text="Transforming complex problems into seamless solutions with a touch of creativity." />
          <BodyText text="Currently, I am a Junior Software Engineer at Cisco, a brand synonymous with innovation and pushing technological boundaries. At Cisco, I've been actively involved in projects that leverage my proficiency in Python, JavaScript, and React. However, what truly excites me is the opportunity to continually grow, and Apple has been the perfect environment to nurture that passion." />
          <BodyImage image="/about.png" />
          <BodyText text="Outside my professional realm, I'm deeply fascinated with electronics. I've been immersing myself in hands-on projects involving Arduino, diving into the world of 3D printing, and building my own electronic devices from scratch. This endeavor isn't just about technology; it's about the thrill of creating and understanding the nuances of how things work." />
          <BodyImage image="/about.png" />
          <BodyText text="In my downtime, I'm a bit of an adventurer. Cooking exotic dishes, riding the waves while surfing, challenging myself with climbing, and traveling to unseen corners of the world are just a few of the ways I recharge. I believe life, much like software development, is all about the experiences and the challenges you're brave enough to undertake. In this portfolio, you'll discover a blend of my professional accomplishments and personal projects. I invite you to explore, and should you wish to discuss any collaborative opportunities or simply share a travel story or a recipe, please don't hesitate to reach out!" />
        </div>
      </div>
    </>
  );
};

export default AboutPages;
