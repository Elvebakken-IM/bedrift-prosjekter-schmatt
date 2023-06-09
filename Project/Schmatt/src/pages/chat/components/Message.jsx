import React, { useEffect } from "react";
import { auth } from "../../../firebase-config";
import { Timestamp } from "firebase/firestore";
import { useRouter } from "next/router";

const style = {
  message: `flex items-center drop-shadow-[4xl] h-auto mx-3 mb-3 py-2 px-3 rounded-tl-full rounded-tr-full cursor-pointer hover:bg-gray-800 hover:text-gray-8`,
  name: `text-white text-sm pb-[1px] font-semibold`,
  sent: ` text-text-color flex-col text-end rounded-bl-full float-right`,
  sentText: `text-text-color  flex-col pr-5 text-end rounded-bl-full justify-self-end`,
  received: ` text-text-color flex-col text-start rounded-br-full`,
  receivedText: `text-text-color pl-5 flex-col text-start rounded-br-full justify-self-start`,
  timestamp: `text-gray-500 text-xs float-right`,
  image: `max-w-[20%] `
};


const Message = ({ message }) => {
  const router = useRouter();
  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${style.sent} `
      : `${style.received}`;

  const messageText =
    message.uid === auth.currentUser.uid
      ? `${style.sentText}`
      : `${style.receivedText}`;
  const messageColor =
    message.uid === auth.currentUser.uid
      ? `bg-message-sent`
      : `bg-zinc-800`;
  const formattedTime = message.timestamp
    ? new Timestamp(
        message.timestamp.seconds,
        message.timestamp.nanoseconds
      ).toDate()
    : null;
  let timestampString = formattedTime
    ? `${formattedTime.getHours()}:${formattedTime.getMinutes()} ${formattedTime.toDateString()}`
    : "";

  return (
    <div>
      <div className="w-full ">
        
        <div className={`flex ${messageText} ${messageClass}  w-2/3`}>
          <span className={style.timestamp}>
            <span className={style.name}>{message.name}</span> {timestampString}
          </span>
          <div className={`${style.message}  ${messageClass} ${messageColor}`}>
            <img className="object-contain max-w-[20%] max-h-1/2" src={message.image}></img>
            <p className="break-all">{message.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
