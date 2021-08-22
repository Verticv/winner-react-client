import getRandomNumberInInterval from "helpers/getRandomNumberInInterval";
import React from "react";
import MatchDetail from "./MatchBet";
import MatchBetsTabs from "./MatchBetsTabs";

export default function MatchDetails() {
    const matchBets = [
        {
            id: 0,
            betType: "홈팀 오버언더",
            option1: "오버",
            option2: "언더",
            kof1: getRandomNumberInInterval(1.5, 5).toFixed(2),
            kof2: getRandomNumberInInterval(1.5, 5).toFixed(2),
            tieKof: getRandomNumberInInterval(1.5, 5).toFixed(2),
        },
        {
            id: 1,
            betType: "오버언더",
            option1: "오버",
            option2: "언더",
            kof1: getRandomNumberInInterval(1.5, 5).toFixed(2),
            kof2: getRandomNumberInInterval(1.5, 5).toFixed(2),
            tieKof: getRandomNumberInInterval(1.5, 5).toFixed(2),
        },
        {
            id: 2,
            betType: "승무패핸디캡",
            option1: "맨체스터유나이티드",
            option2: "리버풀",
            kof1: getRandomNumberInInterval(1.5, 5).toFixed(2),
            kof2: getRandomNumberInInterval(1.5, 5).toFixed(2),
            tieKof: getRandomNumberInInterval(1.5, 5).toFixed(2),
        },
    ];
    return (
        <>
            <MatchBetsTabs/>
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
                    {matchBets.map((matchBet) => {
                        return <MatchDetail key={matchBet.id} bet={matchBet} />;
                    })}
                </div>
            </div>
        </>
    );
}
