import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constant";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: []
    },
    reducers: {
        updateLiveChat: (state, action) => {
            state.messages.splice(OFFSET_LIVE_CHAT, 1);
            state.messages.push(action.payload);
        }
    }
})
export const { updateLiveChat } = chatSlice.actions;
export default chatSlice.reducer;