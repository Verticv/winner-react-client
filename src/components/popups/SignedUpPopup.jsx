import React from 'react'
import SignedUpIcon from '../../images/signed_up_icon.png'
import SignedUpContent from '../../images/signed_up_content.png'

const SignedUpPopup = ({setToLogin}) => {
    return (
        <div className="relative w-840px h-680px bg-white rounded-xl shadow-xl shadow-popup">
            <div className="absolute w-840px -mt-79px flex justify-center">
                <div className="flex items-center justify-center h-158px w-158px rounded-full">
                    <img src={SignedUpIcon} alt="login_icon"/>
                </div>
            </div>
            {/* BREAK */}
            <div className="w-full h-full flex flex-col items-center px-24 pt-112px">
                {/* BREAK */}
                <div className="flex flex-col items-center justify-center">
                    <label className="text-30px text-gray-r393e41 font-spoqaBold">가입 신청이 완료 되었습니다.</label>
                    <div className="flex text-gray-r393e41 font-spoqaMedium text-30px space-x-2 -mt-4px">
                        <label>관리자</label>
                        <label className="text-blue-r1ca7ec font-spoqaBold">승인 대기중</label>
                        <label>입니다.</label>
                    </div>
                </div>
                {/* BREAK */}
                <div className="text-gray-r393e41 text-20px font-spoqaMedium flex flex-col items-center justify-center pt-26px tracking-tighter	">
                    <span>관리자 승인 후 로그인 하시면 정상적으로 서비스 이용이 가능합니다.</span>
                    <span className="-mt-6px">깨끗하고 안전한 운영을 자랑합니다. </span>
                </div>
                {/* BREAK */}
                <div className="py-55px mb-4px">
                    <img className="h-138px object-contain" src={SignedUpContent} alt="content"/>
                </div>
                {/* BREAK */}
                <button className="w-480px h-74px rounded-md bg-gradient-to-r from-blue-gradLight to-blue-gradDark text-27px font-spoqaMedium text-white" onClick={() => setToLogin(true)}>로그인</button>
            </div>
        </div>
    )
}

export default SignedUpPopup
