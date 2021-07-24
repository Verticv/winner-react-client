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

    const buttonClass = "font-medium text-gray-500 hover:text-gray-700 text-left text-sm"

    const logosArray = [
        { logo: Adult, id: 0 },
        { logo: ClickBuy, id: 1 },
        { logo: Click2Pay, id: 2 },
        { logo: GameCare, id: 3 },
        { logo: MasterCard, id: 4 },
        { logo: Much, id: 5 },
        { logo: Net, id: 6 },
        { logo: PaySafe, id: 7 },
        { logo: Skrill, id: 8 },
        { logo: Visa, id: 9 }      
    ];

    function LogosList({ items }) {
        return items.map(item => (
            <div key={item.id} className={`flex items-center justify-center h-12 bg-gray-300 rounded ${item.id === 0 ? "py-2" : "px-3 py-4"}`}><img className="object-contain h-full" src={item.logo} alt="logo" /></div>
        ));
    }

    return (
        <div className="flex flex-col items-start limit:items-center justify-center bg-gray-200 w-screen">
            <div className="flex w-default px-2 py-12">
                {/* BREAK */}
                <div className="flex flex-col space-y-8 pr-12 flex-shrink-0 w-1/4 ">
                    <img className="w-1/2 object-contain" src={WinnerLogo} alt="winner logo" />
                    <div className="grid grid-cols-3 gap-3">
                        <button className={buttonClass}>문의하기</button>
                        <button className={buttonClass}>공지사항</button>
                        <button className={buttonClass}>자주하는질문</button>
                        <button className={buttonClass}>베팅규정</button>
                        <button className={buttonClass}>경기결과</button>
                        <button className={buttonClass}>게시판</button>
                    </div>
                </div>
                {/* BREAK */}
                <div className="flex flex-col items-center justify-start space-y-2 border-r-2 border-l-2 border-gray-300 flex-shrink-0 px-3">
                    <div className="flex items-center space-x-2 pr-3">
                        <img className="object-contain h-full" src={KakaoLogo} alt="kakao-icon" />
                        <span className="font-semibold text-red-900">test1234</span>
                    </div>
                    <div className="flex items-center space-x-2 pr-3">
                        <img src={TelegramLogo} alt="kakao-icon" />
                        <span className="font-semibold text-blue-400">test1234</span>
                    </div>
                </div>
                {/* BREAK */}
                <div className="flex items-start w-full px-4">
                    <div className="grid grid-cols-5 gap-2 w-full items-center">
                        <LogosList items={logosArray} />
                    </div>
                </div>
                {/* BREAK */}
                
            </div>
            <div className="w-screen flex items-center justify-center">
                <span className="pb-12 text-bold text-gray-400">Copyright © WINNER. All rights reserved. </span>
            </div>
        </div>
    )
}

export default Footer
