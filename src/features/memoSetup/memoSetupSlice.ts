import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../reduxStore";
import { MemoConfig, MemoDifficulty, MemoMode } from "./types";

interface MemoSetupState {
  config: MemoConfig;
}

const initialState: MemoSetupState = {
  config: {
    difficulty: MemoDifficulty.VeryEasy,
    mode: MemoMode.Dog,
  },
};

const memoSetupSlice = createSlice({
  name: "memoSetup",
  initialState,
  reducers: {
    updateMode: (state, action: PayloadAction<MemoMode>) => {
      state.config.mode = action.payload;
    },
    updateDifficulty: (state, action: PayloadAction<MemoDifficulty>) => {
      state.config.difficulty = action.payload;
    },
  },
});

const selectMemoSetup = (state: RootState) => state.memoSetup;
const selectMemoConfig = createSelector(
  [selectMemoSetup],
  (memoSetupState) => memoSetupState.config
);

const { updateDifficulty, updateMode } = memoSetupSlice.actions;

export { selectMemoSetup, selectMemoConfig, updateDifficulty, updateMode };

export default memoSetupSlice.reducer;
