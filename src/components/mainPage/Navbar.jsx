import React, { useState } from 'react'
import Logo from '../../images/logo.png'
import Koreaflag from '../../images/korea_flag.png'
import UKflag from '../../images/uk_flag.png'
import DropDownControls from '../dropdowns/DropDownControls'
import CountryDropDown from '../dropdowns/CountryDropDown'
import PopupControls from '../popups/PopupControls'
import LoginPopup from '../popups/LoginPopup'
import WalletDropDown from '../dropdowns/WalletDropDown'
import ProfileDropDown from '../dropdowns/ProfileDropDown'
import PersonIcon from '../../images/person_icon.png'
import ArrowUp from '../../images/arrows/arrow_up.png'
import ArrowUpWhite from '../../images/arrows/arrow_up_white.png'
import ArrowDown from '../../images/arrows/arrow_down.png'
import ArrowDownWhite from '../../images/arrows/arrow_down_white.png'
import InboxIcon from '../../images/inbox_icon.png'
import NavbarHover from '../hovers/NavbarHover'
import SignupPopup from '../popups/SignupPopup'
import { useHistory } from 'react-router-dom'

const Navbar = ({ isAuthenticated, setAuth }) => {

    const history = useHistory();

    const [selectedTab, setSelectedTab] = useState()
    const [hoveredTab, setHoveredTab] = useState()
    const [country, setCountry] = useState("KR")
    const [isProfileOpen, setProfileOpen] = useState()
    const [isWalletOpen, setWalletOpen] = useState()
    const [isCountryOpen, setCountryOpen] = useState()
    const [isPopupOpen, setPopupOpen] = useState(true)

    const tabClass = "flex-shrink-0 text-gray-text hover:text-blue-highlight relative flex flex-col items-center justify-center h-60px px-10px cursor-pointer"
    const selectedTabClass = "flex-shrink-0 relative flex flex-col items-center justify-center px-10px cursor-pointer h-60px text-blue-highlight cursor-pointer"
    const lineClass = "absolute bottom-0 h-2px w-full bg-clear"
    const selectedLineClass = "absolute bottom-0 h-2px w-full bg-blue-highlight"
    
    const tabsArray = [
        { text: "라이브카지노", id: 0 },
        { text: "슬롯게임", id: 1 },
        { text: "스포츠", id: 2 },
        { text: "e-스포츠", id: 3 },
        { text: "미니게임", id: 4 },
        { text: "키론가상게임", id: 5 },
        { text: "피싱게임", id: 6 },
        { text: "로터리", id: 7 },
        { text: "경기결과", id: 8, path: "/gameresults/sports/win-draw-lose" },
        { text: "라이브영상", id: 9 },
        { text: "게시판", id: 10, path: "/freeboard" },
        { text: "고객센터", id: 11, path: "/cscenter/contact/all" },
    ];

    function TabsList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                className={selectedTab === item.id ? selectedTabClass : tabClass} 
                onClick={() => {
                    setSelectedTab(item.id)
                    history.push(item.path)
                }}
                onMouseOver={() => {
                    setHoveredTab(item.id)
                    setSelectedTab(item.id)
                }}
                onMouseLeave={() => {
                    item.id > 6 
                    && setSelectedTab(null)
                }}
            >
                <span className="cursor-pointer font-spoqaBold text-16px tracking-tight mt-px">{item.text}</span>
                <div className={selectedTab === item.id ? selectedLineClass : lineClass}></div>
            </button>
        ));
    }
    
    const DropdownArrow = ({isOpen, isWhite}) => (
        <>
        {isWhite ? (
            <img src={isOpen ? ArrowUpWhite : ArrowDownWhite} alt="arrow" />
        ) : (
            <img src={isOpen ? ArrowUp : ArrowDown} alt="arrow" />
        )}
        </>
    )

    const CountryButton = (
        <div className="-ml-4px flex items-center limit:w-104px limit:h-40px h-30px bg-gradient-to-br from-blue-gradLight to-blue-gradDark rounded-full space-x-10px shadow-inner p-4px shadow-plain2 hover:opacity-75 pr-2 limit:pr-0">
            <div className="limit:h-32px limit:w-32px w-20px h-20px bg-white rounded-full flex items-center justify-center">
                <img className="" src={country === "KR" ? Koreaflag : UKflag} alt="flag"></img>
            </div>
            <label className="font-spoqaBold text-white cursor-pointer pt-px">{country}</label>
            <DropdownArrow isWhite isOpen={isCountryOpen}/>
        </div>
    )

    const WalletButton = (
        <div className="flex items-center space-x-10px h-40px flex-shrink-0">
            <div className="flex limit:flex-col limit:-space-y-6px limit:space-x-0 space-x-4px items-end  group">
                <div className="">
                    <label className="text-blue-r2087f0 cursor-pointer font-spoqaMedium mr-3px group-hover:text-blue-700">₩</label>
                    <label className="text-blue-r2087f0 cursor-pointer font-roboto group-hover:text-blue-700">100,000</label>
                    <label className="text-blue-r2087f0 cursor-pointer font-spoqaMedium group-hover:text-blue-700">원</label>
                </div>
                <label className="text-orange-ff7e00 cursor-pointer font-roboto  group-hover:text-yellow-700">12,500 P</label>
            </div>
            <DropdownArrow isOpen={isWalletOpen}/>
        </div>
    )
    
    const profileButton = (
        <div className="flex-shrink-0 flex items-center justify-center space-x-10px  hover:opacity-75">
            <div className="relative flex items-center justify-center limit:h-40px limit:w-40px w-30px h-30px rounded-full bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2">
                <img className="mt-2px ml-2px limit:object-none object-contain  limit:h-40px limit:w-40px w-20px h-20px" src={PersonIcon} alt="person" />
            </div>
            <DropdownArrow isOpen={isProfileOpen}/>
        </div>  
    )

    const LoginButton = (
        <button className="flex items-center justify-center text-white w-104px limit:h-40px h-30px rounded-full bg-gradient-to-br from-blue-gradLight to-blue-gradDark text-16px font-spoqaBold shadow-plain2 pt-px hover:opacity-75">로그인</button>
    )

    const SignupButton = (
        <button className="flex items-center justify-center text-white w-104px  limit:h-40px h-30px rounded-full bg-gradient-to-br from-blue-darkGradLight to-blue-darkGradDark text-16px font-spoqaBold shadow-plain2 pt-px hover:opacity-75">회원가입</button>
    )

    const InboxButton = (
        <button 
            onClick={() => history.push("/mypage/inbox")} 
            className="flex-shrink-0 relative flex items-center justify-center text-white rounded-full bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2 hover:opacity-75 limit:h-40px limit:w-40px w-30px h-30px"
        >
            <img className="ml-2px mt-2px limit:object-none object-contain  limit:h-40px limit:w-40px w-20px h-20px" src={InboxIcon} alt="inbox_icon" />
            <div className="absolute flex items-center justify-center w-20px h-20px bg-red-notification top-0 right-0 -mr-6px -mt-3px rounded-full shadow-plain6">
                <label className="text-12px font-roboto mt-2px ml-px">1</label>
            </div>
        </button>
    )

    return (
        <div className="w-full z-50">
            <header className="flex limit:items-center items-start justify-between limit:h-60px h-90px px-10px shadow-plain bg-white limit:flex-row flex-col-reverse flex-shrink-0">
                <div className="flex items-center flex-shrink-0">
                    <img className="w-130px object-contain mb-2 mr-10px cursor-pointer" src={Logo} alt="logo" onClick={() => history.push('/')} />
                    <TabsList items={tabsArray} />
                </div>
                
                <div className="-mb-10px limit:-mb-0 w-full flex justify-end">
                {isAuthenticated ? (
                    <div className="flex space-x-20px items-center flex-shrink-0">
                        {/* BREAK */} 
                        <DropDownControls buttonChild={profileButton} onClick={() => setProfileOpen(!isProfileOpen)} onClose={() => setProfileOpen(false)}>
                            <div className="mt-4"><ProfileDropDown setAuth={setAuth}/></div>
                        </DropDownControls>
                        {/* BREAK */}
                        <DropDownControls buttonChild={WalletButton} onClick={() => setWalletOpen(!isWalletOpen)} onClose={() => setWalletOpen(false)}>
                            <div className="mt-4"><WalletDropDown /></div>
                        </DropDownControls>
                        {/* BREAK */}
                        {InboxButton}
                        {/* BREAK */}
                        <DropDownControls buttonChild={CountryButton} onClick={() => setCountryOpen(!isCountryOpen)} onClose={() => setCountryOpen(false)}>
                            <div className="mt-4"><CountryDropDown setCountry={setCountry} country={country} /></div>
                        </DropDownControls>
                    </div>

                ) : (
                    <div className="flex space-x-3 items-center flex-shrink-0 mt-5px">
                        <PopupControls buttonChild={LoginButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                            <LoginPopup setAuth={setAuth} setPopupOpen={setPopupOpen}/>
                        </PopupControls>  
                        {/* BREAK */}         
                        <PopupControls buttonChild={SignupButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                            <SignupPopup setAuth={setAuth} setPopupOpen={setPopupOpen}/>
                        </PopupControls>           
                        {/* BREAK */}
                        <DropDownControls buttonChild={CountryButton} onClick={() => setCountryOpen(!isCountryOpen)} onClose={() => setCountryOpen(false)} >
                            <div className="mt-4"><CountryDropDown setCountry={setCountry} country={country} /></div>
                        </DropDownControls>
                    </div>
                )}
                </div>
            </header>
            <NavbarHover selection={hoveredTab} setHoveredTab={setHoveredTab} setSelectedTab={setSelectedTab}/>
        </div>
    )
}

export default Navbar
