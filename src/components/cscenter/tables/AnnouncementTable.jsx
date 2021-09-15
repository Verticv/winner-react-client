import React from 'react'
import { useHistory } from 'react-router';

const AnnouncementTable = () => {

    const history = useHistory();

    return (
        <table className="shadow-subNavbar rounded-3xl overflow-hidden">
            <thead className="bg-gray-fafafa rounded-3xl font-spoqaBold text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">
                <tr>
                    <td style={{width: "173px"}} className="text-center">구분</td>
                    <td style={{width: "865px"}} className="w-full text-center">제목</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqaMedium cursor-pointer" onClick={() => history.push('/cscenter/announcement/view')}>
                <tr className="bg-gray-fefefe rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r585858 h-56px w-full border-b border-gray-dddddd">
                    <td style={{width: "173px"}} className="h-56px text-center text-blue-r0056a6 ">스포츠북</td>
                    <td  style={{width: "865px"}} className="w-full h-56px flex items-center space-x-10px">
                        <p>농구[쿼터] / 배구[세트] 스페셜 규정</p>
                        <div className="w-18px h-17px bg-red-notification rounded-full text-12px text-white flex items-center justify-center font-roboto">
                            N
                        </div>
                    </td>
                </tr>
                <tr className="bg-gray-f7f9fc rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r585858 h-56px border-b border-gray-dddddd">
                    <td style={{width: "173px"}} className="h-56px text-center text-blue-r0056a6">스포츠북</td>
                    <td style={{width: "865px"}} className="w-full h-56px">야구스포츠 스페셜 규정</td>
                </tr>
                <tr className="bg-gray-fefefe rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r585858 h-56px w-full border-b border-gray-dddddd">
                    <td style={{width: "173px"}} className="h-56px text-center text-blue-r0056a6">스포츠북</td>
                    <td  style={{width: "865px"}} className="w-full h-56px">예비 도메인 안내</td>
                </tr>
                <tr className="bg-gray-f7f9fc rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r585858 h-56px border-b border-gray-dddddd">
                    <td style={{width: "173px"}} className="h-56px text-center text-blue-r0056a6">기타</td>
                    <td style={{width: "865px"}} className="w-full h-56px">은행별 점검시간안내</td>
                </tr>
                <tr className="bg-gray-fefefe rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r585858 h-56px w-full border-b border-gray-dddddd">
                    <td style={{width: "173px"}} className="h-56px text-center text-blue-r0056a6">기타</td>
                    <td  style={{width: "865px"}} className="w-full h-56px">스포츠 종목별 규정</td>
                </tr>
                <tr className="bg-gray-f7f9fc rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r585858 h-56px border-b border-gray-dddddd">
                    <td style={{width: "173px"}} className="h-56px text-center text-blue-r0056a6">스포츠북</td>
                    <td style={{width: "865px"}} className="w-full h-56px">미니게임 통합규정</td>
                </tr>
                <tr className="bg-gray-fefefe rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r585858 h-56px w-full border-b border-gray-dddddd">
                    <td style={{width: "173px"}} className="h-56px text-center text-blue-r0056a6">미니게임</td>
                    <td  style={{width: "865px"}} className="w-full h-56px">스포츠게임 관련규정</td>
                </tr>
                <tr className="bg-gray-f7f9fc rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r585858 h-56px border-b border-gray-dddddd">
                    <td style={{width: "173px"}} className="h-56px text-center text-blue-r0056a6">카지노</td>
                    <td style={{width: "865px"}} className="w-full h-56px">에볼루션카지노 이용안내</td>
                </tr>
                <tr className="bg-gray-fefefe rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r585858 h-56px w-full border-b border-gray-dddddd">
                    <td style={{width: "173px"}} className="h-56px text-center text-blue-r0056a6">스포츠북</td>
                    <td  style={{width: "865px"}} className="w-full h-56px">라이브 배팅 기본규정</td>
                </tr>
                <tr className="bg-gray-f7f9fc rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r585858 h-56px border-b border-gray-dddddd">
                    <td style={{width: "173px"}} className="h-56px text-center text-blue-r0056a6">스포츠북</td>
                    <td style={{width: "865px"}} className="w-full h-56px">핸디캡의 이해</td>
                </tr>
            </tbody>
        </table>  
    )
}

export default AnnouncementTable
