import PopupControls from 'components/popups/PopupControls';
import React from 'react'
import LiveCasinoHistoryDetailPopup from '../popups/LiveCasinoHistoryDetailPopup';

const MinigameBetHistoryPowerballTable = ({array, checkedState, setCheckedState, isPopupOpen, setPopupOpen}) => {

    function Cells({ items }) {

        const detailButton = (
            <button 
                style={{height:"29px", width: "73px", backgroundColor:"#e9441d"}} 
                className="rounded-full text-white font-spoqaMedium text-14px tracking-tight pt-2px hover:opacity-75"
            >
                상세보기
            </button>
        ) 

        const handleOnChange = (position) => {
            const updatedCheckedState = checkedState.map((item, index) =>
              index === position ? !item : item
            );
            setCheckedState(updatedCheckedState);
        }; 

        return items.map(item => (
            <div className="flex items-center bg-gray-fefefe font-spoqa text-14px tracking-tight text-gray-r585858 h-56px w-full border-b border-gray-dddddd">
                <div style={{width: "58px"}} className="ml-20px text-center">
                    <input
                        type="checkbox"
                        checked={checkedState[item.id]}
                        onChange={() => handleOnChange(item.id)}
                    />
                </div>
                <div style={{width: "86px"}} className="font-robotoRegular text-center">{item.number}</div>
                <div style={{width: "160px"}} className="font-robotoRegular text-center">{item.time}</div>
                <div style={{width: "168px"}} className="text-center">{item.name}</div>
                <div style={{width: "84px"}} className="text-center">{item.history}</div>
                <div style={{width: "108px"}} className="font-robotoRegular text-right">{item.amount}</div>
                <div style={{width: "79px"}} className="text-center">{item.percentage}</div>
                <div style={{width: "123px", color: item.profit.includes("+") ? "#d52e2e" : "#585858"}} className="font-robotoRegular text-right">{item.profit}</div>
                <div style={{width: "54px", color: item.status === "승" ? "#d52e2e" : "#585858"}} className="text-center">{item.status}</div>
                <div style={{width: "107px"}} className="text-center pr-17px">
                    <PopupControls buttonChild={detailButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                        <LiveCasinoHistoryDetailPopup setPopupOpen={setPopupOpen} />
                    </PopupControls> 
                </div>
            </div>
        ))
    }

    return (
        <div style={{borderRadius: "1em"}} className="shadow-subNavbar overflow-hidden w-full">
            <div className="flex items-center bg-gray-fafafa font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">
                <div style={{width: "58px"}} className="ml-20px text-center">선택</div>
                <div style={{width: "86px"}} className="text-center">베팅번호</div>
                <div style={{width: "160px"}} className="text-center">베팅시간</div>
                <div style={{width: "168px"}} className="text-center">게임구분</div>
                <div style={{width: "84px"}} className="text-center">베팅내역</div>
                <div style={{width: "108px"}} className="text-center">베팅금액</div>
                <div style={{width: "79px"}} className="text-center">배당률</div>
                <div style={{width: "123px"}} className="text-center">적중/손실금액</div>
                <div style={{width: "54px"}} className="text-center">상태</div>
                <div style={{width: "107px"}} className="text-center pr-17px">보기</div>
            </div>
            <div className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <Cells items={array} />
            </div>
        </div>      
    )
}

export default MinigameBetHistoryPowerballTable
