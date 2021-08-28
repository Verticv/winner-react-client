import SelectableLeague from "components/SelectableLeague";
import { viewTypes } from "helpers/constants";
import React, { useRef } from "react";
import useStore from "store/useStore";
import { useOnClickOutside } from "../../helpers/functions";
import "./LeagueSelectPopup.css";

export default function LeagueSelectPopup(props) {
    const leagues = [
        {
            id: 0,
            name: "라리가",
            flag: require("../../imagesHold/image_141.png").default,
        },
        {
            id: 1,
            name: "분데스리가",
            flag: require("../../imagesHold/image_145.png").default,
        },
        {
            id: 2,
            name: "프리미어리그",
            flag: require("../../imagesHold/image_149.png").default,
        },
        {
            id: 3,
            name: "라리가",
            flag: require("../../imagesHold/image_153.png").default,
        },
        {
            id: 4,
            name: "프리미어리그",
            flag: require("../../imagesHold/image_143.png").default,
        },
        {
            id: 5,
            name: "라리가",
            flag: require("../../imagesHold/image_147.png").default,
        },
        {
            id: 6,
            name: "분데스리가",
            flag: require("../../imagesHold/image_145.png").default,
        },
        {
            id: 7,
            name: "프리미어리그",
            flag: require("../../imagesHold/image_149.png").default,
        },
    ];
    const { selectedView, changeView, selectedLeague, changeLeague } = useStore((state) => state);
    const ref = useRef();
    useOnClickOutside(ref, () => changeView(viewTypes.chronological));
    return (
        selectedView === viewTypes.selectLeague && (
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 5,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.6)",
                    overflow: "hidden",
                }}
            >
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
                                src={
                                    require("../../imagesHold/x_3.png").default
                                }
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
                                <p
                                    style={{ whiteSpace: "nowrap" }}
                                    className="main-live-league-text-2"
                                >
                                    모든 리그 선택
                                </p>
                            </div>
                            <div className="main-live-league-group-5">
                                <div style={{display: "flex", justifyContent: 'space-between', flexDirection:'column'}} className="main-live-league-col-2">
                                    {leagues
                                        .slice(
                                            0,
                                            Math.ceil(leagues.length / 2)
                                        )
                                        .map((league) => {
                                            return (
                                                <SelectableLeague
                                                    key={league.id + 'league-select'}
                                                    league={league}
                                                />
                                            );
                                        })}
                                </div>
                                <div style={{display: "flex", justifyContent: 'space-between', flexDirection:'column'}} className="main-live-league-col-3">
                                    {leagues
                                        .slice(
                                            Math.floor(leagues.length / 2),
                                            leagues.length
                                        )
                                        .map((league) => {
                                            return (
                                                <SelectableLeague
                                                    key={
                                                        league.id +
                                                        "league-select"
                                                    }
                                                    league={league}
                                                />
                                            );
                                        })}
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
            </div>
        )
    );
}
