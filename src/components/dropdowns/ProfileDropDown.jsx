import React, { useState } from 'react'
import LevelOne from '../../images/profile/level_one.png'
import MyPageIcon from '../../images/profile/my_page_gradient.png'
import LinkIcon from '../../images/profile/link_gradient.png'
import AttendanceIcon from '../../images/profile/attendance_gradient.png'
import ContactIcon from '../../images/profile/contact_gradient.png'
import PolicyIcon from '../../images/profile/policy_gradient.png'
import LogoutIcon from '../../images/profile/logout_gradient.png'
import MyPageIconHighlight from '../../images/profile/my_page_highlight.png'
import LinkIconHighlight from '../../images/profile/link_highlight.png'
import AttendanceIconHighlight from '../../images/profile/attendance_highlight.png'
import ContactIconHighlight from '../../images/profile/contact_highlight.png'
import PolicyIconHighlight from '../../images/profile/policy_highlight.png'
import LogoutIconHighlight from '../../images/profile/logout_highlight.png'

const ProfileDropDown = ({setAuth}) => {

    const [selectedTab, setSelectedTab] = useState()

    const menuArray = [
        { icon: MyPageIcon, iconHighlight: MyPageIconHighlight, text: "마이페이지", id: 0 },
        { icon: LinkIcon, iconHighlight: LinkIconHighlight, text: "총판페이지", id: 1 },
        { icon: AttendanceIcon, iconHighlight: AttendanceIconHighlight, text: "출석부", id: 2 },
        { icon: ContactIcon, iconHighlight: ContactIconHighlight, text: "문의하기", id: 3 },
        { icon: PolicyIcon, iconHighlight: PolicyIconHighlight, text: "베팅규정", id: 4 },
        { icon: LogoutIcon, iconHighlight: LogoutIconHighlight, text: "로그아웃", id: 5 },
    ];

    function MenuList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                className={`${selectedTab === item.id ? "bg-blue-500 shadow-inner" : "bg-white"} flex w-full items-center p-1 h-12 rounded-full`} 
                onClick={() => 
                    {                 
                        setSelectedTab(item.id)       
                        if (item.id === 5) setAuth(false)
                    }}
            >
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 border">
                    <img className="h-auto w-10 bg-white rounded-full flex items-center justify-center" src={selectedTab === item.id ? item.iconHighlight : item.icon} alt="icon"></img>
                </div>
                <div className="w-full flex justify-center mr-3">                
                    <label className={`${selectedTab === item.id ? "text-white" : "text-gray-500"} font-bold cursor-pointer`}>{item.text}</label>
                </div>
            </button>
        ));
    }

    return (
        <div className="bg-white shadow-plain rounded-3xl bg-white w-64 p-1 space-y-1">
            <div className="w-full h-36 bg-blue-100 rounded-3xl mb-2 flex items-center justify-center flex-col">
                <img src={LevelOne} alt="level_one"/>
                <span className="text-gray-700 font-bold text-xs">LEVEL 1</span>
                <div className="mt-1">
                    <span className="text-blue-400 font-bold">마이마이프로틴화이팅</span>
                    <span className="text-gray-700 font-bold ml-1">님</span>
                </div>
            </div>
            <MenuList items={menuArray} />
        </div>
    )
}

export default ProfileDropDown
