import Footer from 'components/Footer'
import Footer2 from 'components/Footer2'
import Pagination from 'components/myPage/Pagination'
import Navbar from 'components/Navbar'
import NoticeBanner from 'components/NoticeBanner'
import React, { useState } from 'react'
import DistributorBanner from '../images/myPage/distributor/distributor_banner.png'
import SummaryIcon from '../images/myPage/distributor/summary_icon.png'
import PieIcon from '../images/myPage/distributor/pie.png'
import DetailIcon from '../images/myPage/distributor/detail.png'
import MemberIcon from '../images/myPage/distributor/member.png'
import RecommendIcon from '../images/myPage/distributor/recommend.png'
import SummaryIcon1 from '../images/myPage/distributor/summary/img1.png'
import SummaryIcon2 from '../images/myPage/distributor/summary/img2.png'
import SummaryIcon3 from '../images/myPage/distributor/summary/img3.png'
import SummaryIcon4 from '../images/myPage/distributor/summary/img4.png'
import SummaryIcon5 from '../images/myPage/distributor/summary/img5.png'
import SummaryIcon6 from '../images/myPage/distributor/summary/img6.png'
import SummaryIcon7 from '../images/myPage/distributor/summary/img7.png'
import SummaryIcon8 from '../images/myPage/distributor/summary/img8.png'
import DateSearchBar from 'components/myPage/DateSearchBar'
import Diamond from '../images/myPage/diamond.png'

