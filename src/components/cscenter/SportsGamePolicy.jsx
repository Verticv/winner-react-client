import HorizontalMenu from 'components/horizontalMenus/HorizontalMenu';
import MyPageTitle from 'components/myPage/MyPageTitle'
import React, { useState } from 'react'
import Icon1 from '../../images/cscenter/sportsPolicy/1.png'
import Icon2 from '../../images/cscenter/sportsPolicy/2.png'
import Icon3 from '../../images/cscenter/sportsPolicy/3.png'
import Icon4 from '../../images/cscenter/sportsPolicy/4.png'
import Icon5 from '../../images/cscenter/sportsPolicy/5.png'
import Icon6 from '../../images/cscenter/sportsPolicy/6.png'
import Icon7 from '../../images/cscenter/sportsPolicy/7.png'
import Icon8 from '../../images/cscenter/sportsPolicy/8.png'
import Icon9 from '../../images/cscenter/sportsPolicy/9.png'
import SportsGamePolicyTable1 from './tables/SportsGamePolicyTable1';
import SportsGamePolicyTable2 from './tables/SportsGamePolicyTable2';

const SportsGamePolicy = () => {

    const tabsArray = [
        { text: "축구", icon: Icon1, id: 0 },
        { text: "농구", icon: Icon2, id: 1 },
        { text: "야구", icon: Icon3, id: 2 },
        { text: "배구", icon: Icon4, id: 3 },
        { text: "테니스", icon: Icon5, id: 4 },
        { text: "하키", icon: Icon6, id: 5 },
        { text: "핸드볼", icon: Icon7, id: 6 },
        { text: "미식축구", icon: Icon8, id: 7 },
        { text: "e-스포츠", icon: Icon9, id: 8 }
    ];

    const [selectedTab, setSelectedTab] = useState(0)
    
    return (
        <div>
            <MyPageTitle title="스포츠게임" />


            <div className="mt-20px" />
            <HorizontalMenu itemsArray={tabsArray} isState={selectedTab} setState={setSelectedTab} />


            <div className=" mt-29px w-full flex h-16px items-center justify-center text-16px tracking-tight font-spoqaMedium text-gray-r454545">
                모든 프로축구는 해당 리그의 공식협회가 인정하는 경기 결과대로 반영됩니다.
            </div>

            <div className="mt-27px" />
            <SportsGamePolicyTable1 />

            <div className="mt-20px" />
            <SportsGamePolicyTable2 />

            <div className="mt-60px" />

        </div>
    )
}

export default SportsGamePolicy
