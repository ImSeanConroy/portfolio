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
            image="https://images.unsplash.com/photo-1690620823096-2b50a7c863d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          />
          <Card
            title="Coming Soon"
            image="https://images.unsplash.com/photo-1690620823096-2b50a7c863d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          />
          <Card
            title="Coming Soon"
            image="https://images.unsplash.com/photo-1690620823096-2b50a7c863d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          />
          <Card
            title="Coming Soon"
            image="https://images.unsplash.com/photo-1690620823096-2b50a7c863d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          />
          <Card
            title="Coming Soon"
            image="https://images.unsplash.com/photo-1690620823096-2b50a7c863d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          />
          <Card
            title="Coming Soon"
            image="https://images.unsplash.com/photo-1690620823096-2b50a7c863d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
