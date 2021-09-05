import React from "react";
import LiveMatchCards from "./LiveMatchCards";
import LiveUpcomingMatchesCount from "./LiveUpcomingMatchesCount";
import MatchBets from "./MatchBets";
import UpcomingMatches from "./UpcomingMatches";

export default function SingleView() {
    return (
        <div
            className="hide-scrollbar-bet-page"
            style={{
                height: "954px",
                left: "0",
                position: "absolute",
                top: "126px",
                width: "1550px",
                overflowY: "scroll",
                overflowX: "hidden",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    left: "0",
                    position: "absolute",
                    top: "0",
                    width: "681px",
                }}
            >
                <LiveMatchCards />
                <LiveUpcomingMatchesCount />
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
                        src={require("../imagesHold/image_37.png").default}
                        alt=""
                        width="16"
                        height="8"
                    />
                </div>
                <MatchBets />
            </div>
        </div>
    );
}
