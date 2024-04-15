import React from "react";

import Thumbnail from "../Thumbnail/Thumbnail";

import "./ThumbnailContainer.css";

import images from "../../assets/images";

const ThumbnailContainer = ({ setisImageViewerOn, setActiveImage }) => {
  const toggleImageViewer = (e) => {
    setisImageViewerOn(true);
    setActiveImage(e.target.src);
  };
  return (
    <div className="thumbnail-container">
      {images.map((image, index) => {
        return (
          <Thumbnail
            src={image}
            key={index}
            toggleImageViewer={toggleImageViewer}
          />
        );
      })}
    </div>
  );
};

export default ThumbnailContainer;
