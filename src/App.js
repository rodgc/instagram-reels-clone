import React, { useEffect, useState } from "react";
import "./App.css";
import { VideoCard } from "./VideoCard";
import db from "./firebase";

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    db.collection("reels").onSnapshot((snapshot) => {
      setReels(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <div className="app">
      <div className="app__top">
        <img
          className="app__logo"
          src="http://pngimg.com/uploads/instagram/instagram_PNG11.png"
          alt=""
        />
        <h1>Reels</h1>
      </div>
      <div className="app__videos">
        {reels.map((reel, key) => (
          <VideoCard key={key} {...reel} />
        ))}
      </div>
    </div>
  );
}

export default App;
