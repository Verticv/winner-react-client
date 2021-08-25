import create from "zustand";
import { createLiveCardSlice } from "./createLiveCardSlice";

const useStore = create((set, get) => ({
    ...createLiveCardSlice(set, get),
}));

export default useStore

