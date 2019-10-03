import React from "react";
import "./collection-preview.styles.scss";

const collectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1>{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <div key={item.id}>
            {item.name}
            {/* <img src={item.imageUrl} alt="" /> */}
          </div>
        ))}
    </div>
  </div>
);

export default collectionPreview;
