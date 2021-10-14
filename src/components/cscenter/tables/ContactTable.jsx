import React from 'react'
import { useHistory } from 'react-router';
import MailIcon from '../../../images/myPage/mail.png'
import MailOpenedIcon from '../../../images/myPage/mail_opened.png'

const ContactTable = ({
    array
}) => {

    const history = useHistory();

    function InboxList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                className={`${
                    item.isRead === false ? "bg-gray-e8eff6" :
                    item.id % 2 === 0 ? "bg-gray-fdfdfd" : "bg-gray-f8f9fb"
                } font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px w-full border-b border-gray-dddddd`}
                onClick={() => history.push(item.path)}
            >
                <div className="flex items-center font-spoqaBold text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd px-54px">        

                    <div className="w-54px flex justify-center">
                        <img src={item.isRead === true ? MailOpenedIcon : MailIcon} alt=""/>
                    </div>

                    <div className="w-98px flex justify-center">
                        <div 
                            style={{backgroundColor: item.isRead === true ? "#dfebf7" : "#0056a6", color: item.isRead === true ? "#4b87bf" : "#ffffff"}}
                            className={`w-69px h-29px rounded-full font-spoqaMedium text-14px tracking-tight flex items-center justify-center`} 
                        >
                            <p>{item.isRead === true ? "답변완료" : "답변대기"}</p>
                        </div>
                    </div>

                    <div className={`${item.isRead === true ? "text-gray-r7b7b7b" : "text-gray-r454545"} font-spoqaMedium w-114px flex justify-center`}>
                        {item.category}
                    </div>

                    <div style={{width: "427px"}} className={`${item.isRead === true ? "text-gray-r7b7b7b" : "text-gray-r454545"} font-spoqaMedium flex items-center space-x-10px`}>
                        <p>{item.text}</p>
                        {item.isRead === false && (
                            <div className={`w-17px h-17px bg-red-notification rounded-full text-12px text-white flex items-center justify-center font-roboto ${item.id === 6 && "pr-px"}`}>
                                N
                            </div>
                        )}
                    </div>

                    <div className={`${item.isRead === true ? "text-gray-r7b7b7b" : "text-gray-r454545"} w-138px flex font-spoqa justify-center text-center`}>{item.time}</div>
                    <div className="ml-33px w-70px flex items-center justify-center">
                        <div className={`${item.isRead === false ? "bg-gray-r454545" : "bg-gray-a2a2a2" } w-49px h-29px flex justify-center rounded-full text-white font-spoqaMedium items-center pt-2px`}>
                            삭제
                        </div>
                    </div>
                    
                </div>
            </button>
        ));
    }

    return (
        <div style={{borderRadius:"1em"}} className="w-full shadow-subNavbar overflow-hidden">

            <div className="flex items-center bg-gray-fafafa font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd px-54px">        
                <div className="w-54px flex justify-center">확인</div>
                <div className="w-98px flex justify-center">상태</div>
                <div className="w-114px flex justify-center">구분</div>
                <div style={{width: "427px"}} className="flex justify-center">제목</div>
                <div className="w-138px flex justify-center">보낸시간</div>
                <div className="ml-33px w-70px flex justify-center">삭제</div>
            </div>

            <InboxList items={array} />
        </div>
    )
}

export default ContactTable
