import React from 'react'
import SpeakerIcon from '../images/speaker.png'

const NoticeBanner = () => {
    return (
        <div className="flex items-center h-8 w-1920 bg-blue-banner px-10px space-x-4">
            <img src={SpeakerIcon} alt="speakerIcon" />
            <span className="text-sm text-white">※ 필수!! 입금하시기전 계좌문의 후 입금해 주시기 바랍니다.</span>
        </div>
    )
}

export default NoticeBanner
