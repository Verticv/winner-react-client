import React, { useState } from 'react'
import Logo from '../images/logo.png'
import flag from '../images/korea_flag.png'

const Navbar = () => {

    const [selectedTab, setSelectedTab] = useState()

    const tabClass = "text-gray-500 hover:text-blue-400 relative flex flex-col items-center justify-center h-16 w-24 font-bold cursor-pointer"
    const selectedTabClass = "relative flex flex-col items-center justify-center h-16 w-24 font-bold cursor-pointer text-blue-400 cursor-pointer"
    const lineClass = "absolute bottom-0 h-1 w-full bg-clear"
    const selectedLineClass = "absolute bottom-0 h-1 w-full bg-blue-400"
    
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
            >
                <label className="cursor-pointer">{item.text}</label>
                <div className={selectedTab === item.id ? selectedLineClass : lineClass}></div>
            </button>
        ));
    }
    
    const DropdownButton = ({color}) => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill={color}>
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
    )

    return (
        <header className="flex items-center justify-between border-b h-16 px-4 shadow-lg bg-white">
            <div className="flex items-center">
                <img className="h-8 mr-4 mb-2 cursor-pointer" src={Logo} alt="logo" />
                <TabsList items={tabsArray} />
            </div>
            
            <div className="flex space-x-6 items-center flex-shrink-0">
                {/* BREAK */}
                <button className="flex items-center justify-center space-x-1">
                    <div className="relative flex items-center justify-center h-12 w-12 rounded-full bg-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 z-20" viewBox="0 0 20 20" fill="#1e81e6">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                        </svg>
                        <div className="absolute bg-white w-8 h-8 z-10 rounded-full"></div>
                    </div>
                    <DropdownButton color="gray"/>
                </button>   
                {/* BREAK */}
                <button className="flex items-center space-x-2">
                    <div className="flex flex-col items-end -space-y-1">
                        <label className="text-blue-500 font-medium cursor-pointer">₩ 100,000 원</label>
                        <label className="text-yellow-500 font-medium cursor-pointer">12,500 P</label>
                    </div>
                    <DropdownButton color="gray"/>
                </button>
                {/* BREAK */}
                <button className="relative flex items-center justify-center text-white h-12 w-12 rounded-full bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <div className="absolute flex items-center justify-center w-5 h-5 bg-red-500 top-0 right-0 -mr-1 -mt-1 rounded-full shadow-2xl">
                        <label>1</label>
                    </div>
                </button>
                {/* BREAK */}
                <button className="flex items-center p-1 h-12 bg-blue-500 rounded-full space-x-4">
                    <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                        <img className="h-auto w-10 bg-white rounded-full flex items-center justify-center" src={flag} alt="flag"></img>
                    </div>
                    <label className="font-bold text-white cursor-pointer">KR</label>
                    <DropdownButton color="white"/>
                </button>

            </div>
               

        </header>
    )
}

export default Navbar
