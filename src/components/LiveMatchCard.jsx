import jss from "jss";
import React from "react";
import useStore from "store/useStore";

export default function LiveMatchCard({ matchCard }) {
    const {
        id,
        league,
        team1,
        team2,
        currentTime,
        tieKof,
        team1WinKof,
        team2WinKof,
        team1stats,
        team2stats,
        team1Goals,
        team2Goals,
        isFavorite,
        topOffset,
    } = matchCard;
    const { selectedCardId, changeSelectedCardId } = useStore();
    const selected = selectedCardId === matchCard.id
    const styles = {
        container: `
            height: 145px;
            left: 0;
            position: absolute;
            top: ${topOffset};
            width: 681px;
            background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxIDEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPgo8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iNTAlIiB4Mj0iMTAwJSIgeTI9IjUwJSI+CjxzdG9wIG9mZnNldD0iLTUuMzY1NTQ1JSIgc3RvcC1jb2xvcj0iIzI2MjMzMCIgc3RvcC1vcGFjaXR5PSIxIiAvPgo8c3RvcCBvZmZzZXQ9Ijk0LjYzNDQ1JSIgc3RvcC1jb2xvcj0iIzRkMWUyMiIgc3RvcC1vcGFjaXR5PSIxIiAvPgo8L2xpbmVhckdyYWRpZW50Pgo8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2JnKSIgLz48L3N2Zz4=);
            background: -moz-linear-gradient(0deg, #262330 -5.365545%, #4d1e22 94.63445%);
            background: -o-linear-gradient(0deg, #262330 -5.365545%, #4d1e22 94.63445%);
            background: -webkit-linear-gradient(0deg, #262330 -5.365545%, #4d1e22 94.63445%);
            background: -webkit-gradient(linear, left top, right top, color-stop(-5.365545%, #262330), color-stop(94.63445%, #4d1e22));
            background: -webkit-linear-gradient(left, #262330 -5.365545%, #4d1e22 94.63445%);
            background: -moz-linear-gradient(left, #262330 -5.365545%, #4d1e22 94.63445%);
            background: -o-linear-gradient(left, #262330 -5.365545%, #4d1e22 94.63445%);
            background: linear-gradient(90deg, #262330 -5.365545%, #4d1e22 94.63445%);
    `,
        containerSelected: `
            height: 145px;
            left: 0;
            position: absolute;
            top: ${topOffset};
            width: 681px;
            background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxIDEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPgo8bGluZWFyR3JhZGllbnQgaWQ9ImJnIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iNTAlIiB4Mj0iMTAwJSIgeTI9IjUwJSI+CjxzdG9wIG9mZnNldD0iLTUuMzY1NTQ1JSIgc3RvcC1jb2xvcj0iIzI2MjMzMCIgc3RvcC1vcGFjaXR5PSIxIiAvPgo8c3RvcCBvZmZzZXQ9Ijk0LjYzNDQ1JSIgc3RvcC1jb2xvcj0iIzRkMWUyMiIgc3RvcC1vcGFjaXR5PSIxIiAvPgo8L2xpbmVhckdyYWRpZW50Pgo8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2JnKSIgLz48L3N2Zz4=);
            background: -moz-linear-gradient(0deg, #262330 -5.365545%, #4d1e22 94.63445%);
            background: -o-linear-gradient(0deg, #262330 -5.365545%, #4d1e22 94.63445%);
            background: -webkit-linear-gradient(0deg, #262330 -5.365545%, #4d1e22 94.63445%);
            background: -webkit-gradient(linear, left top, right top, color-stop(-5.365545%, #262330), color-stop(94.63445%, #4d1e22));
            background: -webkit-linear-gradient(left, #262330 -5.365545%, #4d1e22 94.63445%);
            background: -moz-linear-gradient(left, #262330 -5.365545%, #4d1e22 94.63445%);
            background: -o-linear-gradient(left, #262330 -5.365545%, #4d1e22 94.63445%);
            background: linear-gradient(270deg, #5f262d 0, #9b2f30 100%)
          `,
        inlay: `
                height: 105px;
                left: 0;
                position: absolute;
                top: 40px;
                width: 681px;
                background: url(${
                    selected
                        ? require("../imagesHold/bg_220.jpg").default
                        : require("../imagesHold/bg_201.jpg").default
                }) no-repeat;
          `,
    };
    const { classes } = jss.createStyleSheet(styles).attach();
    const handlePlusButton = (event) => {
        event.stopPropagation();
        console.log("plus button clicked for " + id);
    };
    const handleContainerClick = () => {
        console.log("container clicked for " + id);
        changeSelectedCardId(id);
    };
    return (
        <div
            role="button"
            onClick={handleContainerClick}
            key={id + "live-match-card"}
            className={selected ? classes.containerSelected : classes.container}
        >
            <div className={classes.inlay}>
                <div className="row-39">
                    <div className="col-36">
                        <div className="team-5">
                            <div className="group-34">
                                <img
                                    className="layer-14"
                                    src={
                                        require("../imagesHold/image_67.png")
                                            .default
                                    }
                                    alt=""
                                    width="15"
                                    height="10"
                                />
                            </div>
                            <div className="bg-holder-26">
                                <p className="h-3">h</p>
                            </div>
                            <p className="text-54">{team1}</p>
                        </div>
                        {
                            // Star/Favorite Icon
                        }
                        <img
                            className="layer-15"
                            src={
                                isFavorite
                                    ? require("../imagesHold/image_63.png")
                                          .default
                                    : require("../imagesHold/image_73.png")
                                          .default
                            }
                            alt=""
                            width="18"
                            height="16"
                        />
                        <div className="team-6">
                            <img
                                className="layer-16"
                                src={
                                    require("../imagesHold/image_64.png")
                                        .default
                                }
                                alt=""
                                width="13"
                                height="15"
                            />
                            <div className="bg-holder-27">
                                <img
                                    className="a-3"
                                    src={require("../imagesHold/a.png").default}
                                    alt="a"
                                    width="8"
                                    height="9"
                                    title="a"
                                />
                            </div>
                            <p className="text-55">{team2}</p>
                        </div>
                    </div>
                    <div className="col-40">
                        <div className="wrapper-52">
                            <div className="text-56">
                                <p>{currentTime}</p>
                            </div>
                        </div>
                        <img
                            className="ico-19"
                            src={require("../imagesHold/ico_32.jpg").default}
                            alt=""
                            width="33"
                            height="33"
                        />
                    </div>
                    <div className="col-27">
                        <p className="text-57">
                            {team1stats}
                            <span className="colore9ca4e">{team1Goals}</span>
                        </p>
                        <p className="text-58">
                            {team2stats}
                            <span className="colore9ca4e">{team2Goals}</span>
                        </p>
                    </div>
                </div>
                <div className="btn-4">
                    <div className="row-17">
                        <p className="text-59">{team1}</p>
                        <p className="text-60">{team1WinKof}</p>
                    </div>
                    <div className="wrapper-21">
                        <div className="row-18">
                            <img
                                className="line-11"
                                src={
                                    require("../imagesHold/line_31.png").default
                                }
                                alt=""
                                width="11"
                                height="32"
                            />
                            <p className="text-61">{tieKof}</p>
                        </div>
                        <div className="row-19">
                            <p className="text-62">{team2WinKof}</p>
                            <p className="text-63">{team2}</p>
                        </div>
                        <img
                            className="line-12"
                            src={require("../imagesHold/line_32.png").default}
                            alt=""
                            width="11"
                            height="32"
                        />
                    </div>
                </div>
            </div>
            <button onClick={handlePlusButton} className="bg-5">
                <p className="text-78">+</p>
                <p className="text-79">23</p>
            </button>
            <div className="f-4">
                <div className="s-4">
                    <img
                        className="layer-22"
                        src={require("../imagesHold/image_70.png").default}
                        alt=""
                        width="18"
                        height="18"
                    />
                    <img
                        className="layer-23"
                        src={require("../imagesHold/image_61.png").default}
                        alt=""
                        width="29"
                        height="18"
                    />
                    <p className="text-77">{league}</p>
                </div>
                <div className="e-4">
                    <img
                        className="c-3"
                        src={require("../imagesHold/c.png").default}
                        alt=""
                        width="18"
                        height="18"
                    />
                    <div className="y-3"></div>
                    <div className="r-3"></div>
                    <img
                        className="p-3"
                        src={require("../imagesHold/p.png").default}
                        alt=""
                        width="14"
                        height="17"
                    />
                    <img
                        className="ico-20"
                        src={require("../imagesHold/g.png").default}
                        alt=""
                        width="18"
                        height="18"
                    />
                </div>
            </div>
            <div className="line-16"></div>
            <div className="line-17"></div>
            {/* <img className="gra-4" src={require("../imagesHold/gra.png").default} alt="" width="31" height="145"/> */}
        </div>
    );
}
