import { useState } from "react";
import "./App.css";

import { ImageViewer, Navbar, ThumbnailContainer } from "./components";

function App() {
  const [isImageViewerOn, setIsImageViewerOn] = useState(false);
  const [activeImage, setActiveImage] = useState("");

  return (
    <>
      <Navbar />
      <ThumbnailContainer
        setIsImageViewerOn={setIsImageViewerOn}
        setActiveImage={setActiveImage}
      />
      {isImageViewerOn ? (
        <ImageViewer
          activeImage={activeImage}
          setIsImageViewerOn={setIsImageViewerOn}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
