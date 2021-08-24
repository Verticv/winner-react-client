import React, { useState } from "react";

export default function LiveMatchCoefficient({
    team1,
    team1WinKof,
    tieKof,
    team2,
    team2WinKof,
}) {
    const selections = { team1: 3, team2: 1, draw: 2, none: 0 };
    const [selectedOutcome, setSelectedOutcome] = useState(selections.none);
    function handleSetSelectedOutcome(outcome) {
        setSelectedOutcome(outcome);
    }
    return (
        <div className="btn-4">
            <button
                style={
                    selectedOutcome === selections.team1
                        ? {
                              background: `linear-gradient(270deg, rgb(91 30 30) 0px, rgb(155, 47, 48) 40%)`,
                              zIndex: 0,
                          }
                        : { zIndex: 2 }
                }
                onClick={(event) => {
                    event.stopPropagation();
                    handleSetSelectedOutcome(selections.team1);
                }}
                className="row-17"
            >
                <p className="text-59">{team1}</p>
                <p className="text-60">{team1WinKof}</p>
            </button>
            <div className="wrapper-21">
                <button
                    style={
                        selectedOutcome === selections.draw
                            ? {
                                  background: "rgb(91,30,30)",
                                  background:
                                      "radial-gradient(circle, rgba(91,30,30,1) 0%, rgba(155,47,48,1) 94%)",
                                  zIndex: 0,
                              }
                            : { zIndex: 1 }
                    }
                    onClick={(event) => {
                        event.stopPropagation();
                        handleSetSelectedOutcome(selections.draw);
                    }}
                    className="row-18"
                >
                    <img
                        className="line-11"
                        src={require("../imagesHold/line_31.png").default}
                        alt=""
                        width="11"
                        height="32"
                    />
                    <p className="text-61">{tieKof}</p>
                </button>
                <button
                    style={
                        selectedOutcome === selections.team2
                            ? {
                                  background: `linear-gradient(90deg, rgb(91 30 30) 0px, rgb(155, 47, 48) 40%)`,
                              }
                            : {}
                    }
                    onClick={(event) => {
                        event.stopPropagation();
                        handleSetSelectedOutcome(selections.team2);
                    }}
                    className="row-19"
                >
                    <p className="text-62">{team2WinKof}</p>
                    <p className="text-63">{team2}</p>
                </button>
                <img
                    className="line-12"
                    src={require("../imagesHold/line_32.png").default}
                    alt=""
                    width="11"
                    height="32"
                />
            </div>
        </div>
    );
}
