import Subheading from "@/app/components/subheading";

const Hero = () => {
  return (
    <div className="text-center mb-5 w-[90%] lg:w-[70%] max-w-[1100px] m-auto px-3 pt-14 sm:pt-16 md:pt-20 pb-16 sm:pb-24 md:pb-32">
      <Subheading />

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tighter">
        Focused on building systems that are fast, scalable, and easy to use.
      </h1>
    </div>
  );
};

export default Hero;
