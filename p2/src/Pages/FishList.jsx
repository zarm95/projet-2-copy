import { getFishs } from "../services/api-calls";
import "bootstrap/dist/css/bootstrap.min.css";
import Fish from "../Components/Fish";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
const FishList = ({ handleAddArticle }) => {
  const [fishs, setFishs] = useState([]);

  useEffect(() => {
    getFishs().then((fishsData) => {
      setFishs(
        fishsData
          .map((fish) => ({
            ...fish,
            note: Math.floor(Math.random() * 2) + 3,
            price: Math.floor(Math.random() * 100) + 200,
            id: uuid(),
          }))
          .slice(0, 10)
      );
    });
  }, []);
  console.log(fishs[0]);

  return (
    <>
      <div className="cart-container">
        {fishs.map((fish) => (
          <>
            <Fish
              key={fish.name}
              note={fish.note}
              fish={fish}
              handleAddArticle={handleAddArticle}
            />
          </>
        ))}
      </div>
    </>
  );
};

export default FishList;
