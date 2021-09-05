import produce from "immer";

export const createLiveCardSlice = (set, get) => ({
    selectedCardId: 0,
    changeSelectedCardId: (id) => {
        set((state) => (state.selectedCardId = id));
    },
    playingMatchId: null,
    changePlayingMatchId: (id) => {
        const { playingMatchId } = get();
        if (playingMatchId === id) {
            set((state) => (state.playingMatchId = null));
        } else {
            set((state) => (state.playingMatchId = id));
        }
    },
    favoriteMatches: [],
    addMatchToFavorties: (match) => {
        set((state) => {
            return produce(() => {
                state.favoriteMatches.push(match);
            });
        });
    },
    removeMatchFromFavorites: (matchToRemove) => {
        set((state) => {
            return produce(() => {
                state.favoriteMatches.filter(
                    (match) => match.id === matchToRemove.id
                );
            });
        });
    },
});
