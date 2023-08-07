import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

const App = () => {
  return (
    <>
      <div className="text-gray-900">
        <Header />
        <Hero />

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

        <Footer />
      </div>
    </>
  );
};

export default App;
