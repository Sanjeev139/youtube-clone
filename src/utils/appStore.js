import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchReducer from "./searchSlice";
import chatSlice from "./chatSlice";

const appStore = configureStore({
    reducer: {
        app: appReducer,
        search: searchReducer,
        chatSlice: chatSlice
    }
})
export default appStore;