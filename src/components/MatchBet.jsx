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
                background: url(${
                    require("../imagesHold/bg_156.png").default
                }) no-repeat;

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
        `
    };
    const [isShowing, setIsShowing] = useState(true)
    const handleToggleIsShowing = () => {
        setIsShowing(prev => !prev)
    }
    const { classes } = jss.createStyleSheet(styles).attach();
    const { betType, option1, option2, kof1, kof2, tieKof } = bet;
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
                        <div className="bg-holder-57">
                            <div className="row-5">
                                <p className="text-116">{option1}</p>
                                <p className="text-117">{kof1}</p>
                            </div>
                        </div>
                        <div className="bg-holder-58">
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
                        </div>
                        <div className={classes.team2}>
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
                        </div>
                        <div className="line-35"></div>
                    </div>
                    <div className="group-57">
                        <div className="bg-holder-61">
                            <div className="row-6">
                                <p className="text-121">{option1}</p>
                                <p className="text-122">{kof1}</p>
                            </div>
                        </div>
                        <div className="bg-holder-62">
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
                        </div>
                        <div className={classes.team2}>
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
                        </div>
                        <div className="line-38"></div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
