import React from "react";
import { useLocation } from "react-router-dom";
import Stars from "../Components/Stars";
import { useNavigate } from "react-router-dom";

const Detail = ({ handleAddArticle }) => {
  let navigate = useNavigate();
  const handleRetourn = () => {
    navigate("/fossil");
  };

  const location = useLocation();
  console.log(location.state);
  return (
    <>
    <div className="containerDetails">
      <div className="carteDetails">
        <h4>name:{location.state["file-name"]}</h4>
        <h4>price : {location.state.price},00 $</h4>
        <div className="image">
          <img src={location.state.image_uri} alt="" />
        </div>
        <Stars note={location.state.note} />
        <p> {location.state["museum-phrase"]}</p>

        <div className="btn">
          <button
            onClick={() => handleAddArticle(location.state)}
            className="addToCartBtn"
          >
            Ajouter
          </button>
          <button onClick={() => handleRetourn()} className="addToCartBtn">
            Retour
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Detail;
