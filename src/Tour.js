import React, { useState } from "react";
const Tour = ({ image, name, info, price }) => {
  const [isInterested, setIsInterested] = useState(true);
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      {isInterested && (
        <article className={"single-tour box container is-max-desktop"}>
          <img className={"tour-pics"} src={image} alt={"country"}></img>
          <div className={"title-price columns is-mobile"}>
            <h3 className={"column is-10-tablet"}>{name}</h3>
            <h4 className={"column is-2-tablet has-text-right"}>${price}</h4>
          </div>
          <div className={"blurb"}>
            {readMore ? (
              <p className={"block"}>
                {info}{" "}
                <button
                  className={"btn button"}
                  onClick={() => setReadMore(!readMore)}
                >
                  {readMore ? "Show Less" : "Read More"}
                </button>
              </p>
            ) : (
              <p className={"block"}>
                {info.substring(0, 200)}...{" "}
                <button
                  className={"btn button"}
                  onClick={() => setReadMore(!readMore)}
                >
                  {readMore ? "Show Less" : "Read More"}
                </button>
              </p>
            )}
          </div>
          <div className={"button-div has-text-centered"}>
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
