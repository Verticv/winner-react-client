import BetNav from "components/BetNav";
import BetSlipBet from "components/BetSlipBet";
import LiveMatchCards from "components/LiveMatchCards";
import MatchBets from "components/MatchBets";
import LeagueSelectPopup from "components/popups/LeagueSelectPopup";
import SelectLayoutButtons from "components/SelectLayoutButtons";
import UpcomingMatches from "components/UpcomingMatches";
import ViewSelectButtons from "components/ViewSelectButtons";
import React from "react";

// import football from "../imagesDump/bet/icon-ufc.png").default};
// import favorites from "../imagesDump/bet/icon-ufc.png").default};
// import web from "../imagesDump/bet/icon-ufc.png").default};
// import volleyball from "../imagesDump/bet/icon-ufc.png").default};
// import hockey from "../imagesDump/bet/icon-ufc.png").default};
// import placeholder from "../imagesDump/bet/icon-ufc.png").default};
import "../components/BetNavItem.css";

export default function BetPage() {
    return (
        <div className="global_container_">
            <LeagueSelectPopup />
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
                        <ViewSelectButtons />
                    </div>
                </div>
                <div className="row-42">
                    <div className="group-26">
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
                        <UpcomingMatches />
                    </div>
                    <div className="group-46">
                        <div className="row">
                            <p className="text-97">2</p>
                            <p className="text-98">0</p>
                        </div>
                        <div className="group-47">
                            <img
                                className="layer-36"
                                src={
                                    require("../imagesHold/image_37.png")
                                        .default
                                }
                                alt=""
                                width="16"
                                height="8"
                            />
                        </div>
                        <MatchBets />
                    </div>
                </div>
            </div>
            <div className="col-16">
                <div className="group-62">
                    <div className="group-63">
                        <div className="col-17">
                            <div className="line-45"></div>
                            <div className="row-27">
                                <img
                                    className="ico-30"
                                    src={
                                        require("../imagesHold/ico_3.png")
                                            .default
                                    }
                                    alt=""
                                    width="24"
                                    height="23"
                                />
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
                        <BetSlipBet/>
                        <div className="bg-holder-82">
                            <div className="bg-holder-83">
                                <img
                                    className="bg-18"
                                    src={
                                        require("../imagesHold/bg_57.png")
                                            .default
                                    }
                                    alt=""
                                    width="1"
                                    height="81"
                                />
                                <div className="bg-holder-84">
                                    <div className="line-47"></div>
                                    <img
                                        className="bg-19"
                                        src={
                                            require("../imagesHold/bg_56.png")
                                                .default
                                        }
                                        alt=""
                                        width="203"
                                        height="1"
                                    />
                                    <img
                                        className="bg-20"
                                        src={
                                            require("../imagesHold/bg_59.png")
                                                .default
                                        }
                                        alt=""
                                        width="360"
                                        height="12"
                                    />
                                </div>
                                <div className="tab">
                                    <div className="wrapper-23">
                                        <p className="text-142">
                                            맨체스터유나이티드{" "}
                                            <span className="colorc49f58">
                                                VS
                                            </span>{" "}
                                            리버풀
                                            <br />
                                            <span className="colore5b877">
                                                승무패(원정) - 리버풀
                                            </span>
                                            <br />
                                            <span className="color909090">
                                                6.11
                                            </span>
                                        </p>
                                        <p className="text-143">3.75</p>
                                        <img
                                            className="arr-8"
                                            src={
                                                require("../imagesHold/arr_2.png")
                                                    .default
                                            }
                                            alt=""
                                            width="13"
                                            height="8"
                                        />
                                        <div className="line-48"></div>
                                    </div>
                                    <img
                                        className="x-2"
                                        src={
                                            require("../imagesHold/x.png")
                                                .default
                                        }
                                        alt=""
                                        width="14"
                                        height="14"
                                    />
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
                                    <img
                                        className="icon"
                                        src={
                                            require("../imagesHold/icon.png")
                                                .default
                                        }
                                        alt=""
                                        width="23"
                                        height="19"
                                    />
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
                                        <img
                                            className="bg-27"
                                            src={
                                                require("../imagesHold/bg_17.png")
                                                    .default
                                            }
                                            alt=""
                                            width="95"
                                            height="1"
                                        />
                                        <p className="text-160">5,000</p>
                                    </div>
                                </div>
                                <div className="wrapper-30">
                                    <div className="bg-holder-87">
                                        <div className="bg-28"></div>
                                    </div>
                                    <div className="col-4">
                                        <img
                                            className="bg-29"
                                            src={
                                                require("../imagesHold/bg_17.png")
                                                    .default
                                            }
                                            alt=""
                                            width="109"
                                            height="1"
                                        />
                                        <p className="text-161">10,000</p>
                                    </div>
                                </div>
                                <div className="wrapper-31">
                                    <div className="bg-holder-88">
                                        <div className="bg-30"></div>
                                    </div>
                                    <div className="col-5">
                                        <img
                                            className="bg-31"
                                            src={
                                                require("../imagesHold/bg_17.png")
                                                    .default
                                            }
                                            alt=""
                                            width="109"
                                            height="1"
                                        />
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
                                        <img
                                            className="bg-33"
                                            src={
                                                require("../imagesHold/bg_17.png")
                                                    .default
                                            }
                                            alt=""
                                            width="109"
                                            height="1"
                                        />
                                        <p className="text-163">100,000</p>
                                    </div>
                                </div>
                                <div className="wrapper-33">
                                    <div className="bg-holder-90">
                                        <div className="bg-34"></div>
                                    </div>
                                    <div className="col-7">
                                        <img
                                            className="bg-35"
                                            src={
                                                require("../imagesHold/bg_17.png")
                                                    .default
                                            }
                                            alt=""
                                            width="109"
                                            height="1"
                                        />
                                        <p className="text-164">1,000,000</p>
                                    </div>
                                </div>
                                <div className="wrapper-34">
                                    <div className="bg-holder-91">
                                        <div className="bg-36"></div>
                                    </div>
                                    <div className="bg-holder-92">
                                        <div className="col-8">
                                            <img
                                                className="bg-37"
                                                src={
                                                    require("../imagesHold/bg_38.png")
                                                        .default
                                                }
                                                alt=""
                                                width="101"
                                                height="1"
                                            />
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
                                <img
                                    className="bg-39"
                                    src={
                                        require("../imagesHold/bg_6.png")
                                            .default
                                    }
                                    alt=""
                                    width="144"
                                    height="1"
                                />
                                <div className="group-78">
                                    <img
                                        className="ico-31"
                                        src={
                                            require("../imagesHold/ico.png")
                                                .default
                                        }
                                        alt=""
                                        width="14"
                                        height="14"
                                    />
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
                                <img
                                    className="bg-42"
                                    src={
                                        require("../imagesHold/bg_12.png")
                                            .default
                                    }
                                    alt=""
                                    width="150"
                                    height="1"
                                />
                                <div className="group-79">
                                    <img
                                        className="ico-32"
                                        src={
                                            require("../imagesHold/ico_2.png")
                                                .default
                                        }
                                        alt=""
                                        width="16"
                                        height="16"
                                    />
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
                                <img
                                    className="ico-33"
                                    src={
                                        require("../imagesHold/ico_6.png")
                                            .default
                                    }
                                    alt=""
                                    width="24"
                                    height="14"
                                />
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
                                                <img
                                                    className="ico-34"
                                                    src={
                                                        require("../imagesHold/ico_5.png")
                                                            .default
                                                    }
                                                    alt=""
                                                    width="23"
                                                    height="19"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group-82">
                        <p className="text-170">
                            <span className="colorffffff">ID : </span>186123533
                        </p>
                        <p className="text-171">2020-05-16 03:45:11</p>
                    </div>
                    <div className="group-83">
                        <div className="bg-holder-98">
                            <div className="line-49"></div>
                            <img
                                className="bg-46"
                                src={require("../imagesHold/bg_90.png").default}
                                alt=""
                                width="185"
                                height="1"
                            />
                            <img
                                className="bg-47"
                                src={require("../imagesHold/bg_91.png").default}
                                alt=""
                                width="1"
                                height="51"
                            />
                            <img
                                className="bg-48"
                                src={require("../imagesHold/bg_92.png").default}
                                alt=""
                                width="360"
                                height="28"
                            />
                            <img
                                className="bg-49"
                                src={require("../imagesHold/bg_59.png").default}
                                alt=""
                                width="360"
                                height="12"
                            />
                            <p className="text-172">
                                <span className="colorffffff">
                                    FC바로셀로나{" "}
                                </span>
                                <span className="colorc49f58">VS</span>
                                <span className="colorffffff">
                                    {" "}
                                    레알마드리드
                                </span>
                                <br />
                                승무패(홈) - FC바로셀로나{" "}
                                <span className="color4195c1">5.01</span>
                            </p>
                        </div>
                    </div>
                    <div className="group-84">
                        <div className="bg-holder-99">
                            <div className="line-50"></div>
                            <img
                                className="bg-50"
                                src={require("../imagesHold/bg_90.png").default}
                                alt=""
                                width="203"
                                height="1"
                            />
                            <img
                                className="bg-51"
                                src={require("../imagesHold/bg_91.png").default}
                                alt=""
                                width="1"
                                height="59"
                            />
                            <img
                                className="bg-52"
                                src={require("../imagesHold/bg_92.png").default}
                                alt=""
                                width="360"
                                height="48"
                            />
                            <img
                                className="bg-53"
                                src={require("../imagesHold/bg_59.png").default}
                                alt=""
                                width="360"
                                height="12"
                            />
                            <p className="text-173">
                                맨체스터유나이티드{" "}
                                <span className="colorc49f58">VS</span> 리버풀
                                <br />
                                <span className="colore5b877">
                                    승무패(원정) - 리버풀
                                </span>{" "}
                                <span className="color4195c1">3.75</span>
                            </p>
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
                                <img
                                    className="bg-58"
                                    src={
                                        require("../imagesHold/bg_81.png")
                                            .default
                                    }
                                    alt=""
                                    width="311"
                                    height="1"
                                />
                                <div className="group-89">
                                    <img
                                        className="ico-35"
                                        src={
                                            require("../imagesHold/ico_4.png")
                                                .default
                                        }
                                        alt=""
                                        width="15"
                                        height="14"
                                    />
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
