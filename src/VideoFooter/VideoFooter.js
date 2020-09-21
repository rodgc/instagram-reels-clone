import React from "react";
import "./VideoFooter.css";
import { Avatar, Button } from "@material-ui/core";
import Ticker from "react-ticker";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import SendIcon from "@material-ui/icons/Send";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function VideoFooter({ likes, shares, channel, avatarSrc, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <Avatar src={avatarSrc} />
        <h3>
          {channel} . <Button>Follow</Button>
        </h3>
      </div>
      <div className="videoFooter__ticker">
        <MusicNoteIcon className="videoFooter__icon" />
        <Ticker mode="smooth">
          {({ index }) => (
            <>
              <h1>{song}</h1>
            </>
          )}
        </Ticker>
        <div className="videoFooter__actions">
          <div className="videoFooter__actionsLeft">
            <FavoriteIcon fontSize="large" />
            <ModeCommentIcon fontSize="large" />
            <SendIcon fontSize="large" />
            <MoreHorizIcon fontSize="large" />
          </div>
          <div className="videoFooter__actionsRight">
            <div className="videoFooter__stat">
              <FavoriteIcon />
              <p>{likes}</p>
            </div>
            <div className="videoFooter__stat">
              <ModeCommentIcon />
              {shares}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
