import { configureStore } from "@reduxjs/toolkit";
import controllerTheme from "./reducers/theme";
import catalogueFunctions from "./reducers/catalog";

export const store = configureStore({
  reducer: { controllerTheme, catalogueFunctions },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
