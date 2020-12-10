import { createStore, applyMiddleware } from "redux";
import RootReducer from "./_common/state/commonReducers";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'token',
  storage: storage,
  whitelist: ['token']
};

const pReducer = persistReducer(persistConfig, RootReducer);
const middleware = applyMiddleware(thunk, logger);
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);
export { persistor, store };

export type RootStore = ReturnType<typeof RootReducer>;
