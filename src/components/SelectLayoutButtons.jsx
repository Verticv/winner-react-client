import React, { useState } from 'react'
import SelectLayoutButton from './SelectLayoutButton';

export default function SelectLayoutButtons() {

    const layoutButtons = [
        {
            id: 0,
            image: require("../imagesHold/bg_136.png").default,
            text: "싱글뷰",
            offset: "0px",
            active: false,
        },
        {
            id: 1,
            image: require("../imagesHold/ico_19.png").default,
            text: "멀티뷰",
            offset: "72px",
            active: true,
        },
    ];

    const [layoutItems, setLayoutItems] = useState(layoutButtons);

    const handleSetLayoutActive = (id) => {
        const navCopy = [...layoutItems];
        const itemToSetActive = navCopy.find((a) => a.id === id);
        navCopy.forEach((navListItem) => (navListItem.active = false));
        itemToSetActive.active = true;
        setLayoutItems(navCopy);
    };

    return (
        <>
            {layoutItems.map((layoutButton) => {
                const { image, text, offset, active, id } = layoutButton;
                return (
                    <SelectLayoutButton
                        key={id}
                        image={image}
                        active={active}
                        text={text}
                        offset={offset}
                        handleSetLayoutActive={() =>
                            handleSetLayoutActive(layoutButton.id)
                        }
                    />
                );
            })}
        </>
    );
}

