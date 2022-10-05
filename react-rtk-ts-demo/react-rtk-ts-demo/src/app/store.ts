import { configureStore } from "@reduxjs/toolkit";
// import { createLogger } from "redux-logger";

import { cakeReducer } from "../features/cake/cakeSlice.js";
import { iceCreamReducer } from "../features/icecream/IceScreamSlice.js";
import { UserReducer } from "../features/user/UserSlice.js";

// const logger = createLogger();

const store = configureStore({
  //inlcudes all reducers from the slices
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: UserReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch