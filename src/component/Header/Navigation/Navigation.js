import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../Hooks/useAuth";
import "./Navigation.css";

const Navigation = () => {
  const { user, logOut, loading } = useAuth();

  return (
    <Navbar expand="lg" className="sticky-top navigation">
      <Container className="container" fluid>
        <Navbar.Brand href="#">
          <i className="fas fa-clinic-medical fs-2 text-white"></i>
          <span className="fw-bold ms-2 text-white">SONIA CLINIC</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto  my-lg-0"
            style={{ maxHeight: "200px" }}
            navbarScroll
          >
            <Nav.Link
              as={HashLink}
              active
              className="text-white fs-6 mt-2 mt-lg-0  "
              to="/home#home"
            >
              HOME
            </Nav.Link>

            <Nav.Link
              as={HashLink}
              className="text-white fs-6  me-1"
              to="/home#service"
            >
              SERVICE
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              className="text-white me-1"
              to="/home#medicine"
            >
              MEDICINE
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              className="text-white me-1"
              to="/home#about"
            >
              ABOUT
            </Nav.Link>

            <Nav.Link
              as={HashLink}
              className="text-white me-1"
              to="/homeservice"
            >
              HOME-SERVICES
            </Nav.Link>

            <Nav.Link as={HashLink} className="text-white me-1" to="/tips">
              TIPS
            </Nav.Link>

            {user ? (
              <Nav.Link
                as={NavLink}
                onClick={logOut}
                className="text-primary fw-bold"
                to="/login"
              >
                LOGOUT
              </Nav.Link>
            ) : (
              <Nav.Link
                as={NavLink}
                className="text-primary fw-bold"
                to="/login"
              >
                LOGIN
              </Nav.Link>
            )}

            <div className="d-flex justify-content-center align-items-center">
              <span className="text-black ms-1 fs-5 ">{user?.displayName}</span>
              <img
                className="mx-2 rounded-circle"
                width="35"
                src={user?.photoURL}
                alt=""
              />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
