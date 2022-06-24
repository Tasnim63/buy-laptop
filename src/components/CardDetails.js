import React from "react";
import { Tab, Table } from "react-bootstrap";
import { MdAttachMoney } from "react-icons/md";
import { AiOutlineDelete, AiOutlineStar } from "react-icons/ai";
import "./style.css";
const CardDetails = () => {
  return (
    <div className=" container mt-2">
      <h2 className=" text-center mt-2 ">Details page</h2>
      <section className=" container my-5">
        <div className="card shadow d-flex flex-sm-column p-5  flex-lg-row ">
          <div className="items_img">
            <img
              className=" mt-4 ms-5 me-5 "
              style={{ height: 200, width: 200 }}
              src="https://img.freepik.com/free-psd/home-spaces-still-life-mockup_23-2149060795.jpg?size=626&ext=jpg&uid=R64903934&ga=GA1.2.270866342.1647831681"
              alt=""
            />
          </div>
          <div className=" ms-5  p-3">
            <Table>
              <tr>
                <td className=" me-5 ms-5">
                  <p>
                    <strong> Restaurants :</strong>laoptop Mok
                  </p>
                  <p>
                    <strong>
                      {" "}
                      price : <MdAttachMoney></MdAttachMoney>
                    </strong>
                    74756
                  </p>
                  <p>
                    <strong>Products:</strong>laoptop Mok
                  </p>
                  <p>
                    <strong>
                      {" "}
                      Total:<MdAttachMoney></MdAttachMoney>
                    </strong>
                    646453
                  </p>
                </td>

                <td className=" d-flex flex-column ms-5">
                  <p>
                    <strong>Order Review :</strong> 363454 + order placed from
                    here recently.
                  </p>
                  <p>
                    <strong>Ratings : </strong>
                    <span>8.11</span>
                    <span
                      style={{ color: "burlywood" }}
                      className="star_icons fs-6 "
                    >
                      {" "}
                      <AiOutlineStar></AiOutlineStar>
                    </span>
                  </p>
                  <p>
                    <strong>Remove:</strong>
                    <span style={{ color: "red", fontSize: 30 }}>
                      {" "}
                      <AiOutlineDelete></AiOutlineDelete>
                    </span>
                  </p>
                </td>
              </tr>
            </Table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardDetails;
