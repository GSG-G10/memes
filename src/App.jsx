import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [reload, setReload] = useState(0);
  useEffect(() => {
    axios
      .get(
        "https://api.giphy.com/v1/gifs/random?api_key=uTbPKn6KPBJqplAZk1ijeqdMkaGC8umE"
      )
      .then((res) => {
        console.log(res.data.data.images.original.url);
        setData(res.data.data.images.original.url);
      });
  }, [reload]);

  return (
    <div className="wrapper">
      <img src={data} alt="random img" />
      <div
        className="reload_img"
        onClick={() => setReload((prev) => (prev += 1))}
      >
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
