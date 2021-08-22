import jss from 'jss';
import React, { useState } from 'react'
import MatchBetTab from './MatchBetTab';

export default function MatchBetsTabs() {
        const styles = {
            tabContainer: `
            height: 40px;
            left: 0;
            position: absolute;
            top: 528px;
            width: 859px;
            display: flex;
                            `,
        };
        const { classes } = jss.createStyleSheet(styles).attach();
   
    const tabs = [
        { id: 0, name: "전체", selected: true },
        { id: 1, name: "팀골", selected: false },
        { id: 2, name: "핸디캡", selected: false },
        { id: 3, name: "오버언더", selected: false },
        { id: 4, name: "승무패핸디캡", selected: false },
    ];

    const [stateTabs, setTabs] = useState(tabs);

        const handleSelectTab = (id) => {
            const navCopy = [...tabs];
            const itemToSetActive = navCopy.find((a) => a.id === id);
            navCopy.forEach((navListItem) => (navListItem.selected = false));
            itemToSetActive.selected = true;
            setTabs(navCopy);
        };

    return (
        <div className={classes.tabContainer}>
            {stateTabs.map((tab) => {
                return (
                    <MatchBetTab
                        key={tab.id}
                        tab={tab}
                        handleSelectTab={() => handleSelectTab(tab.id)}
                    />
                );
            })}
        </div>
    );
}

