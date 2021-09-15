import MyPageTitle from 'components/myPage/MyPageTitle'
import React, { useState } from 'react'
import Icon1 from '../../images/myPage/betHistory/ico_1.png'
import Icon2 from '../../images/myPage/betHistory/ico_2.png'
import Icon3 from '../../images/myPage/betHistory/ico_3.png'
import Icon4 from '../../images/myPage/betHistory/ico_4.png'
import Icon5 from '../../images/myPage/betHistory/ico_5.png'
import Icon6 from '../../images/myPage/betHistory/ico_6.png'
import Icon7 from '../../images/myPage/betHistory/ico_7.png'
import Icon8 from '../../images/cscenter/8.png'
import Icon9 from '../../images/cscenter/9.png'
import Icon10 from '../../images/cscenter/10.png'
import HorizontalMenu from 'components/myPage/HorizontalMenu'
import ArrowDown from '../../images/myPage/leftMenu/arr_down.png'
import QIcon from '../../images/cscenter/q.png'

const Faq = () => {

    const tabsArray = [
        { text: "전체", icon: Icon1, id: 0 },
        { text: "라이브카지노", icon: Icon2, id: 1 },
        { text: "슬롯", icon: Icon3, id: 2 },
        { text: "스포츠", icon: Icon4, id: 3 },
        { text: "e-스포츠", icon: Icon5, id: 4 },
        { text: "미니게임", icon: Icon6, id: 5 },
        { text: "가상게임", icon: Icon7, id: 6 },
        { text: "충전/환전", icon: Icon8, id: 7 },
        { text: "베팅관련", icon: Icon9, id: 8 },
        { text: "기타", icon: Icon10, id: 9 },
    ];

    const questionArray = [
        { id: 0, type: "충전/환전", text: "첫, 매충 10% 포인트를 받으면 롤링을 어떻게 해야 환전가능한가요?" },
        { id: 1, type: "충전/환전", text: "1,000원 단위도 충전/환전 신청이 가능한가요?" },
        { id: 2, type: "충전/환전", text: "충전시 은행 입금자명이 달라도 처리가 가능한가요?" },
        { id: 3, type: "충전/환전", text: "출금(환전)시 예금주 변경 및 타명의 사용이 가능한가요?" },
        { id: 4, type: "베팅관련", text: "최소 베팅금액, 최대 베팅금액, 최대 적중한도 금액은 얼마인가요?" },
        { id: 5, type: "충전/환전", text: "충전&환전 처리 시간은 어느 정도 소요되나요?" },
        { id: 6, type: "베팅관련", text: "베팅 취소는 가능한가요?" },
        { id: 7, type: "스포츠북", text: "스포츠북 라이브 베팅 목록 중, 경기 도중에 베팅한 경기가 사라지는 경우 베팅한 내역은 어떻게 처리되나요?" },
        { id: 8, type: "기타", text: "Winner 홈페이지에 접속이 잘 되지 않거나 사용도중 에러가 발생하는데 어떻게 해야 하나요?" },
        { id: 9, type: "기타", text: "이 사이트는 안전한가요?" },
        { id: 10, type: "기타", text: "중복 IP 또는 본인 아이디를 공유하여 사용이 가능한가요?" },
    ]
    const [selectedTab, setSelectedTab] = useState(0)
    const [openedCell, setOpenedCell] = useState(0)

    const QuestionCell = ({type, text, cellId}) => (
        <>
            <button 
                style={{zIndex: 2}}
                className="bg-white relative rounded-full shadow-subNavbar w-full h-56px flex items-center px-20px justify-between mb-10px border z-20" 
                onClick={() => {
                    if (openedCell === cellId) {
                        setOpenedCell(null) 
                    } else {
                        setOpenedCell(cellId)
                    }
                }}
            >
                <img className="object-none" src={QIcon} alt="" />
                <div className="w-full h-full px-18px flex items-center space-x-9px"> 
                    <div 
                        style={{backgroundColor: "#8494a4", width: "89px"}} 
                        className="h-29px rounded-full flex items-center justify-center text-white text-14px font-spoqaMedium tracking-tight"
                    > 
                        {type}
                    </div>
                    <p className="font-spoqaMedium text-14px tracking-tight text-gray-r585858">{text}</p>
                </div>
                <img className={`${openedCell === cellId && "transform rotate-180"}`} src={openedCell === cellId ? ArrowDown : ArrowDown} alt="" />
            </button>
            {openedCell === cellId && (
                <div style={{height: "421px", zIndex: 1 }} className="w-full rounded-3xl bg-gray-fafafa -mt-64px z-0 mb-14px border border-gray-dddddd"></div>
            )}
        </>
    )

    function MenuList({ items }) {
        
        return items.map(item => (
            <QuestionCell type={item.type} text={item.text} cellId={item.id} />
        )
    )}

    return (
        <div>
            <MyPageTitle title="자주묻는질문" />

            <div className="relative w-full mt-20px">
                <HorizontalMenu itemsArray={tabsArray} isState={selectedTab} setState={setSelectedTab} />
            </div>

            <div className="mt-20px mb-90px">
                <MenuList items={questionArray} />
            </div>

        </div>
    )
}

export default Faq
