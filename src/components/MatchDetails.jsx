import React from "react";
import MatchDetail from "./MatchDetail";

export default function MatchDetails() {
    return (
        <div className="group-49">
            <div className="bg-holder-42">
                <div className="bg-holder-43">
                    <div className="bg-holder-44">
                        <img
                            className="bg-7"
                            src={require("../imagesHold/bg_143.png").default}
                            alt=""
                            width="729"
                            height="386"
                        />
                    </div>
                </div>
            </div>
            <img
                className="line-25"
                src={require("../imagesHold/line_7.png").default}
                alt=""
                width="282"
                height="349"
            />
            <img
                className="line-26"
                src={require("../imagesHold/line_8.png").default}
                alt=""
                width="282"
                height="349"
            />
            <div className="col-12">
                <div className="group-50">
                    <div className="ico-22"></div>
                    <p className="text-104">홈팀 오버언더</p>
                    <div className="bg-holder-45">
                        <div className="bg-holder-46">
                            <img
                                className="ico-23"
                                src={
                                    require("../imagesHold/ico_21.png").default
                                }
                                alt=""
                                width="16"
                                height="10"
                            />
                        </div>
                    </div>
                </div>
                <div className="group-51">
                    <div className="group-52">
                        <div className="bg-holder-47">
                            <p className="text-105">오버</p>
                        </div>
                        <div className="bg-holder-48">
                            <img
                                className="bg-8"
                                src={
                                    require("../imagesHold/bg_155.png").default
                                }
                                alt=""
                                width="165"
                                height="18"
                            />
                            <p className="text-106">4.05</p>
                            <img
                                className="line-27"
                                src={
                                    require("../imagesHold/line_11.png").default
                                }
                                alt=""
                                width="9"
                                height="28"
                            />
                        </div>
                        <div className="bg-holder-49">
                            <img
                                className="bg-9"
                                src={
                                    require("../imagesHold/bg_157.png").default
                                }
                                alt=""
                                width="342"
                                height="21"
                            />
                            <p className="text-107">언더</p>
                            <img
                                className="line-28"
                                src={
                                    require("../imagesHold/line_12.png").default
                                }
                                alt=""
                                width="9"
                                height="28"
                            />
                        </div>
                        <div className="line-29"></div>
                        <div className="up-2">
                            <div className="arr-3">
                                <img
                                    className="ico-24"
                                    src={
                                        require("../imagesHold/ico_23.png")
                                            .default
                                    }
                                    alt=""
                                    width="16"
                                    height="10"
                                />
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
                                <img
                                    className="ico-25"
                                    src={
                                        require("../imagesHold/ico_24.png")
                                            .default
                                    }
                                    alt=""
                                    width="16"
                                    height="10"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="group-53">
                        <div className="bg-holder-50">
                            <img
                                className="bg-10"
                                src={
                                    require("../imagesHold/bg_161.png").default
                                }
                                alt=""
                                width="342"
                                height="21"
                            />
                            <p className="text-110">오버</p>
                        </div>
                        <div className="bg-holder-51">
                            <div className="bg-holder-52">
                                <p className="text-111">4.05</p>
                            </div>
                            <img
                                className="line-30"
                                src={
                                    require("../imagesHold/line_11.png").default
                                }
                                alt=""
                                width="11"
                                height="35"
                            />
                        </div>
                        <div className="bg-holder-53">
                            <div className="bg-holder-54">
                                <p className="text-112">언더</p>
                            </div>
                        </div>
                        <div className="line-31"></div>
                        <div className="up-3">
                            <div className="arr-5">
                                <img
                                    className="ico-26"
                                    src={
                                        require("../imagesHold/ico_23.png")
                                            .default
                                    }
                                    alt=""
                                    width="16"
                                    height="10"
                                />
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
                                <img
                                    className="ico-27"
                                    src={
                                        require("../imagesHold/ico_24.png")
                                            .default
                                    }
                                    alt=""
                                    width="16"
                                    height="10"
                                />
                            </div>
                        </div>
                        <img
                            className="line-32"
                            src={require("../imagesHold/line_12.png").default}
                            alt=""
                            width="11"
                            height="35"
                        />
                    </div>
                </div>
                <MatchDetail />
            </div>
        </div>
    );
}
