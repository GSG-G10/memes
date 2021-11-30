import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

// @dev.luffy
// @dev.luffy
// @dev.luffy

function App() {
  const [data, setData] = useState("");

  const getImg = () => {
    axios
      .get(
        "https://api.giphy.com/v1/gifs/random?api_key=uTbPKn6KPBJqplAZk1ijeqdMkaGC8umE"
      )
      .then((res) => {
        setData(res.data.data.images.downsized_medium.url);
      });
  };

  const changeImg = () => {
    setData("");
    getImg("");
  };

  useEffect(() => {
    getImg();
  }, []);

  return (
    <div className="wrapper">
      {data ? (
        <img src={data} alt="random img" />
      ) : (
        <div className="loading">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 512 512"
          >
            <circle cx="256" cy="96" r="64" />
            <circle cx="96" cy="256" r="48" />
            <circle cx="368" cy="144" r="8" />
            <path d="M180.1 107.6c-19.9-20.1-52.2-20.1-72.1 0-19.9 20.1-19.9 52.7 0 72.8 19.9 20.1 52.2 20.1 72.1 0 19.9-20.1 19.9-52.7 0-72.8z" />
            <circle cx="416" cy="256" r="16" />
            <circle cx="369" cy="369" r="24" />
            <circle cx="256" cy="416" r="32" />
            <circle cx="144" cy="368" r="40" />
          </svg>
        </div>
      )}

      <div className="reload_img" onClick={changeImg}>
        <svg
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
          data-testid="ReplayIcon"
          title="Replay"
        >
          <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"></path>
        </svg>
      </div>
    </div>
  );
}

export default App;
