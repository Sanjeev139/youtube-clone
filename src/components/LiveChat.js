import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { updateLiveChat } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chatSlice.messages);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        updateLiveChat({
          name: generateRandomName(),
          message: generateRandomMessage(30),
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="h-[575px] w-full mt-3 rounded-lg border border-black shadow-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((chat, index) => (
            <ChatMessage
              key={index}
              name={chat.name}
              message={chat.message}
            ></ChatMessage>
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            updateLiveChat({
              name: "Sanjeev",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-96 shadow-lg p-2"
          type="text"
          placeholder="type..."
          onChange={(e) => setLiveMessage(e.target.value)}
        ></input>
        <button className="px-2 mx-4 bg-green-300 rounded-lg w-20 h-10">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
