import jss from "jss";
import React from "react";

export default function MatchDetail() {
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
        };
    const { classes } = jss.createStyleSheet(styles).attach();
    return (
        <>
            <div className="group-54">
                <div className="dot"></div>
                <p className="text-115">오버언더</p>
                <div className={classes.expandButton}>
                    <div className="bg-holder-56">
                        <img
                            className="ico-28"
                            src={require("../imagesHold/ico_21.png").default}
                            alt=""
                            width="16"
                            height="10"
                        />
                    </div>
                </div>
            </div>
            <div className="group-55">
                <div className="group-56">
                    <div className="bg-holder-57">
                        <div className="row-5">
                            <p className="text-116">오버</p>
                            <p className="text-117">3.15</p>
                        </div>
                    </div>
                    <div className="bg-holder-58">
                        <div className="bg-holder-59">
                            <p className="text-118">4.05</p>
                        </div>
                        <img
                            className="line-33"
                            src={require("../imagesHold/line_11.png").default}
                            alt=""
                            width="11"
                            height="35"
                        />
                    </div>
                    <div className="bg-holder-60">
                        <div className="row-6">
                            <p className="text-119">1.3</p>
                            <p className="text-120">언더</p>
                        </div>
                        <img
                            className="line-34"
                            src={require("../imagesHold/line_12.png").default}
                            alt=""
                            width="11"
                            height="35"
                        />
                    </div>
                    <div className="line-35"></div>
                </div>
                <div className="group-57">
                    <div className="bg-holder-61">
                        <div className="row-7">
                            <p className="text-121">오버</p>
                            <p className="text-122">1.45</p>
                        </div>
                    </div>
                    <div className="bg-holder-62">
                        <div className="bg-holder-63">
                            <p className="text-123">4.05</p>
                        </div>
                        <img
                            className="line-36"
                            src={require("../imagesHold/line_11.png").default}
                            alt=""
                            width="11"
                            height="35"
                        />
                    </div>
                    <div className="bg-holder-64">
                        <div className="row-8">
                            <p className="text-124">2.4</p>
                            <p className="text-125">언더</p>
                        </div>
                        <img
                            className="line-37"
                            src={require("../imagesHold/line_12.png").default}
                            alt=""
                            width="11"
                            height="35"
                        />
                    </div>
                    <div className="line-38"></div>
                </div>
            </div>
        </>
    );
}
