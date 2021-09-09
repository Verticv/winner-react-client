import React from 'react'
import { useHistory } from 'react-router-dom';
import HomeIcon from '../../images/myPage/home_icon.png'
import RightArrow from '../../images/myPage/right_arrow.png'

const DirectoryComponent = ({
    branch1 = "마이페이지",
    branch2 = null, 
    branch3 = null,
    branch4 = null,
    setSelectedTab = null,
    setSelectedSubTab = null,
    mainPath = ""
}) => {

    const history = useHistory();

    function branch1Clicked(branch1) {
        if (branch1 === "마이페이지" ) {
            history.push("/mypage/bet-history")
            setSelectedTab("/mypage/bet-history")
        } else if (branch1 === "출석부") {
            history.push("/attendance")
            setSelectedTab("/attendance")
        }
    }

    return (
        <div className="flex items-center h-22px w-default my-20px space-x-10px">
            <img className="object-none cursor-pointer" src={HomeIcon} alt="" onClick={() => history.push("/")} />
            <img className="object-none cursor-none" src={RightArrow} alt=""/>
            <span 
                className="font-spoqaBold text-13px text-gray-r7c7c7c tracking-tight cursor-pointer"
                onClick={() => {branch1Clicked(branch1)}}
            >
                {branch1}
            </span>
            {branch2 && (
                <>
                    <img className="object-none" src={RightArrow} alt="" />
                    <span 
                        className={`${
                            !branch3 
                            ? "font-spoqaBold text-gray-393e41" 
                            : "font-spoqaBold text-gray-r7c7c7c"
                            } text-13px tracking-tight cursor-pointer`}
                        onClick={() => {
                            history.push(mainPath)
                            setSelectedTab(mainPath)
                            setSelectedSubTab(mainPath)
                        }}
                        >
                            {branch2}
                        </span>
                </>
            )}
            {branch3 && (
                <>
                    <img className="object-none" src={RightArrow} alt="" />
                    <span className="font-spoqaBold text-13px text-gray-393e41 tracking-tight cursor-pointer">{branch3}</span>
                </>
            )}
            {branch4 && (
                <>
                    <img className="object-none" src={RightArrow} alt="" />
                    <span className="font-spoqaBold text-13px text-gray-393e41 tracking-tight">{branch4}</span>
                </>
            )}    
        </div>
    )
}

export default DirectoryComponent
