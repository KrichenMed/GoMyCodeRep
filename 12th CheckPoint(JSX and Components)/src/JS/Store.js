import { createStore } from "redux";
import RootReducers from "./CombinedReducers";

const store = createStore(RootReducers);
export default store;
