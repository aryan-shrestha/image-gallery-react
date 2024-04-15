import { useState } from "react";
import "./App.css";

import { ImageViewer, Navbar, ThumbnailContainer } from "./components";

function App() {
  const [isImageViewerOn, setisImageViewerOn] = useState(false);
  const [activeImage, setActiveImage] = useState("");

  return (
    <>
      <Navbar />
      <ThumbnailContainer
        setisImageViewerOn={setisImageViewerOn}
        setActiveImage={setActiveImage}
      />
      {isImageViewerOn ? (
        <ImageViewer
          setisImageViewerOn={setisImageViewerOn}
          activeImage={activeImage}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
