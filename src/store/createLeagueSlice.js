import produce from "immer";

export const createLeagueSlice = (set, get) => ({
    selectedLeagues: [0, 1],
    changeLeagues: (league) => {
        set((state) => {
            produce(() => (state.selectedLeague = league));
        });
    },
});
