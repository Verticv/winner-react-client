import jss from "jss";
import React, { useState } from "react";
import CoefficientWithUpdate from "./CoefficientWithUpdate";

export default function LiveMatchCoefficient({
    team1,
    team1WinKof,
    tieKof,
    team2,
    team2WinKof,
}) {
    const styles = {
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
        textLeft: `
            color: #d1cecf;
            letter-spacing: 0;
            text-transform: uppercase;
            margin-left: 12px;
        `,
    };
    const { classes } = jss.createStyleSheet(styles).attach();
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
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              paddingRight: "12px",
                          }
                        : {
                              zIndex: 2,
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              paddingRight: "12px",
                          }
                }
                onClick={(event) => {
                    event.stopPropagation();
                    handleSetSelectedOutcome(selections.team1);
                }}
                className="row-17"
            >
                <p className={classes.textLeft}>{team1}</p>
                <CoefficientWithUpdate />
            </button>
            <div className="wrapper-21">
                <button
                    style={
                        selectedOutcome === selections.draw
                            ? {
                                  //   background: "rgb(91,30,30)",
                                  background:
                                      "radial-gradient(circle, rgba(91,30,30,1) 0%, rgba(155,47,48,1) 94%)",
                                  zIndex: 0,
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                              }
                            : {
                                  zIndex: 1,
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                              }
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
                    <CoefficientWithUpdate />
                </button>
                <button
                    style={
                        selectedOutcome === selections.team2
                            ? {
                                background: `linear-gradient(90deg, rgb(91 30 30) 0px, rgb(155, 47, 48) 40%)`,
                                paddingLeft: "12px",
                                display: "flex", justifyContent: "space-between", alignItems: "center", paddingRight: "12px"
                              }
                            : {paddingLeft: "12px",
                        display: "flex", justifyContent: "space-between", alignItems: "center", paddingRight: "12px"}
                    }
                    onClick={(event) => {
                        event.stopPropagation();
                        handleSetSelectedOutcome(selections.team2);
                    }}
                    className="row-19"
                >
                    <CoefficientWithUpdate />
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
