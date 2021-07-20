import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Footer2 from './components/Footer2';
import Menus from './components/Menus';
import Navbar from './components/Navbar';
import NoticeBanner from './components/NoticeBanner';
import Slots from './components/Slots';
import SubNavbar from './components/SubNavbar';

function App() {

  const [isAuthenticated, setAuthenticated] = useState(false)

  return (
    <div>
      <div className="sticky top-0 z-50">
        <NoticeBanner />
        <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
      </div>

      <div className="flex flex-col items-center">
        <div className="w-screen flex justify-center items-center">
          <Carousel />
        </div>

        <div className="flex flex-col items-center w-full xl:w-5/6 2xl:w-2/3 px-2">
          <Slots />
          <SubNavbar />
          <Cards />
          <Menus />
        </div>

        <Footer2 />
        <Footer />

      </div>
      
      

    </div>
  );
}

export default App;
