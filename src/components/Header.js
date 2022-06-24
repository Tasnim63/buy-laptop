import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BsCart } from "react-icons/bs";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./Header.css";
import { ImCross } from "react-icons/im";
import { BsFillCartXFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Navbar
        style={{ height: "60px" }}
        sticky="top"
        bg="secondary"
        variant="dark"
      >
        <Container>
          <Navbar.Brand className=" fw-bold fs-3" href="#home">
            LatestLaptop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <NavLink
                className="text-decoration-none me-3 text-light p-2"
                to="/"
              >
                ADD TO CART
              </NavLink>
              <NavLink
                className="text-decoration-none me-3 text-light p-2"
                to="/"
              >
                HOME
              </NavLink>
            </Nav>{" "}
            <span className="icon fs-3  text-light">
              {" "}
              <Badge badgeContent={4} color="primary">
                <BsCart
                  color="action"
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                />
              </Badge>
            </span>
          </Navbar.Collapse>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <div
            className="card_details d-flex justify-content-center align-content-center"
            style={{ width: "24rem", padding: 10, position: "relative" }}
          >
            <span
              className="smallclose "
              style={{
                position: "absolute",
                top: 2,
                right: 2,
                fontSize: 23,
                cursor: "pointer",
                marginRight: 20,
              }}
              onClick={handleClose}
            >
              <ImCross></ImCross>
            </span>
            <p style={{ fontSize: 22, marginTop: 40, marginRight: 10 }}>
              Your cart is empty
            </p>
            <span
              className="emptycart_img"
              style={{ fontSize: 70, marginRight: 100 }}
            >
              <BsFillCartXFill></BsFillCartXFill>
            </span>
          </div>
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
