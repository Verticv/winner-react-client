export const createLiveCardSlice = (set, get) => ({
    selectedCardId: 0,
    changeSelectedCardId: (id) => {
        set((state) => (state.selectedCardId = id));
    },
    playingMatchId: null,
    changePlayingMatchId: (id) => {
        const { playingMatchId } = get();
        console.log(id, playingMatchId);
        if (playingMatchId === id) {
            set((state) => (state.playingMatchId = null));
        } else {
            set((state) => (state.playingMatchId = id));
        }
    },
});
