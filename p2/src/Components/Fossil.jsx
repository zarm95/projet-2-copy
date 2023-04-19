import React from "react";
import Stars from "./Stars";
import { useNavigate } from "react-router-dom";

const Fossil = ({ fossil, handleAddArticle }) => {
  let navigate = useNavigate();
  const handleShowDetail = (fossil) => {
    navigate("/Detail", { state: fossil });
  };
  return (
    <>
    <div className="carte">
      <div onClick={() => handleShowDetail(fossil)}>
        <div className="title-price">
          <h6> {fossil["file-name"]}</h6>
          <h6> {fossil.price},00 $</h6>
        </div>

        <div className="image">
          <img src={fossil.image_uri} alt="" />
        </div>
        <div className="stars">
          <Stars note={fossil.note} />
        </div>
    </div>

        <div>
          <button onClick={() => handleAddArticle(fossil)}
            className="addToCartBtn">
            Ajouter
          </button>
        </div>
      </div>
    </>
  );
};

export default Fossil;
