import React from 'react'
import SpeakerIcon from '../images/speaker.png'
import './NoticeBanner.css'

const NoticeBanner = () => {
    return (
        <div className="flex items-center h-8 w-full bg-blue-banner pr-10px space-x-4">
            <div className="bg-blue-banner h-8 flex items-center justify-center w-10 z-20"><img className='h-16px' src={SpeakerIcon} alt="speakerIcon"/></div>
            
            <div className="ml-12">
                <span id="banner" className="font-spoqa font-normal text-14px text-white z-10">※ 필수!! 입금하시기전 계좌문의 후 입금해 주시기 바랍니다.</span>
            </div>
        </div>
    )
}

export default NoticeBanner
