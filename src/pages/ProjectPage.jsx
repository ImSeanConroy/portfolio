import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import Image from '../components/Image';
import BodyImage from '../components/BodyImage';
import SubHeading from '../components/SubHeading';
import BodyText from '../components/BodyText';

const ProjectPage = () => {
  return (
    <>
      <Image image="/about.png" />

      <div className="max-w-3xl mx-auto">
        <div className="px-5 md:px-10 my-16 md:mt-20 md:mb-28">

          <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide leading-tight">
            Disturbance-Free Calling
          </p>
          <SubHeading text="Minimising disturbances to enable productive remote work." />
          <BodyText
            text="Software engineer with experience developing and maintaining
            large-scale projects. Proficient in multiple programming languages and
            frameworks, including Python, JavaScript React. Quick learner and
            passionate about working with new cutting-edge technology that solves
            critical problems while allowing me to continue to learn and develop
            my own skills. Currently experimenting with electronics, Arduino, and
            3D printing while building my own electronics projects. Also, an avid
            learner and enjoy cooking, surfing, climbing, and traveling."
          />

        </div>
      </div>

      <Image image="/about.png" />
      <Image image="/about.png" />

      <div className="max-w-3xl mx-auto">
          <div className="px-5 md:px-10 my-16 md:mt-20 md:mb-28">
      
          <SubHeading text="Minimising disturbances to enable productive remote work." />
          <BodyText
            text="Software engineer with experience developing and maintaining
            large-scale projects. Proficient in multiple programming languages and
            frameworks, including Python, JavaScript React. Quick learner and
            passionate about working with new cutting-edge technology that solves
            critical problems while allowing me to continue to learn and develop
            my own skills. Currently experimenting with electronics, Arduino, and
            3D printing while building my own electronics projects. Also, an avid
            learner and enjoy cooking, surfing, climbing, and traveling."
          />
        </div>
      </div>

      <Image image="/about.png" />

      <div className="max-w-3xl mx-auto">
        <div className="px-5 md:px-10 my-16 md:mt-20 md:mb-28">

        <SubHeading text="Every detail, meticulously considered." />
        <BodyText
          text="Software engineer with experience developing and maintaining
          large-scale projects. Proficient in multiple programming languages and
          frameworks, including Python, JavaScript React. Quick learner and
          passionate about working with new cutting-edge technology that solves
          critical problems while allowing me to continue to learn and develop
          my own skills. Currently experimenting with electronics, Arduino, and
          3D printing while building my own electronics projects. Also, an avid
          learner and enjoy cooking, surfing, climbing, and traveling."
        />
        <BodyImage image="/about.png" />
        <SubHeading text="Fast, efficient, and precise." />
        <BodyText
          text="Software engineer with experience developing and maintaining
          large-scale projects. Proficient in multiple programming languages and
          frameworks, including Python, JavaScript React. Quick learner and
          passionate about working with new cutting-edge technology that solves
          critical problems while allowing me to continue to learn and develop
          my own skills. Currently experimenting with electronics, Arduino, and
          3D printing while building my own electronics projects. Also, an avid
          learner and enjoy cooking, surfing, climbing, and traveling."
        />
        <BodyImage image="/about.png" />
        <BodyImage image="/about.png" />
        <BodyText
          text="Software engineer with experience developing and maintaining
          large-scale projects. Proficient in multiple programming languages and
          frameworks, including Python, JavaScript React."
        />
        <SubHeading text="The art and precision of assembly." />
        <BodyText
          text="Software engineer with experience developing and maintaining
          large-scale projects. Proficient in multiple programming languages and
          frameworks, including Python, JavaScript React. Quick learner and
          passionate about working with new cutting-edge technology that solves
          critical problems while allowing me to continue to learn and develop
          my own skills. Currently experimenting with electronics, Arduino, and
          3D printing while building my own electronics projects. Also, an avid
          learner and enjoy cooking, surfing, climbing, and traveling."
        />
        <BodyImage image="/about.png" />
        <BodyText
          text="Software engineer with experience developing and maintaining
          large-scale projects. Proficient in multiple programming languages and
          frameworks, including Python, JavaScript React. Quick learner and
          passionate about working with new cutting-edge technology that solves
          critical problems while allowing me to continue to learn and develop
          my own skills. Currently experimenting with electronics, Arduino, and
          3D printing while building my own electronics projects. Also, an avid
          learner and enjoy cooking, surfing, climbing, and traveling."
        />
        </div>
      </div>

      <Image image="/about.png" />

      <div className="max-w-3xl mx-auto">
        <div className="px-5 md:px-10 my-16 md:mt-20 md:mb-28">
          <SubHeading text="Where concepts come to life." />
          <BodyText
            text="Software engineer with experience developing and maintaining
            large-scale projects. Proficient in multiple programming languages and
            frameworks, including Python, JavaScript React. Quick learner and
            passionate about working with new cutting-edge technology that solves
            critical problems while allowing me to continue to learn and develop
            my own skills."
          />
          <BodyImage image="/about.png" />
          <BodyText
            text="Software engineer with experience developing and maintaining
            large-scale projects. Proficient in multiple programming languages and
            frameworks, including Python, JavaScript React. Quick learner and
            passionate about working with new cutting-edge technology that solves
            critical problems while allowing me to continue to learn and develop
            my own skills."
          />
        </div>
      </div>

      <Image image="/about.png" />
      <Image image="/about.png" />

      <div className="w-full px-5 md:px-10 py-10 md:py-16 text-2xl md:text-3xl lg:text-4xl">

        <div className="flex flex-col md:flex-row justify-between content-center gap-12">
          <Link to="/about" className="flex items-center">
            <BsChevronLeft />
            <p className=" font-semibold tracking-wide px-4">American</p>
          </Link>

          <Link to="/about" className="flex items-center">
            <p className="font-semibold tracking-wide px-4">American</p>
            <BsChevronRight />
          </Link>
        </div>
      
      </div>

    </>
  );
};

export default ProjectPage;
