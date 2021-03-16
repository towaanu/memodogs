import { RootState } from "../../reduxStore";
import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";

export interface OfflineState {
  waitingWorker: ServiceWorker | null;
}

const initialState: OfflineState = {
  waitingWorker: null,
};

const offlineSlice = createSlice({
  name: "offline",
  initialState,
  reducers: {
    registerWaitingWorker(state, action: PayloadAction<ServiceWorker | null>) {
      state.waitingWorker = action.payload;
    },
  },
});

const selectOffline = (state: RootState) => state.offline;
const selectWaitingWorker = createSelector(
  [selectOffline],
  (offlineState) => offlineState.waitingWorker
);

const { registerWaitingWorker } = offlineSlice.actions;

export { selectOffline, selectWaitingWorker, registerWaitingWorker };

export default offlineSlice.reducer;
