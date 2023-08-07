import Image from '../components/Image';

const AboutPages = () => {
  return (
    <>
      <Image image="https://images.unsplash.com/photo-1689081777651-eef75a48e959?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" />
      <div className="w-full px-10 pt-10 pb-20">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-24 text-lg">
          <div className="basis-1/2">
            <p className="text-lg font-light pb-8">Areas of Expertise</p>
            <p className="text-2xl md:text-3xl font-semibold tracking-wide">
              Full stack Development
            </p>
            <p className="text-2xl md:text-3xl font-semibold tracking-wide">
              Machine Learning
            </p>
            <p className="text-2xl md:text-3xl font-semibold tracking-wide">DevOps</p>
            <p className="text-2xl md:text-3xl font-semibold tracking-wide">Surfing</p>
            <p className="text-2xl md:text-3xl font-semibold tracking-wide">Robotics</p>
          </div>

          <div className="basis-1/2">
            <p className="text-lg font-light leading-8 pb-24 md:pb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="flex flex-row gap-10 pb-14">
              <div>
                <p className="text-lg font-semibold">Email</p>
                <p className="text-lg font-light">imseanconroy@gmail.com</p>
              </div>

              <div>
                <p className="text-lg font-semibold">Phone</p>
                <p className="text-lg font-light">(+44) 07582-415-644</p>
              </div>
            </div>

            <button className="text-lg font-light text-white bg-slate-600 px-10 py-5">
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPages;
