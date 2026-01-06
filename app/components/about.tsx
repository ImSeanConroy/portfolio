import { ABOUT_SECTIONS } from "@/app/constants/about";

const About = () => {
  return (
    <div className="w-[100%] sm:w-[80%] md:w-[60%] lg:w-[45%]  xl:w-[35%] max-w-[550px] m-auto mt-4 sm:mt-14 md:mt-24 mb-14 md:pb-24 px-5 sm:px-0 py-2">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight mb-8 md:mb-16">
        Hi, I&apos;m Sean Conroy, <br />A software engineer from Manchester, United Kingdom.
      </h2>

      <div className="flex flex-col gap-10 md:gap-12">
        {ABOUT_SECTIONS.map((section, index) => (
          <div key={index}>
            <h3 className="text-base md:text-xl font-bold tracking-tight leading-tight mb-3 md:mb-4">
              {section.title}
            </h3>
            <p className="text-sm md:text-base dark:text-gray-400">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
