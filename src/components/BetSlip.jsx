import React from 'react'
import BetAmount from './BetAmount';
import BetSlipBets from './BetSlipBets';
import BetSlipLayout from './BetSlipLayout';

export default function BetSlip() {
    return (
        <div className="col-16">
            <div
                style={{
                    position: "relative",
                    width: "360px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                }}
            >
                <div
                    style={{
                        height: "40px",
                        width: "360px",
                        background:
                            "linear-gradient(90deg, #2c2c34 0, #24242a 100%)",
                    }}
                >
                    <div className="col-17">
                        <div className="line-45"></div>
                        <div className="row-27">
                            <img
                                className="ico-30"
                                src={require("../imagesHold/ico_3.png").default}
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
                <BetSlipLayout />
                <BetSlipBets />
                <BetAmount />
            </div>
            <div className="group-80">
                <div className="group-81">
                    <div className="col-18">
                        <div className="bg-43"></div>
                        <div className="row-36">
                            <img
                                className="ico-33"
                                src={require("../imagesHold/ico_6.png").default}
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
                            <span className="colorffffff">FC바로셀로나 </span>
                            <span className="colorc49f58">VS</span>
                            <span className="colorffffff"> 레알마드리드</span>
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
                                src={require("../imagesHold/bg_81.png").default}
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
    );
}
