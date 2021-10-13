import PopupControls from 'components/popups/PopupControls';
import React from 'react'
import LiveCasinoHistoryDetailPopup from '../popups/LiveCasinoHistoryDetailPopup';

const MinigameBetHistoryPowerballTable = ({array, checkedState, setCheckedState, isPopupOpen, setPopupOpen}) => {

    function Cells({ items }) {

        const detailButton = (
            <button 
                style={{height:"29px", width: "73px", backgroundColor:"#e9441d"}} 
                className="rounded-full text-white font-spoqaMedium text-14px tracking-tight pt-2px"
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
            <tr className="bg-gray-fefefe rounded-3xl font-spoqa text-14px tracking-tight text-gray-r585858 h-56px w-full border-b border-gray-dddddd">
                <td style={{width: "58px"}} className="ml-20px text-center">
                    <input
                        type="checkbox"
                        checked={checkedState[item.id]}
                        onChange={() => handleOnChange(item.id)}
                    />
                </td>
                <td style={{width: "86px"}} className="font-robotoRegular text-center">{item.number}</td>
                <td style={{width: "111px"}} className="font-robotoRegular text-center">{item.time}</td>
                <td style={{width: "119px"}} className="text-center">{item.name}</td>
                <td style={{width: "84px"}} className="text-center">{item.history}</td>
                <td style={{width: "108px"}} className="font-robotoRegular text-right">{item.amount}</td>
                <td style={{width: "79px"}} className="text-center">{item.percentage}</td>
                <td style={{width: "123px", color: item.profit.includes("+") ? "#d52e2e" : "#585858"}} className="font-robotoRegular text-right">{item.profit}</td>
                <td style={{width: "54px", color: item.status === "승" ? "#d52e2e" : "#585858"}} className="text-center">{item.status}</td>
                <td style={{width: "107px"}} className="text-center pr-17px">
                    <PopupControls buttonChild={detailButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                        <LiveCasinoHistoryDetailPopup setPopupOpen={setPopupOpen} />
                    </PopupControls> 
                </td>
            </tr>
        ))
    }

    return (
        <table className="shadow-subNavbar rounded-3xl overflow-hidden w-full">
            <thead className="bg-gray-fafafa rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">
                <tr>
                    <td style={{width: "58px"}} className="ml-20px text-center">선택</td>
                    <td style={{width: "86px"}} className="text-center">베팅번호</td>
                    <td style={{width: "111px"}} className="text-center">베팅시간</td>
                    <td style={{width: "119px"}} className="text-center">게임구분</td>
                    <td style={{width: "84px"}} className="text-center">베팅내역</td>
                    <td style={{width: "108px"}} className="text-center">베팅금액</td>
                    <td style={{width: "79px"}} className="text-center">배당률</td>
                    <td style={{width: "123px"}} className="text-center">적중/손실금액</td>
                    <td style={{width: "54px"}} className="text-center">상태</td>
                    <td style={{width: "107px"}} className="text-center pr-17px">보기</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <Cells items={array} />
            </tbody>
        </table>      
    )
}

export default MinigameBetHistoryPowerballTable
