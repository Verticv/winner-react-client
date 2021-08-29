import React from 'react'
import LiveMatchCards from './LiveMatchCards';
import MatchBets from './MatchBets';
import UpcomingMatches from './UpcomingMatches';

export default function SingleView() {
    return (
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
