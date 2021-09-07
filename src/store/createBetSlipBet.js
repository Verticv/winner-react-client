import produce from "immer";

export const createBetSlipBetSlice = (set, get) => ({
    betSlipBets: [],
    addBetSlipBet: (newBet) => {
        set(
            produce((state) => {
                state.betSlipBets.push(newBet);
            })
        );
    },
    removeBetSlipBet: (id) => {
        set(
            produce((state) => {
                state.betSlipBets.splice(id, 1);
            })
        );
    },
});
