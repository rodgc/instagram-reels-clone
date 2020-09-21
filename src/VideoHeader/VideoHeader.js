import React from "react";
import "./VideoHeader.css";
import ArrowBackIosOutlined from "@material-ui/icons/ArrowBackIosOutlined";
import CameraAltOutlined from "@material-ui/icons/CameraAltOutlined";

function VideoHeader() {
  return (
    <div className="videoHeader">
      <ArrowBackIosOutlined />
      <h3>Reels</h3>
      <CameraAltOutlined />
    </div>
  );
}

export default VideoHeader;
