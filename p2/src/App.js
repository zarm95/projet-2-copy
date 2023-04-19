import { Route, Routes } from "react-router-dom";
import FishList from "./Pages/FishList";
import Detail from "./Pages/Detail";
import FossilList from "./Pages/FossilList";
import { useState } from "react";
import VillagersList from "./Pages/VillagersList.jsx";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./Components/SideBar";
import Filter from "./Components/Filter";
import "./styles/App.css";

function App() {
  const [show, setShow] = useState(false);
  async function generateid(article) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(article);
      }, 500);
    });
  }

  const [articles, setArticles] = useState([]);
  async function handleAddArticle(article) {
    const art = await generateid(article);

    setArticles([...articles, art]);
  }
  
  return (
    <>
      <Header aticleQuatity={articles.length} setShow={setShow} show={show} />
      <Filter />



      <Routes>
        <Route
          path="/fossil"
          element={<FossilList handleAddArticle={handleAddArticle} />}
        />
      

      
        <Route
          path="/Villager"
          element={<VillagersList handleAddArticle={handleAddArticle} />}
        />
      
        <Route
          path="/Fish"
          element={<FishList handleAddArticle={handleAddArticle} />}
        />
      
        <Route
          path="/Detail"
          element={<Detail handleAddArticle={handleAddArticle} />}
        />
      
      </Routes>
      <SideBar
        show={show}
        setShow={setShow}
        articles={articles}
        setArticles={setArticles}
      />
      
      
    </>
  );
}

export default App;
