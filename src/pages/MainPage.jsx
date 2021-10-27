import React from 'react'
import Carousel from '../components/mainPage/Carousel'
import Footer from '../components/mainPage/Footer'
import Footer2 from '../components/mainPage/Footer2'
import Menus from '../components/mainPage/Menus'
import Navbar from '../components/mainPage/Navbar'
import NoticeBanner from '../components/mainPage/NoticeBanner'
import Slots from '../components/mainPage/Slots'
import SubNavbar from '../components/mainPage/SubNavbar'

const MainPage = ({isAuthenticated, setAuthenticated}) => {

    return (
        <div className="relative flex flex-col justify-center limit:overflow-x-hidden w-full">

            <div className="fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center">
                <NoticeBanner />
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
            </div>

            <div className="flex justify-start limit:justify-center w-full items-center pb-40px mt-92px">
                <Carousel />
            </div>

            <div className="flex flex-col items-start limit:items-center space-y-40px">
                
                <div className="flex flex-col w-default space-y-26px">
                    <Slots />
                    <SubNavbar />
                </div>
                
                <div className="flex flex-col w-default">
                    <Menus />
                </div>

                <div>
                    <Footer2 />
                    <Footer />
                </div>

            </div>

        </div>
    )
}

export default MainPage
