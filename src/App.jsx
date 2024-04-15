import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import ThumbnailContainer from "./components/ThumbnailContainer/ThumbnailContainer";

function App() {
  const [isImageViewerOn, setisImageViewerOn] = useState(false);
  const [activeImage, setActiveImage] = useState("");

  return (
    <>
      <Navbar />
      <ThumbnailContainer />
    </>
  );
}

export default App;
