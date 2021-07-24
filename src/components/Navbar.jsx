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

const Navbar = ({ isAuthenticated, setAuth }) => {

    const [selectedTab, setSelectedTab] = useState()
    const [hoveredTab, setHoveredTab] = useState()
    const [country, setCountry] = useState("KR")
    const [isProfileOpen, setProfileOpen] = useState()
    const [isWalletOpen, setWalletOpen] = useState()
    const [isCountryOpen, setCountryOpen] = useState()

    const tabClass = "text-gray-text hover:text-blue-highlight relative flex flex-col items-center justify-center h-16 px-10px font-bold cursor-pointer"
    const selectedTabClass = "relative flex flex-col items-center justify-center h-16 px-10px font-bold cursor-pointer text-blue-highlight cursor-pointer"
    const lineClass = "absolute bottom-0 h-1 w-full bg-clear"
    const selectedLineClass = "absolute bottom-0 h-1 w-full bg-blue-highlight"
    
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
        { text: "고객센터", id: 11 },
    ];

    function TabsList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                className={selectedTab === item.id ? selectedTabClass : tabClass} 
                onClick={() => setSelectedTab(item.id)}
                onMouseOver={() => {
                    setHoveredTab(item.id)
                    setSelectedTab(item.id)
                }}
            >
                <label className="cursor-pointer">{item.text}</label>
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
        <div className="flex items-center w-100px h-40px bg-gradient-to-br from-blue-gradLight to-blue-gradDark rounded-full space-x-10px shadow-inner">
            <div className="h-34px w-34px ml-4px bg-white rounded-full flex items-center justify-center">
                <img className="h-auto w-10 bg-white rounded-full flex items-center justify-center" src={country === "KR" ? Koreaflag : UKflag} alt="flag"></img>
            </div>
            <label className="font-bold text-sm text-white cursor-pointer">{country}</label>
            <DropdownArrow isWhite isOpen={isCountryOpen}/>
        </div>
    )

    const WalletButton = (
        <div className="flex items-center space-x-10px h-40px">
            <div className="flex flex-col items-end -space-y-1">
                <label className="text-blue-500 font-medium cursor-pointer">₩ 100,000 원</label>
                <label className="text-yellow-500 font-medium cursor-pointer">12,500 P</label>
            </div>
            <DropdownArrow isOpen={isWalletOpen}/>
        </div>
    )
    
    const profileButton = (
        <div className="flex items-center justify-center space-x-10px">
            <div className="relative flex items-center justify-center h-40px w-40px rounded-full bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-inner">
                <img className="" src={PersonIcon} alt="person" />
            </div>
            <DropdownArrow isOpen={isProfileOpen}/>
        </div>  
    )

    const LoginButton = (
        <button className="flex items-center justify-center text-white font-bold w-100px h-40px rounded-full bg-gradient-to-br from-blue-gradLight to-blue-gradDark text-sm">로그인</button>
    )

    const SignupButton = (
        <button className="flex items-center justify-center text-white font-bold w-100px h-40px rounded-full bg-gradient-to-br from-blue-darkGradLight to-blue-darkGradDark text-sm">회원가입</button>
    )

    const InboxButton = (
        <button className="relative flex items-center justify-center text-white h-40px w-40px rounded-full bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-inner">
            <img src={InboxIcon} alt="inbox_icon" />
            <div className="absolute flex items-center justify-center w-20px h-20px bg-red-notification top-0 right-0 -mr-1 -mt-1 rounded-full shadow-2xl">
                <label className="text-sm">1</label>
            </div>
        </button>
    )

    return (
        <div className="w-1920">
            <header className="flex items-center justify-between h-6-px px-10px shadow-plain bg-white">
                <div className="flex items-center flex-shrink-0">
                    <img className="h-8 mb-2 mr-10px cursor-pointer" src={Logo} alt="logo" />
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
                        <PopupControls buttonChild={LoginButton}>
                            <LoginPopup setAuth={setAuth} />
                        </PopupControls>  
                        {/* BREAK */}         
                        <PopupControls buttonChild={SignupButton}>
                            <SignupPopup setAuth={setAuth} />
                        </PopupControls>           
                        {/* BREAK */}
                        <DropDownControls buttonChild={CountryButton}>
                            <div className="mt-4"><CountryDropDown setCountry={setCountry} country={country} /></div>
                        </DropDownControls>
                    </div>
                )}

            </header>
            <NavbarHover selection={hoveredTab} setHoveredTab={setHoveredTab} setSelectedTab={setSelectedTab}/>
        </div>
    )
}

export default Navbar
