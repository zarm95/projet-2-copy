import React from "react";
import Stars from "./Stars";


const Fish = ({ fish, handleAddArticle }) => {
  return (
    <>
      <div className="carte">
        <h6>name:{fish.name}</h6>
        <h6> price: {fish.price},00$</h6>
        <img src={fish.image_url} alt="" />

        <Stars note={fish.note} />
        <button onClick={() => handleAddArticle(fish)} className="addToCartBtn">
          Ajouter
        </button>
      </div>
    </>
  );
};

export default Fish;
