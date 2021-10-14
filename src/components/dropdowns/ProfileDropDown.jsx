import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
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
    
    const history = useHistory();

    const [selectedTab, setSelectedTab] = useState()

    const menuArray = [
        { icon: MyPageIcon, iconHighlight: MyPageIconHighlight, text: "마이페이지", id: 0, path: "/mypage/bet-history" },
        { icon: LinkIcon, iconHighlight: LinkIconHighlight, text: "총판페이지", id: 1, path: "/distributor-page" },
        { icon: AttendanceIcon, iconHighlight: AttendanceIconHighlight, text: "출석부", id: 2, path: "/attendance" },
        { icon: ContactIcon, iconHighlight: ContactIconHighlight, text: "문의하기", id: 3, path: "/cscenter/contact/all" },
        { icon: PolicyIcon, iconHighlight: PolicyIconHighlight, text: "베팅규정", id: 4, path: "/cscenter/policy/sportsgame/soccer" },
        { icon: LogoutIcon, iconHighlight: LogoutIconHighlight, text: "로그아웃", id: 5 },
    ];

    function MenuList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                className={`${selectedTab === item.id ? "bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2" : "bg-white"} flex w-full items-center p-4px h-40px rounded-full`} 
                onPointerDown={(e) => setSelectedTab(item.id)}
                onPointerUp={() => {
                    setSelectedTab(false)
                    if (item.id === 5) setAuth(false)
                    history.push(item.path)
                }}
            >
                <div className={`${selectedTab === item.id && "shadow-plain3"} h-32px w-32px bg-white rounded-full flex items-center justify-center flex-shrink-0`} >
                    <img className="h-auto w-10 bg-white rounded-full flex items-center justify-center" src={selectedTab === item.id ? item.iconHighlight : item.icon} alt="icon"></img>
                </div>
                <div className="w-full flex justify-center mr-3">                
                    <label className={`${selectedTab === item.id ? "text-white" : "text-gray-subNavbar"} font-spoqaBold text-14px cursor-pointer tracking-tight`}>{item.text}</label>
                </div>
            </button>
        ));
    }

    return (
        <div className="relative flex flex-col items-center bg-white shadow-plain rounded-3xl w-224px h-388px p-2px -mt-5px -mr-72px">
            <div className="absolute top-0 -mt-2 ml-2 w-4 overflow-hidden inline-block">
                <div className="h-2 w-2 bg-white rotate-45 transform origin-bottom-left shadow"></div>
            </div>
            <div className="w-full h-128px bg-blue-e8f3fd rounded-3xl flex items-center flex-col pt-24px">
                <img className="h-46px object-none ml-6px" src={LevelOne} alt="level_one"/>
                <span className="text-gray-r393e41 text-12px font-roboto font-bold">LEVEL1</span>
                <div className="tracking-tight">
                    <span className="text-blue-r1ca7ec font-spoqaBold text-16px">마이마이프로틴화이팅</span>
                    <span className="text-gray-a4b1b4 font-spoqaBold text-16px">님</span>
                </div>
            </div>
            <div className="w-full space-y-px mt-10px">
                <MenuList items={menuArray} />
            </div>
        </div>
    )
}

export default ProfileDropDown
