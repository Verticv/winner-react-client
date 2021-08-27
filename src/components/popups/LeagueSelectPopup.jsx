import { viewTypes } from "helpers/constants";
import React, { useRef } from "react";
import useStore from "store/useStore";
import { useOnClickOutside } from "../../helpers/functions";
import "./LeagueSelectPopup.css";

export default function LeagueSelectPopup(props) {
    const { selectedView, changeView } = useStore((state) => state);
    const ref = useRef();
    useOnClickOutside(ref, () => changeView(viewTypes.chronological));
    return (
        selectedView === viewTypes.selectLeague && (
            <div style={{position: 'absolute', top: 0, left: 0, zIndex: 5, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', overflow:'hidden'}}>
                <div
                    style={{ zIndex: 10 }}
                    className="main-live-league-group-3"
                    ref={ref}
                >
                    <div className="main-live-league-bg-holder">
                        <div className="main-live-league-bg-holder-2">
                            <div className="main-live-league-line"></div>
                            <div className="main-live-league-line-2"></div>
                            <div className="main-live-league-line-3"></div>
                            <p className="main-live-league-text">리그선택</p>
                            <img
                                className="main-live-league-x"
                                src={require("../../imagesHold/x_3.png").default}
                                alt=""
                                width="14"
                                height="14"
                            />
                        </div>
                    </div>
                    <div className="main-live-league-bg-holder-3">
                        <div className="main-live-league-col">
                            <div className="main-live-league-group-4">
                                <div className="main-live-league-chck"></div>
                                <p className="main-live-league-text-2">
                                    모든 리그 선택
                                </p>
                            </div>
                            <div className="main-live-league-group-5">
                                <div className="main-live-league-col-2">
                                    <div className="main-live-league-row">
                                        <div className="main-live-league-col-4">
                                            <div className="main-live-league-chck-2"></div>
                                            <div className="main-live-league-chck-3"></div>
                                        </div>
                                        <div className="main-live-league-col-8">
                                            <div className="main-live-league-row-6">
                                                <img
                                                    className="main-live-league-layer"
                                                    src={
                                                        require("../../imagesHold/image_141.png")
                                                            .default
                                                    }
                                                    alt=""
                                                    width="30"
                                                    height="18"
                                                />
                                                <p className="main-live-league-text-3">
                                                    라리가
                                                </p>
                                            </div>
                                            <div className="main-live-league-row-7">
                                                <img
                                                    className="main-live-league-layer-2"
                                                    src={
                                                        require("../../imagesHold/image_145.png")
                                                            .default
                                                    }
                                                    alt=""
                                                    width="30"
                                                    height="18"
                                                />
                                                <p className="main-live-league-text-4">
                                                    분데스리가
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-live-league-row-3">
                                        <div className="main-live-league-col-6">
                                            <div className="main-live-league-chc-holder">
                                                <img
                                                    className="main-live-league-chx-ck"
                                                    src={
                                                        require("../../imagesHold/chx_ck.png")
                                                            .default
                                                    }
                                                    alt=""
                                                    width="16"
                                                    height="12"
                                                />
                                            </div>
                                            <div className="main-live-league-chck-4"></div>
                                        </div>
                                        <div className="main-live-league-col-10">
                                            <div className="main-live-league-row-10">
                                                <img
                                                    className="main-live-league-layer-3"
                                                    src={
                                                        require("../../imagesHold/image_149.png")
                                                            .default
                                                    }
                                                    alt=""
                                                    width="30"
                                                    height="18"
                                                />
                                                <p className="main-live-league-text-5">
                                                    프리미어리그
                                                </p>
                                            </div>
                                            <div className="main-live-league-row-11">
                                                <img
                                                    className="main-live-league-layer-4"
                                                    src={
                                                        require("../../imagesHold/image_153.png")
                                                            .default
                                                    }
                                                    alt=""
                                                    width="30"
                                                    height="18"
                                                />
                                                <p className="main-live-league-text-6">
                                                    라리가
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-live-league-col-3">
                                    <div className="main-live-league-row-2">
                                        <div className="main-live-league-col-5">
                                            <div className="main-live-league-chck-5"></div>
                                            <div className="main-live-league-chck-6"></div>
                                        </div>
                                        <div className="main-live-league-col-9">
                                            <div className="main-live-league-row-8">
                                                <img
                                                    className="main-live-league-layer-5"
                                                    src={
                                                        require("../../imagesHold/image_143.png")
                                                            .default
                                                    }
                                                    alt=""
                                                    width="29"
                                                    height="18"
                                                />
                                                <p className="main-live-league-text-7">
                                                    프리미어리그
                                                </p>
                                            </div>
                                            <div className="main-live-league-row-9">
                                                <img
                                                    className="main-live-league-layer-6"
                                                    src={
                                                        require("../../imagesHold/image_147.png")
                                                            .default
                                                    }
                                                    alt=""
                                                    width="29"
                                                    height="18"
                                                />
                                                <p className="main-live-league-text-8">
                                                    라리가
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-live-league-row-4">
                                        <div className="main-live-league-chck-7"></div>
                                        <img
                                            className="main-live-league-layer-7"
                                            src={
                                                require("../../imagesHold/image_145.png")
                                                    .default
                                            }
                                            alt=""
                                            width="30"
                                            height="18"
                                        />
                                        <p className="main-live-league-text-9">
                                            분데스리가
                                        </p>
                                    </div>
                                    <div className="main-live-league-row-5">
                                        <div className="main-live-league-chck-8"></div>
                                        <img
                                            className="main-live-league-layer-8"
                                            src={
                                                require("../../imagesHold/image_149.png")
                                                    .default
                                            }
                                            alt=""
                                            width="30"
                                            height="18"
                                        />
                                        <p className="main-live-league-text-10">
                                            프리미어리그
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-live-league-bg-holder-4">
                        <div className="main-live-league-bg-holder-5">
                            <div className="main-live-league-group-6">
                                <div className="main-live-league-wrapper-3">
                                    <div className="main-live-league-bg-holder-6">
                                        <div className="main-live-league-bg"></div>
                                    </div>
                                    <div className="main-live-league-bg-holder-7">
                                        <p className="main-live-league-text-11">
                                            취소
                                        </p>
                                    </div>
                                </div>
                                <div className="main-live-league-wrapper-4">
                                    <div className="main-live-league-bg-holder-8">
                                        <div className="main-live-league-bg-2"></div>
                                    </div>
                                    <div className="main-live-league-bg-holder-9">
                                        <div className="main-live-league-bg-holder-10">
                                            <p className="main-live-league-text-12">
                                                확인
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> )
    );
}
