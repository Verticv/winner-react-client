import Footer from 'components/Footer'
import Footer2 from 'components/Footer2'
import DirectoryComponent from 'components/myPage/DirectoryComponent'
import Navbar from 'components/Navbar'
import NoticeBanner from 'components/NoticeBanner'
import React from 'react'
import { Route } from 'react-router'
import MyPageBanner from '../images/attendance/attendance_banner.png'
import AttendanceCalendar from 'components/attendance/AttendanceCalendar'


const AttendPage = ({isAuthenticated, setAuthenticated}) => {


    return (
        <div className="relative flex flex-col justify-center limit:overflow-x-hidden">

            <div className="fixed w-1920 top-0 z-50 flex flex-col items-start limit1920:items-center">
                <NoticeBanner />
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
            </div>


            <div className="flex flex-col items-start limit:items-center mt-92px w-full h-full">

                <Route path="/attendance">
                    <DirectoryComponent 
                        branch1="출석부" 
                        mainPath="/mypage/bet-history"
                    />
                </Route>

                <div className="relative w-default h-225px">
                    <label className="text-36px font-spoqaMedium text-blue-r325685 absolute right-0 bottom-0 z-20 mb-86px mr-50px">출석부</label>
                    <img className="z-10" src={MyPageBanner} alt="" />
                </div>

                <div className="flex mt-20px w-default justify-center">
                    <AttendanceCalendar />                
                </div>

                <div>
                    <Footer2 />
                    <Footer />
                </div>

            </div>
        </div>
    )
}

export default AttendPage