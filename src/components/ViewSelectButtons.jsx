import { viewTypes } from "helpers/constants";
import React from "react";
import ViewSelectButton from "./ViewSelectButton";


export default function ViewSelectButtons() {

    const views = [
        { id: 0, name: "리그선택", type: viewTypes.selectLeague },
        { id: 1, name: "시간순보기", type: viewTypes.chronological },
        { id: 2, name: "리그순보기" , type: viewTypes.viewLeague},
    ];
    return (
        <div style={{display: "flex"}} className="row-32">
            {views.map(view => { 
                return <ViewSelectButton key={view.id} viewName={view.name} viewType={view.type} />
            })}
        </div>
    );
}
