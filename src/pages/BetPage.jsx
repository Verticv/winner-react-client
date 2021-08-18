import BetNav from "components/BetNav";
import LiveMatchCards from "components/LiveMatchCards";
import SelectLayoutButtons from "components/SelectLayoutButtons";
import React from "react";

// import football from "../imagesDump/bet/icon-ufc.png").default};
// import favorites from "../imagesDump/bet/icon-ufc.png").default};
// import web from "../imagesDump/bet/icon-ufc.png").default};
// import volleyball from "../imagesDump/bet/icon-ufc.png").default};
// import hockey from "../imagesDump/bet/icon-ufc.png").default};
// import placeholder from "../imagesDump/bet/icon-ufc.png").default};
import '../components/BetNavItem.css'

export default function BetPage() {
    return (
    <div className="global_container_">
      <div className="col-32">
        <div className="group-2">
          <div className="col-24">
            <div className="wrapper-28">
            <BetNav />
            </div>
          </div>
          <div className="btn">
            <div className="row-28">
                <SelectLayoutButtons />
            </div>
            <div className="row-32">
              <div className="bg-holder-13">
                <img className="ico-12" src={require("../imagesHold/ico_16.png").default} alt="" width="17" height="21"/>
                <p className="text-23">리그선택</p>
              </div>
              <div className="wrapper-26">
                <div className="bg-2"></div>
                <div className="bg-holder-14">
                  <img className="ico-13" src={require("../imagesHold/ico_17.png").default} alt="" width="22" height="20"/>
                  <p className="text-24">시간순보기</p>
                </div>
              </div>
              <div className="bg-holder-15">
                <img className="ico-14" src={require("../imagesHold/ico_18.png").default} alt="" width="23" height="21"/>
                <p className="text-25">리그순보기</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row-42">
          <div className="group-26">
            <div className="group-27">
              <div className="col-19">
                <div className="row-37">
                  <div className="col-34">
                    <div className="team">
                      <div className="group-28">
                        <img className="layer-2" src={require("../imagesHold/image_67.png").default} alt="" width="15" height="6"/>
                      </div>
                      <div className="bg-holder-16">
                        <p className="h">h</p>
                      </div>
                      <p className="text-26">fc바로셀로나</p>
                    </div>
                    <img className="layer-3" src={require("../imagesHold/image_63.png").default} alt="" width="18" height="16"/>
                    <div className="team-2">
                      <img className="layer-4" src={require("../imagesHold/image_64.png").default} alt="" width="13" height="15"/>
                      <div className="bg-holder-17">
                        <img className="a" src={require("../imagesHold/a.png").default} alt="a" width="8" height="9" title="a"/>
                      </div>
                      <p className="text-27">레알마드리드</p>
                    </div>
                  </div>
                  <div className="col-38">
                    <div className="wrapper-50">
                      <div className="text-28">
                        <p>후반전 <span className="text-style">35</span></p>
                      </div>
                    </div>
                    <img className="ico-15" src={require("../imagesHold/ico_29.jpg").default} alt="" width="33" height="33"/>
                  </div>
                  <div className="col-25">
                    <p className="text-29">50002</p>
                    <p className="text-30">5000<span className="colore9ca4e">0</span></p>
                  </div>
                </div>
                <div className="btn-2">
                  <div className="bg-holder-18">
                    <p className="text-31">fc바로셀로나</p>
                  </div>
                  <div className="up">
                    <div className="layer-5"></div>
                    <div className="arr">
                      <img className="ico-16" src={require("../imagesHold/ico_23.png").default} alt="" width="16" height="10"/>
                    </div>
                  </div>
                  <p className="text-32">5.01</p>
                  <div className="row-10">
                    <img className="line" src={require("../imagesHold/line_31.png").default} alt="" width="10" height="27"/>
                    <p className="text-33">4.05</p>
                  </div>
                  <div className="row-11">
                    <p className="text-34">3.75</p>
                    <p className="text-35">레알마드리드</p>
                  </div>
                  <img className="line-2" src={require("../imagesHold/line_32.png").default} alt="" width="10" height="27"/>
                </div>
              </div>
              <div className="bg-3"></div>
              <div className="f">
                <div className="s">
                  <img className="layer-6" src={require("../imagesHold/image_60.png").default} alt="" width="18" height="18"/>
                  <img className="layer-7" src={require("../imagesHold/image_61.png").default} alt="" width="29" height="18"/>
                  <p className="text-36">라리가</p>
                </div>
                <div className="e">
                  <img className="c" src={require("../imagesHold/c.png").default} alt="" width="18" height="18"/>
                  <div className="y"></div>
                  <div className="r"></div>
                  <img className="p" src={require("../imagesHold/p.png").default} alt="" width="14" height="17"/>
                  <img className="g" src={require("../imagesHold/g.png").default} alt="" width="18" height="18"/>
                </div>
              </div>
              <div className="line-3"></div>
              <div className="line-4"></div>
              <p className="text-37">+</p>
              <p className="text-38">23</p>
              {/* <img className="gra" src={require("../imagesHold/gra.png").default} alt="" width="31" height="145"/> */}
            </div>
            <div className="group-29">
              <div className="bg-holder-19">
                <img className="bg-4" src={require("../imagesHold/bg_201.jpg").default} alt="" width="681" height="105"/>
                <div className="on">
                  <div className="col-23">
                    <div className="line-5"></div>
                    <div className="row-41">
                      <div className="col-35">
                        <div className="team-3">
                          <div className="group-30">
                            <img className="layer-8" src={require("../imagesHold/image_67.png").default} alt="" width="15" height="10"/>
                          </div>
                          <div className="bg-holder-20">
                            <p className="h-2">h</p>
                          </div>
                          <p className="text-39">맨체스터유나이티드</p>
                        </div>
                        <img className="layer-9" src={require("../imagesHold/image_63.png").default} alt="" width="18" height="16"/>
                        <div className="team-4">
                          <img className="layer-10" src={require("../imagesHold/image_64.png").default} alt="" width="13" height="15"/>
                          <div className="bg-holder-21">
                            <img className="a-2" src={require("../imagesHold/a.png").default} alt="a" width="8" height="9" title="a"/>
                          </div>
                          <p className="text-40">리버풀</p>
                        </div>
                      </div>
                      <div className="col-41">
                        <div className="wrapper-53">
                          <div className="text-41">
                            <p>후반전 <span className="text-style">35</span></p>
                          </div>
                        </div>
                        <img className="ico-17" src={require("../imagesHold/ico_32.jpg").default} alt="" width="33" height="33"/>
                      </div>
                      <div className="col-31">
                        <p className="text-42">5000<span className="colore9ca4e">2</span></p>
                        <p className="text-43">5000<span className="colore9ca4e">0</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="line-6"></div>
                  <div className="bg-holder-22">
                    <div className="bg-holder-23">
                      <div className="line-7"></div>
                    </div>
                  </div>
                  <div className="f-2">
                    <div className="s-2">
                      <img className="layer-11" src={require("../imagesHold/image_80.png").default} alt="" width="18" height="18"/>
                      <img className="layer-12" src={require("../imagesHold/image_81.png").default} alt="" width="29" height="18"/>
                      <p className="text-44">프리미어리그</p>
                    </div>
                    <div className="e-2">
                      <img className="c-2" src={require("../imagesHold/c.png").default} alt="" width="18" height="18"/>
                      <div className="y-2"></div>
                      <div className="r-2"></div>
                      <img className="p-2" src={require("../imagesHold/p.png").default} alt="" width="14" height="17"/>
                      <img className="g-2" src={require("../imagesHold/g.png").default} alt="" width="18" height="18"/>
                    </div>
                  </div>
                  <div className="line-holder">
                    <div className="line-8"></div>
                  </div>
                  <div className="group-31">
                    <p className="text-45">+</p>
                    <p className="text-46">23</p>
                  </div>
                  <div className="bg-holder-24">
                    <div className="group-32">
                      <p className="text-47">+</p>
                      <p className="text-48">23</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-3">
                <div className="row-15">
                  <p className="text-49">맨체스터유나이티드</p>
                  <p className="text-50">5.01</p>
                </div>
                <div className="wrapper-14">
                  <div className="row-16">
                    <img className="line-9" src={require("../imagesHold/line_31.png").default} alt="" width="11" height="32"/>
                    <p className="text-51">4.05</p>
                  </div>
                  <div className="bg-holder-25">
                    <p className="text-52">리버풀</p>
                  </div>
                  <div className="down">
                    <div className="layer-13"></div>
                    <div className="arr-2">
                      <img className="ico-18" src={require("../imagesHold/ico_24.png").default} alt="" width="16" height="10"/>
                    </div>
                  </div>
                  <p className="text-53">3.75</p>
                  <img className="line-10" src={require("../imagesHold/line_32.png").default} alt="" width="11" height="32"/>
                </div>
              </div>
              {/* <img className="gra-2" src={require("../imagesHold/gra.png").default} alt="" width="31" height="145"/> */}
            </div>
            <div className="group-33">
              <div className="col-21">
                <div className="row-39">
                  <div className="col-36">
                    <div className="team-5">
                      <div className="group-34">
                        <img className="layer-14" src={require("../imagesHold/image_67.png").default} alt="" width="15" height="10"/>
                      </div>
                      <div className="bg-holder-26">
                        <p className="h-3">h</p>
                      </div>
                      <p className="text-54">바이헤른뮌헨</p>
                    </div>
                    <img className="layer-15" src={require("../imagesHold/image_96.png").default} alt="" width="18" height="16"/>
                    <div className="team-6">
                      <img className="layer-16" src={require("../imagesHold/image_64.png").default} alt="" width="13" height="15"/>
                      <div className="bg-holder-27">
                        <img className="a-3" src={require("../imagesHold/a.png").default} alt="a" width="8" height="9" title="a"/>
                      </div>
                      <p className="text-55">프랑크푸르트</p>
                    </div>
                  </div>
                  <div className="col-40">
                    <div className="wrapper-52">
                      <div className="text-56">
                        <p>후반전 <span className="text-style">35</span></p>
                      </div>
                    </div>
                    <img className="ico-19" src={require("../imagesHold/ico_31.jpg").default} alt="" width="33" height="33"/>
                  </div>
                  <div className="col-27">
                    <p className="text-57">5000<span className="colore9ca4e">2</span></p>
                    <p className="text-58">5000<span className="colore9ca4e">0</span></p>
                  </div>
                </div>
                <div className="btn-4">
                  <div className="row-17">
                    <p className="text-59">바이헤른뮌헨</p>
                    <p className="text-60">5.01</p>
                  </div>
                  <div className="wrapper-21">
                    <div className="row-18">
                      <img className="line-11" src={require("../imagesHold/line_31.png").default} alt="" width="11" height="32"/>
                      <p className="text-61">4.05</p>
                    </div>
                    <div className="row-19">
                      <p className="text-62">3.75</p>
                      <p className="text-63">프랑크푸르트</p>
                    </div>
                    <img className="line-12" src={require("../imagesHold/line_32.png").default} alt="" width="11" height="32"/>
                  </div>
                </div>
              </div>
              <div className="col-14">
                <p className="text-64">+</p>
                <p className="text-65">23</p>
              </div>
              <div className="f-3">
                <div className="s-3">
                  <img className="layer-17" src={require("../imagesHold/image_70.png").default} alt="" width="18" height="18"/>
                  <img className="layer-18" src={require("../imagesHold/image_94.png").default} alt="" width="30" height="18"/>
                  <p className="text-66">분데스리가</p>
                </div>
                <div className="e-3">
                  <img className="c-3" src={require("../imagesHold/c.png").default} alt="" width="18" height="18"/>
                  <div className="y-3"></div>
                  <div className="r-3"></div>
                  <img className="p-3" src={require("../imagesHold/p.png").default} alt="" width="14" height="17"/>
                  <img className="ico-20" src={require("../imagesHold/g.png").default} alt="" width="18" height="18"/>
                </div>
              </div>
              <div className="line-13"></div>
              {/* <img className="gra-3" src={require("../imagesHold/gra.png").default} alt="" width="31" height="145"/> */}
            </div>
            <LiveMatchCards />
            <div className="group-37">
              <div className="bg-holder-30">
                <div className="group-38">
                  <p className="text-80">진행중인 경기</p>
                  <div className="bg-holder-31">
                    <p className="text-81">4</p>
                  </div>
                </div>
              </div>
              <div className="row-9">
                <div className="layer-1078"></div>
                <div className="group-39">
                  <div className="bg-holder-32">
                    <p className="text-82">20</p>
                  </div>
                  <p className="text-83">예정 경기</p>
                </div>
              </div>
            </div>
            <div className="group-40">
              <div className="f-5">
                <img className="layer-24" src={require("../imagesHold/image_80.png").default} alt="" width="18" height="18"/>
                <img className="layer-25" src={require("../imagesHold/image_105.png").default} alt="" width="30" height="19"/>
                <p className="text-84">라리가</p>
              </div>
              <div className="row-29">
                <div className="col-33">
                  <div className="row-43">
                    <img className="layer-26" src={require("../imagesHold/image_73.png").default} alt="" width="18" height="16"/>
                    <div className="team-9">
                      <img className="layer-27" src={require("../imagesHold/image_66.png").default} alt="" width="13" height="15"/>
                      <div className="bg-holder-33">
                        <p className="h-5">h</p>
                      </div>
                      <p className="text-85">fc바로셀로나</p>
                    </div>
                  </div>
                  <div className="team-10">
                    <div className="group-41">
                      <img className="layer-28" src={require("../imagesHold/image_110.png").default} alt="" width="12" height="14"/>
                    </div>
                    <div className="bg-holder-34">
                      <img className="a-5" src={require("../imagesHold/a.png").default} alt="a" width="8" height="9" title="a"/>
                    </div>
                    <p className="text-86">레알마드리드</p>
                  </div>
                </div>
                <div className="col-28">
                  <div className="wrapper-39">
                    <div className="text-87">
                      <p>경기시간</p>
                    </div>
                  </div>
                  <p className="text-88">02-06 21:00</p>
                </div>
              </div>
              <div className="line-18"></div>
              <div className="btn-holder">
                <div className="line-19"></div>
                <img className="btn-6" src={require("../imagesHold/btn_2.png").default} alt="" width="43" height="110"/>
              </div>
              <p className="text-89">정보</p>
              <img className="gra-5" src={require("../imagesHold/gra_5.jpg").default} alt="" width="31" height="110"/>
            </div>
            <div className="group-42">
              <div className="row-30">
                <img className="layer-29" src={require("../imagesHold/image_73.png").default} alt="" width="18" height="16"/>
                <div className="col-29">
                  <div className="team-11">
                    <div className="group-43">
                      <img className="layer-30" src={require("../imagesHold/image_67.png").default} alt="" width="15" height="10"/>
                    </div>
                    <div className="bg-holder-35">
                      <p className="h-6">h</p>
                    </div>
                    <p className="text-90">맨체스터유나이티드</p>
                  </div>
                  <div className="team-12">
                    <div className="group-44">
                      <img className="layer-31" src={require("../imagesHold/image_110.png").default} alt="" width="12" height="14"/>
                    </div>
                    <div className="bg-holder-36">
                      <img className="a-6" src={require("../imagesHold/a.png").default} alt="a" width="8" height="9" title="a"/>
                    </div>
                    <p className="text-91">리버풀</p>
                  </div>
                </div>
                <div className="col-30">
                  <div className="wrapper-40">
                    <div className="text-92">
                      <p>경기시간</p>
                    </div>
                  </div>
                  <p className="text-93">02-06 21:00</p>
                </div>
              </div>
              <div className="line-20"></div>
              <div className="col-15">
                <div className="line-21"></div>
                <p className="text-94">정보</p>
              </div>
              <div className="f-6">
                <img className="layer-32" src={require("../imagesHold/image_80.png").default} alt="" width="18" height="18"/>
                <img className="layer-33" src={require("../imagesHold/image_122.png").default} alt="" width="30" height="19"/>
                <p className="text-95">프리미어리그</p>
              </div>
              <img className="gra-6" src={require("../imagesHold/gra_5.jpg").default} alt="" width="31" height="110"/>
            </div>
            <div className="group-45">
              <img className="bg-6" src={require("../imagesHold/bg_249.png").default} alt="" width="681" height="4"/>
              <div className="line-22"></div>
              <div className="btn-holder-2">
                <div className="line-23"></div>
              </div>
              <div className="f-7">
                <img className="layer-34" src={require("../imagesHold/image_80.png").default} alt="" width="18" height="18"/>
                <img className="layer-35" src={require("../imagesHold/image_122.png").default} alt="" width="30" height="19"/>
                <p className="text-96">프리미어리그</p>
              </div>
              <img className="gra-7" src={require("../imagesHold/gra_7.png").default} alt="" width="31" height="44"/>
            </div>
          </div>
          <div className="group-46">
            <div className="row">
              <p className="text-97">2</p>
              <p className="text-98">0</p>
            </div>
            <div className="group-47">
              <img className="layer-36" src={require("../imagesHold/image_37.png").default} alt="" width="16" height="8"/>
              <div className="layer-37"></div>
            </div>
            <div className="group-48">
              <div className="bg-holder-37">
                <p className="text-99">전체</p>
              </div>
              <div className="wrapper-6">
                <div className="bg-holder-38">
                  <p className="text-100">팀골</p>
                </div>
                <div className="bg-holder-39">
                  <p className="text-101">핸디캡</p>
                </div>
                <div className="bg-holder-40">
                  <p className="text-102">오버언더</p>
                </div>
                <div className="bg-holder-41">
                  <p className="text-103">승무패핸디캡</p>
                </div>
                <div className="line-24"></div>
              </div>
            </div>
            <div className="group-49">
              <div className="bg-holder-42">
                <div className="bg-holder-43">
                  <div className="bg-holder-44">
                    <img className="bg-7" src={require("../imagesHold/bg_143.png").default} alt="" width="729" height="386"/>
                  </div>
                </div>
              </div>
              <img className="line-25" src={require("../imagesHold/line_7.png").default} alt="" width="282" height="349"/>
              <img className="line-26" src={require("../imagesHold/line_8.png").default} alt="" width="282" height="349"/>
              <div className="col-12">
                <div className="group-50">
                  <div className="ico-22"></div>
                  <p className="text-104">홈팀 오버언더</p>
                  <div className="bg-holder-45">
                    <div className="bg-holder-46">
                      <img className="ico-23" src={require("../imagesHold/ico_21.png").default} alt="" width="16" height="10"/>
                    </div>
                  </div>
                </div>
                <div className="group-51">
                  <div className="group-52">
                    <div className="bg-holder-47">
                      <p className="text-105">오버</p>
                    </div>
                    <div className="bg-holder-48">
                      <img className="bg-8" src={require("../imagesHold/bg_155.png").default} alt="" width="165" height="18"/>
                      <p className="text-106">4.05</p>
                      <img className="line-27" src={require("../imagesHold/line_11.png").default} alt="" width="9" height="28"/>
                    </div>
                    <div className="bg-holder-49">
                      <img className="bg-9" src={require("../imagesHold/bg_157.png").default} alt="" width="342" height="21"/>
                      <p className="text-107">언더</p>
                      <img className="line-28" src={require("../imagesHold/line_12.png").default} alt="" width="9" height="28"/>
                    </div>
                    <div className="line-29"></div>
                    <div className="up-2">
                      <div className="arr-3">
                        <img className="ico-24" src={require("../imagesHold/ico_23.png").default} alt="" width="16" height="10"/>
                      </div>
                      <div className="layer-holder">
                        <div className="text-108">
                          <p>1.25</p>
                        </div>
                      </div>
                    </div>
                    <div className="down-2">
                      <div className="layer-holder-2">
                        <div className="text-109">
                          <p>3.3</p>
                        </div>
                      </div>
                      <div className="arr-4">
                        <img className="ico-25" src={require("../imagesHold/ico_24.png").default} alt="" width="16" height="10"/>
                      </div>
                    </div>
                  </div>
                  <div className="group-53">
                    <div className="bg-holder-50">
                      <img className="bg-10" src={require("../imagesHold/bg_161.png").default} alt="" width="342" height="21"/>
                      <p className="text-110">오버</p>
                    </div>
                    <div className="bg-holder-51">
                      <div className="bg-holder-52">
                        <p className="text-111">4.05</p>
                      </div>
                      <img className="line-30" src={require("../imagesHold/line_11.png").default} alt="" width="11" height="35"/>
                    </div>
                    <div className="bg-holder-53">
                      <div className="bg-holder-54">
                        <p className="text-112">언더</p>
                      </div>
                    </div>
                    <div className="line-31"></div>
                    <div className="up-3">
                      <div className="arr-5">
                        <img className="ico-26" src={require("../imagesHold/ico_23.png").default} alt="" width="16" height="10"/>
                      </div>
                      <div className="layer-holder-3">
                        <div className="text-113">
                          <p>1.25</p>
                        </div>
                      </div>
                    </div>
                    <div className="down-3">
                      <div className="layer-holder-4">
                        <div className="text-114">
                          <p>3.3</p>
                        </div>
                      </div>
                      <div className="arr-6">
                        <img className="ico-27" src={require("../imagesHold/ico_24.png").default} alt="" width="16" height="10"/>
                      </div>
                    </div>
                    <img className="line-32" src={require("../imagesHold/line_12.png").default} alt="" width="11" height="35"/>
                  </div>
                </div>
                <div className="group-54">
                  <div className="dot"></div>
                  <p className="text-115">오버언더</p>
                  <div className="bg-holder-55">
                    <div className="bg-holder-56">
                      <img className="ico-28" src={require("../imagesHold/ico_21.png").default} alt="" width="16" height="10"/>
                    </div>
                  </div>
                </div>
                <div className="group-55">
                  <div className="group-56">
                    <div className="bg-holder-57">
                      <div className="row-5">
                        <p className="text-116">오버</p>
                        <p className="text-117">3.15</p>
                      </div>
                    </div>
                    <div className="bg-holder-58">
                      <div className="bg-holder-59">
                        <p className="text-118">4.05</p>
                      </div>
                      <img className="line-33" src={require("../imagesHold/line_11.png").default} alt="" width="11" height="35"/>
                    </div>
                    <div className="bg-holder-60">
                      <div className="row-6">
                        <p className="text-119">1.3</p>
                        <p className="text-120">언더</p>
                      </div>
                      <img className="line-34" src={require("../imagesHold/line_12.png").default} alt="" width="11" height="35"/>
                    </div>
                    <div className="line-35"></div>
                  </div>
                  <div className="group-57">
                    <div className="bg-holder-61">
                      <div className="row-7">
                        <p className="text-121">오버</p>
                        <p className="text-122">1.45</p>
                      </div>
                    </div>
                    <div className="bg-holder-62">
                      <div className="bg-holder-63">
                        <p className="text-123">4.05</p>
                      </div>
                      <img className="line-36" src={require("../imagesHold/line_11.png").default} alt="" width="11" height="35"/>
                    </div>
                    <div className="bg-holder-64">
                      <div className="row-8">
                        <p className="text-124">2.4</p>
                        <p className="text-125">언더</p>
                      </div>
                      <img className="line-37" src={require("../imagesHold/line_12.png").default} alt="" width="11" height="35"/>
                    </div>
                    <div className="line-38"></div>
                  </div>
                </div>
                <div className="col-13">
                  <div className="group-58">
                    <div className="dot-2"></div>
                    <p className="text-126">승무패핸디캡</p>
                    <div className="bg-holder-65">
                      <div className="bg-holder-66">
                        <img className="ico-29" src={require("../imagesHold/ico_21.png").default} alt="" width="16" height="10"/>
                      </div>
                    </div>
                  </div>
                  <div className="group-59">
                    <div className="group-60">
                      <div className="bg-holder-67">
                        <div className="row-2">
                          <p className="text-127">맨체스터유나이티드</p>
                          <p className="text-128">9.50</p>
                        </div>
                      </div>
                      <div className="bg-holder-68">
                        <div className="bg-holder-69">
                          <p className="text-129">5.75</p>
                        </div>
                        <img className="line-39" src={require("../imagesHold/line_11.png").default} alt="" width="11" height="35"/>
                      </div>
                      <div className="bg-holder-70">
                        <div className="row-3">
                          <p className="text-130">1.22</p>
                          <p className="text-131">리버풀</p>
                        </div>
                        <img className="line-40" src={require("../imagesHold/line_12.png").default} alt="" width="11" height="35"/>
                      </div>
                      <div className="line-41"></div>
                    </div>
                    <div className="group-61">
                      <div className="bg-holder-71">
                        <div className="row-4">
                          <p className="text-132">맨체스터유나이티드</p>
                          <p className="text-133">1.30</p>
                        </div>
                      </div>
                      <div className="bg-holder-72">
                        <div className="bg-holder-73">
                          <p className="text-134">4.90</p>
                        </div>
                        <img className="line-42" src={require("../imagesHold/line_11.png").default} alt="" width="11" height="35"/>
                      </div>
                      <div className="bg-holder-74">
                        <img className="bg-11" src={require("../imagesHold/bg_195.png").default} alt="" width="342" height="21"/>
                        <p className="text-135">8.25</p>
                        <p className="text-136">리버풀</p>
                        <img className="line-43" src={require("../imagesHold/line_12.png").default} alt="" width="11" height="35"/>
                      </div>
                      <div className="line-44"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-16">
        <div className="group-62">
          <div className="group-63">
            <div className="col-17">
              <div className="line-45"></div>
              <div className="row-27">
                <img className="ico-30" src={require("../imagesHold/ico_3.png").default} alt="" width="24" height="23"/>
                <p className="betslip">betslip</p>
                <div className="bg-holder-75">
                  <p className="text-137">2</p>
                </div>
              </div>
            </div>
          </div>
          <div className="group-64">
            <div className="wrapper-4">
              <div className="bg-holder-76">
                <div className="bg-12"></div>
              </div>
              <div className="col-10">
                <p className="text-138">싱글</p>
                <div className="bg-13"></div>
              </div>
            </div>
            <div className="bg-holder-77">
              <div className="bg-holder-78">
                <p className="text-139">멀티</p>
              </div>
            </div>
          </div>
          <div className="group-65">
            <div className="bg-holder-79">
              <div className="bg-holder-80">
                <div className="line-46"></div>
                <img className="bg-14" src={require("../imagesHold/bg_56.png").default} alt="" width="187" height="1"/>
                <img className="bg-15" src={require("../imagesHold/bg_57.png").default} alt="" width="1" height="69"/>
                <div className="bg-holder-81">
                  <img className="bg-16" src={require("../imagesHold/bg_59.png").default} alt="" width="348" height="7"/>
                </div>
                <div className="group-66">
                  <div className="wrapper-22">
                    <p className="text-140"><span className="colorffffff">FC바로셀로나 </span><span className="colorc49f58">VS</span><span className="colorffffff"> 레알마드리드</span><br/>승무패(홈) - FC바로셀로나<br/><span className="color909090">6.11</span></p>
                    <p className="text-141">5.01</p>
                    <img className="arr-7" src={require("../imagesHold/arr.png").default} alt="" width="13" height="8"/>
                    <div className="bg-17"></div>
                  </div>
                  <img className="x" src={require("../imagesHold/x.png").default} alt="" width="14" height="14"/>
                </div>
              </div>
            </div>
            <div className="bg-holder-82">
              <div className="bg-holder-83">
                <img className="bg-18" src={require("../imagesHold/bg_57.png").default} alt="" width="1" height="81"/>
                <div className="bg-holder-84">
                  <div className="line-47"></div>
                  <img className="bg-19" src={require("../imagesHold/bg_56.png").default} alt="" width="203" height="1"/>
                  <img className="bg-20" src={require("../imagesHold/bg_59.png").default} alt="" width="360" height="12"/>
                </div>
                <div className="tab">
                  <div className="wrapper-23">
                    <p className="text-142">맨체스터유나이티드 <span className="colorc49f58">VS</span> 리버풀<br/><span className="colore5b877">승무패(원정) - 리버풀</span><br/><span className="color909090">6.11</span></p>
                    <p className="text-143">3.75</p>
                    <img className="arr-8" src={require("../imagesHold/arr_2.png").default} alt="" width="13" height="8"/>
                    <div className="line-48"></div>
                  </div>
                  <img className="x-2" src={require("../imagesHold/x.png").default} alt="" width="14" height="14"/>
                </div>
              </div>
            </div>
          </div>
          <div className="group-67">
            <p className="text-144">보유금액</p>
            <p className="text-145">3,000,000</p>
          </div>
          <div className="group-68">
            <div className="row-22">
              <p className="text-146">최소 베팅금액</p>
              <p className="text-147">5,000</p>
            </div>
            <div className="bg-21"></div>
          </div>
          <div className="group-69">
            <div className="row-21">
              <p className="text-148">최대 베팅금액</p>
              <p className="text-149">1,000,000</p>
            </div>
            <div className="bg-22"></div>
          </div>
          <div className="group-70">
            <div className="row-20">
              <p className="text-150">최대 당첨금액</p>
              <p className="text-151">2,000,000</p>
            </div>
            <div className="bg-23"></div>
          </div>
          <div className="group-71">
            <p className="text-152">최대 베팅배당</p>
            <p className="text-153">0.00</p>
          </div>
          <div className="group-72">
            <p className="text-154">배당률합계</p>
            <p className="text-155">0.00</p>
          </div>
          <div className="group-73">
            <p className="text-156">총적중금액</p>
            <p className="text-157">0</p>
          </div>
          <div className="group-74">
            <p className="text-158">베팅금액</p>
            <div className="row-26">
              <div className="wrapper-9">
                <div className="bg-holder-85">
                  <div className="bg-24"></div>
                </div>
                <div className="col-9">
                  <div className="bg-25"></div>
                  <img className="icon" src={require("../imagesHold/icon.png").default} alt="" width="23" height="19"/>
                </div>
              </div>
              <p className="text-159">0</p>
            </div>
          </div>
          <div className="group-75">
            <div className="group-76">
              <div className="row-33">
                <div className="wrapper-29">
                  <div className="bg-holder-86">
                    <div className="bg-26"></div>
                  </div>
                  <div className="col-3">
                    <img className="bg-27" src={require("../imagesHold/bg_17.png").default} alt="" width="95" height="1"/>
                    <p className="text-160">5,000</p>
                  </div>
                </div>
                <div className="wrapper-30">
                  <div className="bg-holder-87">
                    <div className="bg-28"></div>
                  </div>
                  <div className="col-4">
                    <img className="bg-29" src={require("../imagesHold/bg_17.png").default} alt="" width="109" height="1"/>
                    <p className="text-161">10,000</p>
                  </div>
                </div>
                <div className="wrapper-31">
                  <div className="bg-holder-88">
                    <div className="bg-30"></div>
                  </div>
                  <div className="col-5">
                    <img className="bg-31" src={require("../imagesHold/bg_17.png").default} alt="" width="109" height="1"/>
                    <p className="text-162">50,000</p>
                  </div>
                </div>
              </div>
              <div className="row-34">
                <div className="wrapper-32">
                  <div className="bg-holder-89">
                    <div className="bg-32"></div>
                  </div>
                  <div className="col-6">
                    <img className="bg-33" src={require("../imagesHold/bg_17.png").default} alt="" width="109" height="1"/>
                    <p className="text-163">100,000</p>
                  </div>
                </div>
                <div className="wrapper-33">
                  <div className="bg-holder-90">
                    <div className="bg-34"></div>
                  </div>
                  <div className="col-7">
                    <img className="bg-35" src={require("../imagesHold/bg_17.png").default} alt="" width="109" height="1"/>
                    <p className="text-164">1,000,000</p>
                  </div>
                </div>
                <div className="wrapper-34">
                  <div className="bg-holder-91">
                    <div className="bg-36"></div>
                  </div>
                  <div className="bg-holder-92">
                    <div className="col-8">
                      <img className="bg-37" src={require("../imagesHold/bg_38.png").default} alt="" width="101" height="1"/>
                      <p className="text-165">최대</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-77">
            <div className="wrapper-2">
              <div className="bg-holder-93">
                <div className="bg-38"></div>
              </div>
              <div className="col">
                <img className="bg-39" src={require("../imagesHold/bg_6.png").default} alt="" width="144" height="1"/>
                <div className="group-78">
                  <img className="ico-31" src={require("../imagesHold/ico.png").default} alt="" width="14" height="14"/>
                  <p className="text-166">전체취소</p>
                </div>
              </div>
            </div>
            <div className="wrapper-3">
              <div className="bg-holder-94">
                <div className="bg-40"></div>
              </div>
              <div className="bg-holder-95">
                <div className="bg-41"></div>
              </div>
              <div className="col-2">
                <img className="bg-42" src={require("../imagesHold/bg_12.png").default} alt="" width="150" height="1"/>
                <div className="group-79">
                  <img className="ico-32" src={require("../imagesHold/ico_2.png").default} alt="" width="16" height="16"/>
                  <p className="text-167">베팅하기</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-80">
          <div className="group-81">
            <div className="col-18">
              <div className="bg-43"></div>
              <div className="row-36">
                <img className="ico-33" src={require("../imagesHold/ico_6.png").default} alt="" width="24" height="14"/>
                <p className="text-168">나의 베팅내역</p>
                <div className="wrapper-35">
                  <div className="bg-holder-96">
                    <div className="bg-44"></div>
                  </div>
                  <div className="bg-holder-97">
                    <div className="col-22">
                      <div className="bg-45"></div>
                      <div className="row-31">
                        <p className="text-169">10</p>
                        <img className="ico-34" src={require("../imagesHold/ico_5.png").default} alt="" width="23" height="19"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-82">
            <p className="text-170"><span className="colorffffff">ID : </span>186123533</p>
            <p className="text-171">2020-05-16 03:45:11</p>
          </div>
          <div className="group-83">
            <div className="bg-holder-98">
              <div className="line-49"></div>
              <img className="bg-46" src={require("../imagesHold/bg_90.png").default} alt="" width="185" height="1"/>
              <img className="bg-47" src={require("../imagesHold/bg_91.png").default} alt="" width="1" height="51"/>
              <img className="bg-48" src={require("../imagesHold/bg_92.png").default} alt="" width="360" height="28"/>
              <img className="bg-49" src={require("../imagesHold/bg_59.png").default} alt="" width="360" height="12"/>
              <p className="text-172"><span className="colorffffff">FC바로셀로나 </span><span className="colorc49f58">VS</span><span className="colorffffff"> 레알마드리드</span><br/>승무패(홈) - FC바로셀로나  <span className="color4195c1">5.01</span></p>
            </div>
          </div>
          <div className="group-84">
            <div className="bg-holder-99">
              <div className="line-50"></div>
              <img className="bg-50" src={require("../imagesHold/bg_90.png").default} alt="" width="203" height="1"/>
              <img className="bg-51" src={require("../imagesHold/bg_91.png").default} alt="" width="1" height="59"/>
              <img className="bg-52" src={require("../imagesHold/bg_92.png").default} alt="" width="360" height="48"/>
              <img className="bg-53" src={require("../imagesHold/bg_59.png").default} alt="" width="360" height="12"/>
              <p className="text-173">맨체스터유나이티드 <span className="colorc49f58">VS</span> 리버풀<br/><span className="colore5b877">승무패(원정) - 리버풀</span>  <span className="color4195c1">3.75</span></p>
            </div>
          </div>
          <div className="group-85">
            <div className="row-25">
              <p className="text-174">배당률</p>
              <p className="text-175">6.10</p>
            </div>
            <div className="bg-54"></div>
          </div>
          <div className="group-86">
            <div className="row-24">
              <p className="text-176">베팅금액</p>
              <p className="text-177">30,000</p>
            </div>
            <div className="bg-55"></div>
          </div>
          <div className="group-87">
            <div className="row-23">
              <p className="text-178">적중금액</p>
              <p className="text-179">베팅대기중</p>
              <p className="text-180">183,000</p>
            </div>
            <div className="bg-56"></div>
          </div>
          <div className="group-88">
            <div className="bg-holder-100">
              <div className="bg-57"></div>
            </div>
            <div className="bg-holder-101">
              <div className="col-11">
                <img className="bg-58" src={require("../imagesHold/bg_81.png").default} alt="" width="311" height="1"/>
                <div className="group-89">
                  <img className="ico-35" src={require("../imagesHold/ico_4.png").default} alt="" width="15" height="14"/>
                  <p className="text-181">전체보기</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}
