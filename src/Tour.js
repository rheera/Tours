import React, { useState } from "react";
const Tour = ({ image, name, info, price }) => {
  const [isInterested, setIsInterested] = useState(true);
  return (
    <>
      {isInterested && (
        <article className={"single-tour box container is-max-desktop"}>
          <img src={image}></img>
          <div className={"columns"}>
            <h3 className={"column is-10 subtitle is-4"}>{name}</h3>
            <h4 className={"column is-offset-1"}>{price}</h4>
          </div>
          <p className={"block"}>{info}</p>
          <div className={"button-div columns"}>
            <button
              type={"button"}
              className={"button is-danger is-outlined"}
              onClick={() => setIsInterested(false)}
            >
              Not interested
            </button>
          </div>
        </article>
      )}
    </>
  );
};

export default Tour;
