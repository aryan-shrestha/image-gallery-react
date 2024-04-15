import React from "react";

import "./ImageViewer.css";

const ImageViewer = ({setisImageViewerOn, activeImage}) => {
  const toggleImageViewer = () => {
    setisImageViewerOn(false);
  };
  return (
    <div className="image-viewer-container">
      <button onClick={toggleImageViewer}>X</button>
      <img
        src={activeImage}
        alt="image"
      />
    </div>
  );
};

export default ImageViewer;
