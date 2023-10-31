import Card from '../components/Card';

const HomePage = () => {
  return (
    <>
      <div className="w-full px-5 md:px-10 pt-10 pb-16 md:pt-36 md:pb-24">
        <div className="w-100 md:w-3/5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide mb-4">
            Hi there.
          </h1>
          <p className="text-md sm:text-lg font-light leading-7 sm:leading-8">
            I am a Junior Software Engineer at Cisco, transforming complex problems into seamless solutions with a touch of creativity.
          </p>
        </div>
      </div>

      <div className="w-full px-5 md:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-rows-5 md:grid-cols-2 grid-flow-row gap-5 md:gap-8 lg:gap-10">
          <div className="row-span-2">
            <Card
              title="Disturbance-Free Calling"
              description="Minimising disturbances to enable productive remote work."
              image="/project-1.png"
              link="/disturbance-free-calling"
            />
          </div>
          <div className="row-span-3">
            <Card
              title="Coming Soon"
              description=""
              image="/project-2.png"
              link="/"
            />
          </div>
          <div className="row-span-3">
            <Card
              title="Coming Soon"
              description=""
              image="/project-3.png"
              link="/"
            />
          </div>
          <div className="row-span-2">
            <Card
              title="Coming Soon"
              description=""
              image="/project-4.png"
              link="/"
            />
          </div>
        </div>
      </div>

      <div className="w-full px-5 md:px-10 pb-10 sm:pt-4 md:pt-14 md:pb-20">
        <div className="w-100 md:w-3/5">
          <p className="text-md sm:text-lg font-light leading-7 sm:leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur ipsum, in dignissim lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi lacinia lacus ac neque feugiat, nec faucibus erat ultricies. Sed varius, risus accumsan facilisis ullamcorper, tortor quam tincidunt urna, quis porta sapien sapien id est.
          </p>
        </div>
      </div>
    
      <div className="w-full px-5 md:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-rows-5 md:grid-cols-2 grid-flow-row gap-5 md:gap-8 lg:gap-10">
          <div className="row-span-2">
            <Card
              title="Coming Soon"
              description=""
              image="/project-4.png"
              link="/"
            />
          </div>
          <div className="row-span-3">
            <Card
              title="Coming Soon"
              description=""
              image="/project-2.png"
              link="/"
            />
          </div>
          <div className="row-span-3">
            <Card
              title="Coming Soon"
              description=""
              image="/project-3.png"
              link="/"
            />
          </div>
          <div className="row-span-2">
            <Card
              title="Coming Soon"
              description=""
              image="/project-4.png"
              link="/"
            />
          </div>
        </div>
      </div>
    
    </>
  );
};

export default HomePage;
