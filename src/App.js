import { useState } from 'react';
import './App.css';
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
    <div className="flex flex-col justify-center limit1920:overflow-x-hidden">

      <div className="sticky top-0 z-50 flex flex-col items-start limit1920:items-center">
        <NoticeBanner />
        <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
      </div>

      <div className="flex justify-start limit1920:justify-center items-center pb-40px">
        <Carousel />
      </div>

      <div className="flex flex-col items-start limit:items-center space-y-40px">

        <div className="flex flex-col w-default space-y-20px">
          <Slots />
          <SubNavbar />
          <Menus />
        </div>

        <div>
          <Footer2 />
          <Footer />
        </div>

      </div>
        
    </div>
  );
}

export default App;
