import create from "zustand";
import { createLeagueSlice } from "./createLeagueSlice";
import { createLiveCardSlice } from "./createLiveCardSlice";
import { createSingleMultiSlice } from "./createSingleMultiSlice";
import { createViewSelectSlice } from "./createViewSelectSlice";

const useStore = create((set, get) => ({
    ...createLeagueSlice(set, get),
    ...createViewSelectSlice(set, get),
    ...createLiveCardSlice(set, get),
    ...createSingleMultiSlice(set, get)
}));

export default useStore