const DistributorPage = ({
    isAuthenticated,
    setAuthenticated
}) => {

    const [page, setPage] = useState(0)

    const SummaryCard = ({text, img, count}) => (
        <div className="w-227px h-165px rounded-lg border border-gray-dddddd bg-gray-f8f8fa flex flex-col items-center justify-start shadow-plain8">
            <img className="mt-20px object-none" src={img} alt="" />
            <span className="mt-8px font-spoqaMedium tracking-tight text-18px text-gray-r616161">{text}</span>
            <span className="font-spoqaBold tracking-tight text-26px text-blue-r0056a6">{count}</span>
        </div>
    )

    return (
        <div className="relative flex flex-col justify-center limit:overflow-x-hidden">
             <div className="fixed w-1920 top-0 z-50 flex flex-col items-start limit1920:items-center">
                <NoticeBanner />
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
            </div>
            
            <div className="flex flex-col items-start limit:items-center mt-92px w-full h-full">
                <div className="relative w-default h-225px mt-20px">
                    <label className="text-36px font-spoqaMedium text-blue-r325685 absolute right-0 bottom-0 z-20 mb-86px mr-50px">마이페이지</label>
                    <img className="z-10" src={DistributorBanner} alt="" />
                </div>
                
                <div className="space-x-2px h-76px w-734px border-b border-gray-r868686 flex items-center justify-center text-24px tracking-tight text-gray-r454545">
                    <span className="font-spoqaBold text-blue-r0056a6">
                        Louie3
                    </span>
                    <span className="font-spoqaMedium">
                        님의 총판 정보입니다.
                    </span>
                </div>

                <div className="mt-42px w-1836px">
                    <div className="h-29px w-full flex items-center space-x-6px text-24px tracking-tight text-gray-r7b7b7b font-spoqaMedium">
                        <img src={SummaryIcon} alt="" />
                        <span>총판현황</span>
                    </div>
                    <div className="flex h-165px w-full mt-20px space-x-4px">
                        <SummaryCard img={SummaryIcon1} text="전체유저" count={5} />
                        <SummaryCard img={SummaryIcon2} text="요율 설정 완료건" count={20} />
                        <SummaryCard img={SummaryIcon3} text="요율 설정 미완료건" count={5} />
                        <SummaryCard img={SummaryIcon4} text="전체 포인트" count={0} />
                        <SummaryCard img={SummaryIcon5} text="현재까지 사용 포인트" count={0} />
                        <SummaryCard img={SummaryIcon6} text="현재 나의 포인트" count={0} />
                        <SummaryCard img={SummaryIcon7} text="진행중인 금액" count="78,307.50" />
                        <SummaryCard img={SummaryIcon8} text="제휴 금액" count="117,515,875.76" />
                    </div>

                    <div className="mt-60px h-29px w-full flex items-center space-x-6px text-24px tracking-tight text-gray-r7b7b7b font-spoqaMedium">
                        <img src={PieIcon} alt="" />
                        <span>롤링요율</span>
                    </div>
                    <div className="mt-20px h-112px w-full border-2 rounded-md border-gray-dddddd shadow-plain8 overflow-hidden">
                        <table className="w-full overflow-hidden">
                            <thead className="h-54px w-full border-b border-gray-dddddd bg-gray-r8e9296 font-spoqaMedium text-16px text-white tracking-tight">
                                <tr className="flex items-center h-54px">
                                    <td className="w-91px text-center">스포츠</td>
                                    <td className="w-91px text-center">미니게임</td>
                                    <td className="w-91px text-center">에볼루션</td>
                                    <td className="w-91px text-center flex flex-col pt-2px -space-y-4px"><span>아시안</span><span>게이밍</span></td>
                                    <td className="w-91px text-center flex flex-col pt-2px -space-y-4px"><span>프레그메틱</span><span>카지노</span></td>
                                    <td className="w-91px text-center flex flex-col pt-2px -space-y-4px"><span>드림</span><span>게이밍</span></td>
                                    <td className="w-91px text-center flex flex-col pt-2px -space-y-4px"><span>섹시</span><span>게이밍</span></td>
                                    <td className="w-91px text-center">빅게이밍</td>
                                    <td className="w-91px text-center">넷엔트</td>
                                    <td className="w-91px text-center flex flex-col pt-2px -space-y-4px"><span>프레그메틱</span><span>플레이</span></td>
                                    <td className="w-91px text-center">퀵스핀</td>
                                    <td className="w-91px text-center">스페이드</td>
                                    <td className="w-91px text-center">하바네로</td>
                                    <td className="w-91px text-center">월드매치</td>
                                    <td className="w-91px text-center">매버릭</td>
                                    <td className="w-91px text-center flex flex-col pt-2px -space-y-4px"><span>플레이</span><span>앤고</span></td>
                                    <td className="w-91px text-center flex flex-col pt-2px -space-y-4px"><span>YL</span><span>게이밍</span></td>
                                    <td className="w-91px text-center flex flex-col pt-2px -space-y-4px"><span>레드</span><span>타이거</span></td>
                                    <td className="w-91px text-center">e-스포츠</td>
                                    <td className="w-91px text-center">가상게임</td>
                                </tr>
                            </thead>
                            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                                <tr className="flex items-center bg-gray-fefefe font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-54px w-full border-b border-gray-dddddd">
                                    <td className="w-91px text-center">1.00%</td>
                                    <td className="w-91px text-center">1.00%</td>
                                    <td className="w-91px text-center">0.00%</td>
                                    <td className="w-91px text-center">0.70%</td>
                                    <td className="w-91px text-center">0.00%</td>
                                    <td className="w-91px text-center">0.00%</td>
                                    <td className="w-91px text-center">0.00%</td>
                                    <td className="w-91px text-center">0.00%</td>
                                    <td className="w-91px text-center">0.00%</td>
                                    <td className="w-91px text-center">0.00%</td>
                                    <td className="w-91px text-center">0.00%</td>
                                    <td className="w-91px text-center">0.00%</td>
                                    <td className="w-91px text-center">0.00%</td>
                                    <td className="w-91px text-center">0.00%</td>
                                    <td className="w-91px text-center">0.00%</td>
                                    <td className="w-91px text-center">0.00%</td>
                                    <td className="w-91px text-center">0.00%</td>
                                    <td className="w-91px text-center">0.00%</td>
                                    <td className="w-91px text-center">0.00%</td>
                                    <td className="w-91px text-center">0.00%</td>

                                </tr>
                            </tbody>
                        </table>   
                    </div>
                    <div className="mt-60px h-29px w-full flex items-center space-x-6px text-24px tracking-tight text-gray-r7b7b7b font-spoqaMedium">
                        <img src={DetailIcon} alt="" />
                        <span>나의 상세내역</span>
                    </div>

                    <DateSearchBar isLeagueSearch={false} hasIdSearch={true}/>

                    <div className="flex mt-30px w-full space-x-11px">
                        <div className="w-333px h-48px rounded-full border-2 border-gray-b4b4b4 bg-gray-r5a6067 flex items-center justify-center font-spoqaMedium text-16px tracking-tight">
                            <img className="mr-16px" src={Diamond} alt="" />
                            <div className="flex items-center space-x-4px">
                                <span className="text-white">입금:</span>
                                <span className="text-yellow-ffcc00">0</span>
                            </div>
                        </div>

                        <div className="w-333px h-48px rounded-full border-2 border-gray-b4b4b4 bg-gray-r5a6067 flex items-center justify-center font-spoqaMedium text-16px tracking-tight">
                            <img className="mr-16px" src={Diamond} alt="" />
                            <div className="flex items-center space-x-4px">
                                <span className="text-white">보너스:</span>
                                <span className="text-yellow-ffcc00">0</span>
                            </div>
                        </div>

                        <div className="w-333px h-48px rounded-full border-2 border-gray-b4b4b4 bg-gray-r5a6067 flex items-center justify-center font-spoqaMedium text-16px tracking-tight">
                            <img className="mr-16px" src={Diamond} alt="" />
                            <div className="flex items-center space-x-4px">
                                <span className="text-white">출금:</span>
                                <span className="text-yellow-ffcc00">0</span>
                            </div>
                        </div>

                        <div className="w-333px h-48px rounded-full border-2 border-gray-b4b4b4 bg-gray-r5a6067 flex items-center justify-center font-spoqaMedium text-16px tracking-tight">
                            <img className="mr-16px" src={Diamond} alt="" />
                            <div className="flex items-center space-x-4px">
                                <span className="text-white">입출금 합계:</span>
                                <span className="text-red-f47d7d">-3,200,000</span>
                            </div>
                        </div>
                    </div>

                    <div>

                    <div className="mt-20px w-full border-2 rounded-md border-gray-dddddd shadow-plain8 overflow-hidden">
                        <table className="w-full overflow-hidden">
                            <thead className="h-54px w-full border-b border-gray-dddddd bg-gray-r8e9296 font-spoqaMedium text-16px text-white tracking-tight">
                                <tr className="flex items-center h-54px border-b">
                                    <td className="w-83px bg-gray-r676e76 h-full flex items-center justify-center">구분</td>
                                    <td className="w-83px text-center">스포츠</td>
                                    <td className="w-83px text-center">미니게임</td>
                                    <td className="w-83px text-center">에볼루션</td>
                                    <td className="w-83px text-center flex flex-col pt-2px -space-y-4px"><span>아시안</span><span>게이밍</span></td>
                                    <td className="w-83px text-center flex flex-col pt-2px -space-y-4px"><span>프레그메틱</span><span>카지노</span></td>
                                    <td className="w-83px text-center flex flex-col pt-2px -space-y-4px"><span>드림</span><span>게이밍</span></td>
                                    <td className="w-83px text-center flex flex-col pt-2px -space-y-4px"><span>섹시</span><span>게이밍</span></td>
                                    <td className="w-83px text-center">빅게이밍</td>
                                    <td className="w-83px text-center">넷엔트</td>
                                    <td className="w-83px text-center flex flex-col pt-2px -space-y-4px"><span>프레그메틱</span><span>플레이</span></td>
                                    <td className="w-83px text-center">퀵스핀</td>
                                    <td className="w-83px text-center">스페이드</td>
                                    <td className="w-83px text-center">하바네로</td>
                                    <td className="w-83px text-center">월드매치</td>
                                    <td className="w-83px text-center">매버릭</td>
                                    <td className="w-83px text-center flex flex-col pt-2px -space-y-4px"><span>플레이</span><span>앤고</span></td>
                                    <td className="w-83px text-center flex flex-col pt-2px -space-y-4px"><span>YL</span><span>게이밍</span></td>
                                    <td className="w-83px text-center flex flex-col pt-2px -space-y-4px"><span>레드</span><span>타이거</span></td>
                                    <td className="w-83px text-center">e-스포츠</td>
                                    <td className="w-83px text-center">가상게임</td>
                                    <td className="w-83px text-center">합계</td>
                                </tr>
                            </thead>
                            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                                <tr className="flex items-center bg-gray-fefefe font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-54px w-full border-b border-gray-dddddd">
                                    <td className="w-83px bg-gray-r7a848f h-full flex items-center justify-center font-spoqaMedium text-16px text-white tracking-tight">베팅금</td>
                                    <td className="w-83px text-right">1.09M</td>
                                    <td className="w-83px text-right">33K</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">3.06M</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">7.14M</td>
                                </tr>
                                <tr className="flex items-center bg-gray-fefefe font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-54px w-full border-b border-gray-dddddd">
                                    <td className="w-83px bg-gray-r7a848f h-full flex items-center justify-center font-spoqaMedium text-16px text-white tracking-tight">승패</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                </tr>
                                <tr className="flex items-center bg-gray-fefefe font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-54px w-full border-b border-gray-dddddd">
                                    <td className="w-83px bg-gray-r7a848f h-full flex items-center justify-center font-spoqaMedium text-16px text-white tracking-tight">정산금액</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                    <td className="w-83px text-right">0</td>
                                </tr>
                            </tbody>
                        </table>   
                    </div>
                    </div>

                    <div className="mt-60px h-29px w-full flex items-center space-x-6px text-24px tracking-tight text-gray-r7b7b7b font-spoqaMedium">
                        <img src={MemberIcon} alt="" />
                        <div>접속중인 회원수: <span className="font-spoqaBold text-black tracking-tight">0</span></div>
                    </div>

                    <div className="mt-60px h-29px w-full flex items-center justify-between text-24px tracking-tight text-gray-r7b7b7b font-spoqaMedium">
                        <div className="flex items-center space-x-6px items-center">
                            <img src={RecommendIcon} alt="" />
                            <div>추천 회원내역</div>
                        </div>
                        
                        <div className="w-333px h-48px rounded-full border-2 border-gray-b4b4b4 bg-gray-r5a6067 flex items-center justify-center font-spoqaMedium text-16px tracking-tight">
                            <img className="mr-16px" src={Diamond} alt="" />
                            <div className="flex items-center space-x-4px">
                                <span className="text-white">보유금 총합계:</span>
                                <span className="text-yellow-ffcc00">75,000</span>
                            </div>
                        </div>
                    </div>

                </div>
 

                <div className="mt-60px">
                    <Pagination page={page} setPage={setPage}/>   
                </div>

                <div>
                    <Footer2 />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default DistributorPage
