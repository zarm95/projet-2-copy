import { Offcanvas, Stack } from "react-bootstrap";
import Stars from "./Stars";

import React from "react";

const SideBar = ({ show, setShow, articles, setArticles }) => {
  const handleClose = () => {
    setShow(false);
  };
  const handleDelete = (articletodelate) => {
    const articleCopy = articles.filter(
      (article) => article.id !== articletodelate.id
    );

    setArticles(articleCopy);
  };

  return (
    <Offcanvas show={show} placement="end" onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack>
          <div className="containerCart">
            {articles?.map((article) => (
              <>
                <div className="carteInCart">
                  <div className="columnLeftCartArticle">
                    <h6>
                      {article["sell-price"]
                        ? article["sell-price"]
                        : article.price}
                      ,00$
                    </h6>

                    <h6>
                      {" "}
                      {article.name["name-USen"]
                        ? article.name["name-USen"]
                        : article.name}
                    </h6>
                  </div>

                  <div className="columnCenterCartArticle">
                    <img src={article.image_uri} alt="" />
                    <img src={article.image_url} alt="" />

                    <Stars note={article.note} />
                  </div>

                  <div className="columnRightCartArticle">
                    <button
                      key={article.cle}
                      onClick={() => handleDelete(article)}
                      className="btnDeleteCart"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SideBar;
