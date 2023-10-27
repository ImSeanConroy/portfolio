import SubHeading from '../components/SubHeading';
import BodyText from '../components/BodyText';
import BodyImage from '../components/BodyImage';
import Image from '../components/Image';

const AboutPages = () => {
  return (
    <>
      <Image image="/about.png" />
      <div className="max-w-3xl mx-auto">
        <div className="px-5 md:px-10 my-16 md:mt-20 md:mb-28">
          <SubHeading text="Junior software engineer with experience developing and maintaining large-scale projects." />
          <BodyText text="Proficient in multiple programming languages and frameworks, including Python, JavaScript React. Quick learner and passionate about working with new cutting-edge technology that solves critical problems while allowing me to continue to learn and develop my own skills. Currently experimenting with electronics, Arduino, and 3D printing while building my own electronics projects. Also, an avid learner and enjoy cooking, surfing, climbing, and traveling." />
          <BodyImage image="/about.png" />
          <BodyText text="Proficient in multiple programming languages and frameworks, including Python, JavaScript React. Quick learner and passionate about working with new cutting-edge technology that solves critical problems while allowing me to continue to learn and develop my own skills. Currently experimenting with electronics, Arduino, and 3D printing while building my own electronics projects. Also, an avid learner and enjoy cooking, surfing, climbing, and traveling." />
        </div>
      </div>
    </>
  );
};

export default AboutPages;
