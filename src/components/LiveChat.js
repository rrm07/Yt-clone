import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";

const LiveChat = () => {

  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomText(),
        })
      );
      // console.log("API Polling");
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="p-2 border border-black w-[25rem] m-1 h-[400px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {/* <ChatMessage name="Rahul" message="Heyy" /> */}
        {chatMessages?.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>

      <form
        className="h-9 border border-gray-200 px-1"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Rahul Mahurkar",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-[20rem] border border-black p-1 rounded-lg"
          type="text"
          placeholder="Type"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        ></input>
        <button className="ml-2 bg-green-300 h-full w-[90px] rounded-lg p-1">
          send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
