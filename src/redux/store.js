import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactSlice";
import { filtersReducer } from "./filterSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "value",
  storage,
  whitelist: ["value"],
};

export const contactsPersistedReducer = persistReducer(
  persistConfig,
  contactsReducer
);

export const store = configureStore({
  reducer: { filters: filtersReducer, contacts: contactsPersistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
