import React from "react";
import "./ImageItem.css";

interface Props {
  image: any;
}

const ImageItem = (props: Props) => {
  return (
    <div className="col-lg-4 col-md-6 p-2">
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <img
          style={{ width: 300, height: 200, objectFit: "cover", borderRadius: 10 }}
          src={props.image.urls.full}
          alt={props.image.alt_description}
        />
      </div>
    </div>
  );
};

export default ImageItem;
