import create from "zustand";
import { createLiveCardSlice } from "./createLiveCardSlice";
import { createViewSelectSlice } from "./createViewSelectSlice";

const useStore = create((set, get) => ({
    ...createViewSelectSlice(set, get),
    ...createLiveCardSlice(set, get),
}));

export default useStore

