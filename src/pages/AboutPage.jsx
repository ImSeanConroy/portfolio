import Image from '../components/Image';

const AboutPages = () => {
  return (
    <>
      <Image image="/about.png" />
      <div className="w-full px-5 md:px-10 pt-10 pb-20">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20 text-lg">
          <div className="basis-1/2">
            <p className="text-lg font-light pb-8">Areas of Interest</p>
            <p className="text-2xl md:text-3xl font-semibold tracking-wide pb-1">
              Full Stack Development
            </p>
            <p className="text-2xl md:text-3xl font-semibold tracking-wide pb-1">
              Electronics & Robotics
            </p>
            <p className="text-2xl md:text-3xl font-semibold tracking-wide pb-1">
              DevOps
            </p>
            <p className="text-2xl md:text-3xl font-semibold tracking-wide pb-1">
              Surfing
            </p>
            <p className="text-2xl md:text-3xl font-semibold tracking-wide pb-1">
              Climbing
            </p>
          </div>

          <div className="basis-1/2">
            <p className="text-md sm:text-lg font-light leading-7 sm:leading-8 pb-10 md:pb-16">
              Junior software engineer with experience developing and
              maintaining large-scale projects. Proficient in multiple
              programming languages and frameworks, including Python, JavaScript
              React. Quick learner and passionate about working with new
              cutting-edge technology that solves critical problems while
              allowing me to continue to learn and develop my own skills.
              Currently experimenting with electronics, Arduino, and 3D printing
              while building my own electronics projects. Also, an avid learner
              and enjoy cooking, surfing, climbing, and traveling.
            </p>
            <a
              className="text-medium font-light text-white bg-gray-700 px-8 py-4"
              href="mailto:hello@imseanconroy.co.uk"
            >
              Reach Out.
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPages;
