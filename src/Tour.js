import React, { useState } from "react";
const Tour = ({ img, imgAlt, title, caption, price }) => {
  const [isInterested, setIsInterested] = useState(true);
  return (
    <>
      {isInterested && (
        <article>
          <img src={img} alt={imgAlt}></img>
          <h3>{title}</h3>
          <h4>{price}</h4>
          <p>{caption}</p>
          <button type={"button"} onClick={() => setIsInterested(false)}>
            Not interested
          </button>
        </article>
      )}
    </>
  );
};

export default Tour;
