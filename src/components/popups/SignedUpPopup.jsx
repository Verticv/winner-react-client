import React from 'react'
import SignedUpIcon from '../../images/signed_up_icon.png'
import SignedUpContent from '../../images/signed_up_content.png'

const SignedUpPopup = ({setToLogin}) => {
    return (
        <div className="w-800px h-650px bg-white rounded-xl shadow-xl">
            <div className="absolute w-800px -mt-16 flex justify-center">
                <div className="relative flex items-center justify-center h-32 w-32 rounded-full bg-blue-400">
                    <img src={SignedUpIcon} alt="login_icon"/>
                </div>
            </div>
            {/* BREAK */}
            <div className="w-full h-full flex flex-col items-center justify-center px-24 space-y-10">
                {/* BREAK */}
                <div className="space-y-2 flex flex-col items-center justify-center">
                    <label className="text-3xl text-gray-700 font-bold">가입 신청이 완료 되었습니다.</label>
                    <div className="flex text-gray-700 text-3xl font-medium space-x-2">
                        <label>관리자</label>
                        <label className="text-blue-400 font-bold">승인 대기중</label>
                        <label>입니다.</label>
                    </div>
                </div>
                {/* BREAK */}
                <div className="text-gray-700 text-xl flex flex-col items-center justify-center font-semibold">
                    <span>관리자 승인 후 로그인 하시면 정상적으로 서비스 이용이 가능합니다.</span>
                    <span>깨끗하고 안전한 운영을 자랑합니다. </span>
                </div>
                {/* BREAK */}
                <div className="py-4">
                    <img src={SignedUpContent} alt="content"/>
                </div>
                {/* BREAK */}
                <button className="w-500px h-16 rounded-md bg-gradient-to-r from-blue-gradLight to-blue-gradDark text-xl" onClick={() => setToLogin(true)}>로그인</button>
            </div>
        </div>
    )
}

export default SignedUpPopup
