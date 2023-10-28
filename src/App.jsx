import { Outlet } from 'react-router-dom';
import { ScrollRestoration } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div className="text-gray-900 mx-auto max-w-screen-xl">
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default App;
