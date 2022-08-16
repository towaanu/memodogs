import { createLogger } from "redux-logger";
import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";
import memoReducer from "./features/memo/memoSlice";
import memoSetupReducer from "./features/memoSetup/memoSetupSlice";
import offlineReducer from "./features/offline/offlineSlice";

let middlewares = new MiddlewareArray();

if (process.env.NODE_ENV !== "production") {
  const logger = createLogger();
  middlewares = middlewares.concat(logger) as any;
}

const store = configureStore({
  reducer: {
    memo: memoReducer,
    memoSetup: memoSetupReducer,
    offline: offlineReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});

type RootState = ReturnType<typeof store.getState>;

export { store };

export type { RootState };
