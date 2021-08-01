import React from 'react'
import WinnerLogo from '../images/gray/winner_dark_gray_logo.png'
import KakaoLogo from '../images/footer/kakao.png'
import TelegramLogo from '../images/footer/telegram.png'
import Adult from '../images/footer/adult_icon.png'
import ClickBuy from '../images/footer/click_buy.png'
import Click2Pay from '../images/footer/click2pay.png'
import GameCare from '../images/footer/game_care.png'
import MasterCard from '../images/footer/master_card.png'
import Much from '../images/footer/much.png'
import Net from '../images/footer/net.png'
import PaySafe from '../images/footer/pay_safe.png'
import Skrill from '../images/footer/skrill.png'
import Visa from '../images/footer/visa.png'


const Footer = () => {

    const buttonClass = "text-gray-r8f8f8f hover:text-gray-700 text-left text-14px font-spoqa"

    const logosArray = [
        { logo: Adult, id: 0 },
        { logo: Much, id: 1 },
        { logo: ClickBuy, id: 2 },
        { logo: Click2Pay, id: 3 },
        { logo: GameCare, id: 4 },
        { logo: Visa, id: 5 },
        { logo: MasterCard, id: 6 },
        { logo: PaySafe, id: 7 },
        { logo: Skrill, id: 8 },
        { logo: Net, id: 9 },
    ];

    function LogosList({ items }) {
        return items.map(item => (
            <div key={item.id} className={`flex items-center justify-center w-146px h-40px bg-gray-d2d2d2 rounded ${item.id === 0 ? "py-2" : "px-3 py-3"}`}><img className="object-contain h-full" src={item.logo} alt="logo" /></div>
        ));
    }

    return (
        <div className="flex flex-col items-start limit:items-center bg-gray-ececec w-screen h-190px pt-30px">
            <div className="flex w-default h-90px">
                {/* BREAK */}
                <div className="flex flex-col space-y-20px pr-24px flex-shrink-0">
                    <img className="w-130px h-32px object-contain" src={WinnerLogo} alt="winner logo" />
                    <div className="grid grid-cols-3 w-265px">
                        <button className={buttonClass}>문의하기</button>
                        <button className={buttonClass}>공지사항</button>
                        <button className={buttonClass}>자주하는질문</button>
                        <button className={buttonClass}>베팅규정</button>
                        <button className={buttonClass}>경기결과</button>
                        <button className={buttonClass}>게시판</button>
                    </div>
                </div>
                {/* BREAK */}
                <div className="flex flex-col items-center justify-start border-r border-l border-gray-300 flex-shrink-0 pl-20px pr-30px">
                    <div className="flex items-center space-x-2 ">
                        <img className="object-contain h-50px" src={KakaoLogo} alt="kakao-icon" />
                        <span className="font-bold text-red-900 font-roboto text-12px">test1234</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img className="object-contain h-50px" src={TelegramLogo} alt="kakao-icon" />
                        <span className="font-bold text-blue-400 font-roboto text-12px">test1234</span>
                    </div>
                </div>
                {/* BREAK */}
                <div className="flex items-center justify-end w-full pl-4">
                    <div className="grid grid-cols-5 gap-10px">
                        <LogosList items={logosArray} />
                    </div>
                </div>
                {/* BREAK */}
                
            </div>
            <div className="w-screen flex items-center justify-center mt-30px">
                <span className="font-medium font-roboto text-12px text-gray-a7a7a7">Copyright © WINNER. All rights reserved. </span>
            </div>
        </div>
    )
}

export default Footer
