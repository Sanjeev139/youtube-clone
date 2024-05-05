import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { VIDEO_API, YOUTUBE_API_KEY } from "../utils/constant";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [videoTitle, setVideoTitle] = useState("null");
  const [likeCount, setLikeCount] = useState(0);
  const dispatch = useDispatch();

  const [searchParam] = useSearchParams();
  const videoKey = searchParam.get("v");

  useEffect(() => {
    dispatch(closeMenu());
    getVideoData();
  }, []);

  const getVideoData = async () => {
    const data = await fetch(
      VIDEO_API + "&id=" + videoKey + "&key=" + YOUTUBE_API_KEY
    );
    const json = await data.json();
    const title = json.items[0].snippet.title;
    setVideoTitle(title);
    setLikeCount(json.items[0].statistics.likeCount);
  };

  return (
    <div className="flex justify-between">
      <div className="">
        <iframe
          width="1200"
          height="600"
          className="p-3"
          src={"https://www.youtube.com/embed/" + videoKey}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="flex justify-between">
          <span className="p-3 font-bold text-2xl">{videoTitle}</span>
          <button className="bg-gray-400 p-2 m-2 rounded-lg">
            👍 {likeCount / 1000}k
          </button>
        </div>
        <div className="p-3 w-[1200px]">
          <CommentContainer></CommentContainer>
        </div>
      </div>
      <div className="w-full">
        <LiveChat></LiveChat>
      </div>
    </div>
  );
};

export default WatchPage;
