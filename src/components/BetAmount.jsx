import React from "react";
import BetAmountDetails from "./BetAmountDetails";
import BetSlipBet from "./BetSlipBet";

export default function BetAmount() {
    return (
        <div
            style={{
                position: "absolute",
                top: "81px",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
            }}
        >
            <BetSlipBet />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "35px",
                    width: "360px",
                    background:
                        "linear-gradient(90deg, #2a2a34 0, #1a1a20 100%)",
                    padding: "0 8px",
                }}
            >
                <p className="text-144">보유금액</p>
                <p className="text-145">3,000,000</p>
            </div>
            <BetAmountDetails />
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
                                src={require("../imagesHold/icon.png").default}
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
                            src={require("../imagesHold/bg_6.png").default}
                            alt=""
                            width="144"
                            height="1"
                        />
                        <div className="group-78">
                            <img
                                className="ico-31"
                                src={require("../imagesHold/ico.png").default}
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
                            src={require("../imagesHold/bg_12.png").default}
                            alt=""
                            width="150"
                            height="1"
                        />
                        <div className="group-79">
                            <img
                                className="ico-32"
                                src={require("../imagesHold/ico_2.png").default}
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
    );
}
