import Card from '../components/Card';

const HomePage = () => {
  return (
    <>
      <div className="w-full px-10 pt-10 pb-16 md:pt-36 md:pb-24">
        <div className="w-100 md:w-3/5">
          <p className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide mb-4">
            Hi there.
          </p>
          <p className="text-lg font-light leading-8">
            I am a software engineer at Cisco based in Manchester, United
            Kingdom. I am currently completing a degree apprenticeship and will
            graduate with a BA(Hons) and three years of software development
            experience.
          </p>
        </div>
      </div>

      <div className="w-full p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-2">
          <Card
            title="Coming Soon"
            image="/project-1.png"
          />
          <Card
            title="Coming Soon"
            image="/project-2.png"
          />
          <Card
            title="Coming Soon"
            image="/project-3.png"
          />
          <Card
            title="Coming Soon"
            image="/project-4.png"
          />
          <Card
            title="Coming Soon"
            image="/project-5.png"
          />
          <Card
            title="Coming Soon"
            image="/project-6.png"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
