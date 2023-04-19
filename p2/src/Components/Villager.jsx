import React from "react";
import Stars from "./Stars";

const Villager = ({ villager, handleAddArticle, villager_2 }) => {
  return (
    <>
      <div className="carte">
        <h5>{villager.name["name-EUfr"]}</h5>

        <h6> price: {villager["sell-price"]},00$</h6>

        <img src={villager.image_uri} alt="villager illustration" />

        <Stars note={villager_2.note} />
        <button
          onClick={() => handleAddArticle(villager_2)}
          className="addToCartBtn"
        >
          Ajouter
        </button>
      </div>
    </>
  );
};

export default Villager;
