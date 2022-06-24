import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Cardsdata from "./Cardsdata";
import { MdAttachMoney } from "react-icons/md";
const Cards = () => {
  const [data, setData] = useState(Cardsdata);
  console.log(data);
  return (
    <div className="container mt-3">
      <h1 className=" text-center">Add to cart products</h1>
      <div className="row d-flex justify-content-center align-content-center gap-5 mt-5 ">
        {data.map((element, id) => {
          return (
            <>
              <Card className=" border-white shadow" style={{ width: "18rem" }}>
                <Card.Img
                  className="w-100"
                  variant="top"
                  style={{ height: 200, cursor: "pointer" }}
                  src={element.imgdata}
                />
                <Card.Body>
                  <Card.Title className=" text-secondary">
                    {element.rname}
                  </Card.Title>
                  <Card.Text>
                    Price:{" "}
                    <span className=" fs-5">
                      <MdAttachMoney></MdAttachMoney>
                    </span>{" "}
                    {element.price}
                  </Card.Text>
                  <div className="d-flex justify-content-center align-items-center mt-4">
                    <Button className=" col-lg-12" variant="secondary">
                      ADD TO CART
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
