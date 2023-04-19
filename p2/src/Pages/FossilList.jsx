import React, { useEffect, useState } from "react";
import Fossil from "../Components/Fossil";
import { getFossils } from "../services/api-calls";
import { v4 as uuidv4 } from "uuid";

const FossilList = ({ handleAddArticle }) => {
  const [fossils, setFossils] = useState([]);

  useEffect(() => {
    getFossils().then((FossilData) => {
      setFossils(
        FossilData.map((fossil) => ({
          ...fossil,
          note: Math.floor(Math.random() * 4) + 2,
          price: Math.floor(Math.random() * 1000) + 2000,
          id: uuidv4(),
        })).slice(0, 72)
      );
    });
  }, []);

  //console.log(fossils);
  return (
    <>
      <div className="cart-container">
        {fossils.map((fossil) => (
          <>
            <div>
              <Fossil
                key={fossil.id}
                note={fossil.note}
                villager
                fossil={fossil}
                handleAddArticle={handleAddArticle}
              />
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default FossilList;
