import React from 'react'
import { useHistory } from 'react-router-dom';
import HomeIcon from '../../images/myPage/home_icon.png'
import RightArrow from '../../images/myPage/right_arrow.png'

const DirectoryComponent = ({
    branch1 = "마이페이지",
    branch2, 
    branch3 = null
}) => {

    const history = useHistory();

    return (
        <div className="flex items-center h-22px w-default my-20px space-x-10px">
            <img className="object-none cursor-pointer" src={HomeIcon} alt="" onClick={() => history.push("/")} />
            <img className="object-none cursor-none" src={RightArrow} alt=""/>
            <span className="font-spoqaBold text-13px text-gray-r7c7c7c tracking-tight">{branch1}</span>
            {branch2 && (
                <>
                    <img className="object-none" src={RightArrow} alt="" />
                    <span className={`${
                        !branch3 
                        ? "font-spoqaBold text-gray-393e41" 
                        : "font-spoqaBold text-gray-r7c7c7c"
                        } text-13px tracking-tight`}>{branch2}</span>
                </>
            )}
            {branch3 && (
                <>
                    <img className="object-none" src={RightArrow} alt="" />
                    <span className="font-spoqaBold text-13px text-gray-393e41 tracking-tight">{branch3}</span>
                </>
            )}
            
        </div>
    )
}

export default DirectoryComponent
