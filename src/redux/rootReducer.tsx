import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

import clientReducer from "./slices/client/clientSlice";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  clients: clientReducer,
});

export { rootPersistConfig, rootReducer };
