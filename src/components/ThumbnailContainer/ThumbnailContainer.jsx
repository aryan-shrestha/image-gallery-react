import React from "react";

import Thumbnail from '../Thumbnail/Thumbnail';

import './ThumbnailContainer.css';

import image1 from "../../assets/images/image-1.jpg";
import image2 from "../../assets/images/image-2.jpg";
import image3 from "../../assets/images/image-3.jpg";
import image4 from "../../assets/images/image-4.jpg";
import image5 from "../../assets/images/image-5.jpg";
import image6 from "../../assets/images/image-6.jpg";

const ThumbnailContainer = () => {
  const imageArr = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="thumbnail-container">
      {imageArr.map((image, index) => {
        return <Thumbnail src={image} key={index} />;
      })}
    </div>
  );
};

export default ThumbnailContainer;