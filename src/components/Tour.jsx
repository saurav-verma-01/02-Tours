import { useState } from "react";

const Tour = ({ tour, onRemove }) => {
  const { image, info, name, price, id } = tour;
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="tour">
      <div className="tour-top-box">
        <img src={image} alt="tour image" className="tour-img" />
        <p className="price-tag">{price}</p>
      </div>
      <div className="tour-bottom-box">
        <h3 className="tour-heading">{name}</h3>
        <p className="tour-info">{readMore ? info : info.substring(0, 200)}</p>
        <button
          className="info-btn "
          onClick={() => setReadMore((prev) => !prev)}
        >
          {readMore ? "Show Less" : "Read More ..."}
        </button>
        <button className="delete-btn btn" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
      .
    </div>
  );
};

export default Tour;
