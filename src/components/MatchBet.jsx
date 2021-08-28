import jss from "jss";
import React, { useState } from "react";

export default function MatchDetail({ bet }) {
    const styles = {
        expandButton: `
            height: 28px;
            left: 796px;
            position: absolute;
            top: 0;
            width: 28px;
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            border-radius: 3px;
            background: rgba(255, 255, 255, 0.2);
        `,
        betTitle: `
                left: 8px;
                top: 12px;
                padding: 24px;
                position: relative;
                height: 28px;
        `,
        betOptions: `

                position: relative;
                height: 74px;
            `,
        team2: `
                height: 35px;
                left: 497px;
                position: absolute;
                top: 0;
                width: 342px;
                display: flex;
                justify-content: space-between;
                padding-right: 8px;
            `,
        option2Name: `
                white-space: nowrap;
                color: #d1cecf;
                text-align: right;
                text-transform: uppercase;
            `,
        rotate180: `
                transform: rotate(180deg);
        `,
        redNeonBorder: `
            height: 32px;
            left: 2px;
            position: absolute;
            width: 45px;
            border: 1px solid #ffbc93; /*stroke*/
            -webkit-border-radius: 3.88px/3.81px;
            -moz-border-radius: 3.88px/3.81px;
            border-radius: 3.88px/3.81px;
            background: #7c2323;
            -moz-background-clip: padding;
            -webkit-background-clip: padding-box;
            background-clip: padding-box; /*Will not allow bg color to leak outside borders*/
            -webkit-box-shadow: 0 0 10.92px 1.08px #ff4c23;
            -moz-box-shadow: 0 0 10.92px 1.08px #ff4c23;
            box-shadow: 0 0 10.92px 1.08px #ff4c23; /*outer glow*/
    `,
        blueNeonBorder: `
                height: 32px;
                left: 0;
                position: absolute;
                top: 0;
                width: 45px;
                border: 1px solid #93d0ff; /*stroke*/
                -webkit-border-radius: 3.88px/3.81px;
                -moz-border-radius: 3.88px/3.81px;
                border-radius: 3.88px/3.81px;
                background: #293868;
                -moz-background-clip: padding;
                -webkit-background-clip: padding-box;
                background-clip: padding-box; /*Will not allow bg color to leak outside borders*/
                -webkit-box-shadow: 0 0 10.92px 1.08px #236bff;
                -moz-box-shadow: 0 0 10.92px 1.08px #236bff;
                box-shadow: 0 0 10.92px 1.08px #236bff; /*outer glow*/
                    `,
        blueNeonBorderContainer: `
                    height: 32px;
                    left: 11px;
                    position: absolute;
                    top: 0;
                    width: 45px;
                    `,
        greenNeonBorderContainer: `
                    height: 32px;
                    left: 23px;
                    position: absolute;
                    top: 0;
                    width: 45px;
                    `,
        greenNeonBorder: `
                            height: 32px;
                            left: 0;
                            position: absolute;
                            top: 0;
                            width: 45px;
                            border: 1px solid #4ef11a; /*stroke*/
                            -webkit-border-radius: 3.88px/3.81px;
                            -moz-border-radius: 3.88px/3.81px;
                            border-radius: 3.88px/3.81px;
                            background: #246210;
                            -moz-background-clip: padding;
                            -webkit-background-clip: padding-box;
                            background-clip: padding-box; /*Will not allow bg color to leak outside borders*/
                            -webkit-box-shadow: 0 0 10.92px 1.08px #48cb1e;
                            -moz-box-shadow: 0 0 10.92px 1.08px #48cb1e;
                            box-shadow: 0 0 10.92px 1.08px #48cb1e; /*outer glow*/
                    `,
    };
    const [isShowing, setIsShowing] = useState(true);
    const handleToggleIsShowing = () => {
        setIsShowing((prev) => !prev);
    };
    const { classes } = jss.createStyleSheet(styles).attach();
    const { betType, option1, option2, kof1, kof2, tieKof } = bet;
    const selections = { team1: 3, team2: 1, draw: 2, none: 0 };
    const [selectedOutcome, setSelectedOutcome] = useState(selections.none);
    function handleSetSelectedOutcome(outcome) {
        setSelectedOutcome(outcome);
    }
    const [selectedOutcome2, setSelectedOutcome2] = useState(selections.none);
    function handleSetSelectedOutcome2(outcome) {
        setSelectedOutcome2(outcome);
    }
    return (
        <div>
            <div className={classes.betTitle}>
                <div className="dot"></div>
                <p className="text-115">{betType}</p>
                <button
                    onClick={handleToggleIsShowing}
                    className={classes.expandButton}
                >
                    <div
                        className={
                            "bg-holder-56 " +
                            `${isShowing ? "" : classes.rotate180}`
                        }
                    >
                        <img
                            className="ico-28"
                            src={require("../imagesHold/ico_21.png").default}
                            alt=""
                            width="16"
                            height="10"
                        />
                    </div>
                </button>
            </div>
            {isShowing ? (
                <div className={classes.betOptions}>
                    <div className="group-56">
                        <button
                            onClick={() =>
                                handleSetSelectedOutcome(selections.team1)
                            }
                            className="bg-holder-57"
                            style={
                                selectedOutcome === selections.team1
                                    ? {
                                          background: `url(${
                                              require("../imagesHold/left_select_bet.png")
                                                  .default
                                          })`,
                                          backgroundRepeat: "no-repeat",
                                          backgroundSize: "cover",
                                      }
                                    : {
                                          background: `url(${
                                              require("../imagesHold/bg_160.png")
                                                  .default
                                          })`,
                                      }
                            }
                        >
                            <div className="row-5">
                                <p className="text-116">{option1}</p>
                                <p className="text-117">{kof1}</p>
                            </div>
                        </button>
                        <button
                            onClick={() =>
                                handleSetSelectedOutcome(selections.draw)
                            }
                            className="bg-holder-58"
                            style={
                                selectedOutcome === selections.draw
                                    ? {
                                          background: `url(${
                                              require("../imagesHold/center_selected_trapezoid.png")
                                                  .default
                                          })`,
                                          backgroundRepeat: "no-repeat",
                                          backgroundSize: "cover",
                                      }
                                    : {
                                          background: `url(${
                                              require("../imagesHold/bg_154.png")
                                                  .default
                                          })`,
                                      }
                            }
                        >
                            <div className="bg-holder-59">
                                <p className="text-118">{tieKof}</p>
                            </div>
                            <img
                                className="line-33"
                                src={
                                    require("../imagesHold/line_11.png").default
                                }
                                alt=""
                                width="11"
                                height="35"
                            />
                        </button>
                        <button
                            onClick={() =>
                                handleSetSelectedOutcome(selections.team2)
                            }
                            className={classes.team2}
                            style={
                                selectedOutcome === selections.team2
                                    ? {
                                          background: `url(${
                                              require("../imagesHold/right_select_bet.png")
                                                  .default
                                          })`,
                                          backgroundRepeat: "no-repeat",
                                          backgroundSize: "cover",
                                      }
                                    : {
                                          background: `url(${
                                              require("../imagesHold/bg_156.png")
                                                  .default
                                          })`,
                                      }
                            }
                        >
                            <div className="row-6">
                                <p className="text-119">{kof2}</p>
                                <p className={classes.option2Name}>{option2}</p>
                            </div>
                            <img
                                className="line-34"
                                src={
                                    require("../imagesHold/line_12.png").default
                                }
                                alt=""
                                width="11"
                                height="35"
                            />
                        </button>
                        <div className="line-35"></div>
                    </div>
                    <div className="group-57">
                        <button
                            onClick={() =>
                                handleSetSelectedOutcome2(selections.team1)
                            }
                            style={
                                selectedOutcome2 === selections.team1
                                    ? {
                                          background: `url(${
                                              require("../imagesHold/left_select_bet.png")
                                                  .default
                                          })`,
                                          backgroundRepeat: "no-repeat",
                                          backgroundSize: "cover",
                                      }
                                    : {
                                          background: `url(${
                                              require("../imagesHold/bg_160.png")
                                                  .default
                                          })`,
                                      }
                            }
                            className="bg-holder-61"
                        >
                            <div className="row-6">
                                <p className="text-121">{option1}</p>
                                <p className="text-122">{kof1}</p>
                            </div>
                        </button>
                        <button
                            onClick={() =>
                                handleSetSelectedOutcome2(selections.draw)
                            }
                            style={
                                selectedOutcome2 === selections.draw
                                    ? {
                                          background: `url(${
                                              require("../imagesHold/center_selected_trapezoid.png")
                                                  .default
                                          })`,
                                          backgroundRepeat: "no-repeat",
                                          backgroundSize: "cover",
                                      }
                                    : {
                                          background: `url(${
                                              require("../imagesHold/bg_154.png")
                                                  .default
                                          })`,
                                      }
                            }
                            className="bg-holder-62"
                        >
                            <div className="bg-holder-63">
                                <p className="text-123">{tieKof}</p>
                            </div>
                            <img
                                className="line-36"
                                src={
                                    require("../imagesHold/line_11.png").default
                                }
                                alt=""
                                width="11"
                                height="35"
                            />
                        </button>
                        <button
                            onClick={() =>
                                handleSetSelectedOutcome2(selections.team2)
                            }
                            className={classes.team2}
                            style={
                                selectedOutcome2 === selections.team2
                                    ? {
                                          background: `url(${
                                              require("../imagesHold/right_select_bet.png")
                                                  .default
                                          })`,
                                          backgroundRepeat: "no-repeat",
                                          backgroundSize: "cover",
                                      }
                                    : {
                                          background: `url(${
                                              require("../imagesHold/bg_156.png")
                                                  .default
                                          })`,
                                      }
                            }
                        >
                            <div className="row-6">
                                <p className="text-124">{kof2}</p>
                                <p className={classes.option2Name}>{option2}</p>
                            </div>
                            <img
                                className="line-37"
                                src={
                                    require("../imagesHold/line_12.png").default
                                }
                                alt=""
                                width="11"
                                height="35"
                            />
                        </button>
                        <div className="line-38"></div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
