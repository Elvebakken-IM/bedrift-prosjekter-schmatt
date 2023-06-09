import React from "react";
import { useState } from "react";
import { auth, db } from "../../../firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Message from "@/pages/chat/components/MessageSchmatt";
import FormPopup from "./FormPopup";
import PostsChat from "./PostsChat";
import InfoSection from "./InfoSection";
import InfoSvgOpen from "./InfoSvgOpen";
import InfoSvgClosed from "./InfoSvgClosed";

const style = {
  form: `backdrop-blur-sm pt-[1px] h-14 w-[63%] flex text-xl absolute bottom-0 m-2 justify-between flex-row`,
  input: `w-[93%] backdrop-blur-sm opacity-75 pl-5 rounded-full text-l text-common p-3 bg-button-active text-white outline-none border-none`,
  button: `p-3 bg-button-active rounded-full opacity-75`,
};

export default function Posts(selectedForum, setSelectedForum, refresh, setRefresh) {
  const [createRoomPopup, setCreateRoomPopup] = useState(false);
  const [info, setInfo] = useState(true);

  const handleCreateRoomClick = () => {
    setCreateRoomPopup(true);
  };


  return (
    <>
      <section className="h-full w-full">
        <div className=" h-20 w-full flex justify-center items-center">
          <div className="w-80 h-4/6 flex justify-center flex-col items-center border-b-2 border-border-color">
            <span className=" text-text-color">Posts</span>
            {createRoomPopup && <FormPopup setCreateRoomPopup={setCreateRoomPopup} selectedForum={selectedForum} />}
            <div>
              <button onClick={handleCreateRoomClick}>Create post</button>
            </div>
          </div>
        </div>
        <div className="w-full h-full overflow-y-auto">
          <PostsChat selectedForum={selectedForum.selectedForum} refresh={refresh} />
        </div>
        
      </section>
      {info && <InfoSvgOpen setInfo={setInfo} info={info} />}
      {!info && <InfoSvgClosed setInfo={setInfo} info={info} />}
      {info && <InfoSection selectedForum={selectedForum} />}
      
      
    </>
  );
}
