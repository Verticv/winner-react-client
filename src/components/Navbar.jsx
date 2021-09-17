import React, { useState } from 'react'
import Logo from '../images/logo.png'
import Koreaflag from '../images/korea_flag.png'
import UKflag from '../images/uk_flag.png'
import DropDownControls from './dropdowns/DropDownControls'
import CountryDropDown from './dropdowns/CountryDropDown'
import PopupControls from './popups/PopupControls'
import LoginPopup from './popups/LoginPopup'
import WalletDropDown from './dropdowns/WalletDropDown'
import ProfileDropDown from './dropdowns/ProfileDropDown'
import PersonIcon from '../images/person_icon.png'
import ArrowUp from '../images/arrows/arrow_up.png'
import ArrowUpWhite from '../images/arrows/arrow_up_white.png'
import ArrowDown from '../images/arrows/arrow_down.png'
import ArrowDownWhite from '../images/arrows/arrow_down_white.png'
import InboxIcon from '../images/inbox_icon.png'
import NavbarHover from './hovers/NavbarHover'
import SignupPopup from './popups/SignupPopup'
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

    const tabClass = "text-gray-text hover:text-blue-highlight relative flex flex-col items-center justify-center h-60px px-10px cursor-pointer"
    const selectedTabClass = "relative flex flex-col items-center justify-center px-10px cursor-pointer h-60px text-blue-highlight cursor-pointer"
    const lineClass = "absolute bottom-0 h-2px w-full bg-clear"
    const selectedLineClass = "absolute bottom-0 h-2px w-full bg-blue-highlight"
    
    const tabsArray = [
        { text: "라이브카지노", id: 0 },
        { text: "슬롯게임", id: 1 },
        { text: "스포츠", id: 2 },
        { text: "e-스포츠", id: 3 },
        { text: "미니게임", id: 4 },
        { text: "가상게임", id: 5 },
        { text: "피싱게임", id: 6 },
        { text: "로터리", id: 7 },
        { text: "경기결과", id: 8 },
        { text: "라이브영상", id: 9 },
        { text: "게시판", id: 10 },
        { text: "고객센터", id: 11, path: "/cscenter/contact" },
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
        <div className="-ml-4px flex items-center w-104px h-40px bg-gradient-to-br from-blue-gradLight to-blue-gradDark rounded-full space-x-10px shadow-inner p-4px shadow-plain2">
            <div className="h-32px w-32px bg-white rounded-full flex items-center justify-center">
                <img className="" src={country === "KR" ? Koreaflag : UKflag} alt="flag"></img>
            </div>
            <label className="font-spoqaBold text-white cursor-pointer pt-px">{country}</label>
            <DropdownArrow isWhite isOpen={isCountryOpen}/>
        </div>
    )

    const WalletButton = (
        <div className="flex items-center space-x-10px h-40px">
            <div className="flex flex-col items-end -space-y-6px">
                <div className="">
                    <label className="text-blue-r2087f0 cursor-pointer font-spoqaMedium mr-3px">₩</label>
                    <label className="text-blue-r2087f0 cursor-pointer font-roboto">100,000</label>
                    <label className="text-blue-r2087f0 cursor-pointer font-spoqaMedium">원</label>
                </div>
                <label className="text-orange-ff7e00 cursor-pointer font-roboto">12,500 P</label>
            </div>
            <DropdownArrow isOpen={isWalletOpen}/>
        </div>
    )
    
    const profileButton = (
        <div className="flex items-center justify-center space-x-10px">
            <div className="relative flex items-center justify-center h-40px w-40px rounded-full bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2">
                <img className="mt-2px ml-2px" src={PersonIcon} alt="person" />
            </div>
            <DropdownArrow isOpen={isProfileOpen}/>
        </div>  
    )

    const LoginButton = (
        <button className="flex items-center justify-center text-white w-104px h-40px rounded-full bg-gradient-to-br from-blue-gradLight to-blue-gradDark text-16px font-spoqaBold shadow-plain2 pt-px">로그인</button>
    )

    const SignupButton = (
        <button className="flex items-center justify-center text-white w-104px h-40px rounded-full bg-gradient-to-br from-blue-darkGradLight to-blue-darkGradDark text-16px font-spoqaBold shadow-plain2 pt-px">회원가입</button>
    )

    const InboxButton = (
        <button onClick={() => history.push("/mypage/inbox")} className="relative flex items-center justify-center text-white h-40px w-40px rounded-full bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2">
            <img className="ml-2px mt-2px" src={InboxIcon} alt="inbox_icon" />
            <div className="absolute flex items-center justify-center w-20px h-20px bg-red-notification top-0 right-0 -mr-6px -mt-3px rounded-full shadow-plain6">
                <label className="text-12px font-roboto mt-2px ml-px">1</label>
            </div>
        </button>
    )

    return (
        <div className="limit:w-full w-1920 z-20">
            <header className="flex items-center justify-between h-60px px-10px shadow-plain bg-white">
                <div className="flex items-center flex-shrink-0">
                    <img className="w-130px object-contain mb-2 mr-10px cursor-pointer" src={Logo} alt="logo" onClick={() => history.push('/')} />
                    <TabsList items={tabsArray} />
                </div>
                
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
                    <div className="flex space-x-3 items-center flex-shrink-0">
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

            </header>
            <NavbarHover selection={hoveredTab} setHoveredTab={setHoveredTab}/>
        </div>
    )
}

export default Navbar
