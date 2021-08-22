export const createLiveCardSlice = (set, get) => ({
    selectedCardId: 0,
    changeSelectedCardId: (id) => {
        set(state => state.selectedCardId = id)
    }
});
