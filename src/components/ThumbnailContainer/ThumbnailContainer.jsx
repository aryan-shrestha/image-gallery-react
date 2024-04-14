import React from "react";

import Thumbnail from '../Thumbnail/Thumbnail';

import './ThumbnailContainer.css';

import images from "../../assets/images";

const ThumbnailContainer = () => {
 
  return (
    <div className="thumbnail-container">
      {images.map((image, index) => {
        return <Thumbnail src={image} key={index} />;
      })}
    </div>
  );
};

export default ThumbnailContainer;
