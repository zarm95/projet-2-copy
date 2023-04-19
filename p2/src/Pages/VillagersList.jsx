import React, { useEffect, useState } from "react";
import Villager from "../Components/Villager";
import { getVillagers } from "../services/api-calls";
import "bootstrap/dist/css/bootstrap.min.css";
import {v4 as uuidv4} from "uuid";


const VillagersList = ({ handleAddArticle }) => {
  const [villagers, setVillagers] = useState([]);


  useEffect(() => {
    getVillagers().then((VillagerData) => {
      setVillagers(
        VillagerData.map((villager) => ({
          ...villager,
          note: Math.floor(Math.random() * 2) + 3,
          price: Math.floor(Math.random() * 100) + 200,
          id: uuidv4(),
          
        })).slice(0, 25)
      );
    });
  }, []);

  return (
    <>
      <div className="cart-container">
        {villagers.map((villager) => (
          <>
            <Villager
              key={villager.id}
              note={villager.note}
              villager={villager[0]}
              villager_2={villager}
              handleAddArticle={handleAddArticle}
            />
          </>
        ))}
      </div>
    </>
  );
};

export default VillagersList;
