import React, {useContext} from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./Nav.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Testimonials from "../Testimonials/Testimonials";
import OurTeam from "../OurTeam/OurTeam";
import OurListing from "../OurListing/OurListing";
import Search from "../Search/Search";
import SellHome from "../SellYourHome/SellYourHome";
<<<<<<< Updated upstream
import SignIn from "../SignIn/SignIn";
=======
// import SignIn from "../SignIn/SignIn";
import Registration from "../../pages/Registration";
import { UserContext } from "../../user.context";
import Admin from "../Admin";
import ListingDetails from "../OurListing/ListingDetails";
>>>>>>> Stashed changes

function Navb() {

  const userData = useContext(UserContext);

  const { user, setUser } = userData;

  const logout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Navbar bg="dark" variant={"dark"} expand="lg">
        <Container fluid>
          <Navbar.Brand className="logo" as={Link} to={"/"}>
            Company Name or Logo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to={"/"}>
                HOME
              </Nav.Link>

              {/* This is resposible for HOME */}
              <NavDropdown title="ABOUT US" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to={"/testimonials"}>
                  Testimonials
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/our-team"}>
                  Our Team
                </NavDropdown.Item>
                {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item> */}
              </NavDropdown>

              {/* This is resposible Find A HOME */}
              <NavDropdown title="FIND A HOME" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to={"/our-listing"}>
                  Our listings
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/search"}>
                  Search
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to={"/sell-your-home"}>
                SELL YOUR HOME
              </Nav.Link>
              <Nav.Link as={Link} to={"/contact"}>
                CONTACT US
              </Nav.Link>
            </Nav>

            {/* THis is resposible for sign in button */}
            <Nav>
<<<<<<< Updated upstream
              <Nav.Link as={Link} to={"/sign-in"}>
                SIGN IN
              </Nav.Link>
=======
              {user ? (
                <Nav.Link as={Link} to={"/"} onClick={logout}>
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to={"/register"}>
                  Sign In
                </Nav.Link>
              )}
>>>>>>> Stashed changes
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        {/* Default Route to Homepage */}
        <Route path="" element={<Home />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/our-listing" element={<OurListing />} />
        <Route path="/our-listing/:id" element={<ListingDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/sell-your-home" element={<SellHome />} />
<<<<<<< Updated upstream
        <Route path="/sign-in" element={<SignIn />} />
=======
        <Route path="/register" element={<Registration />} />
        <Route path="admin" element={<Admin />} />
>>>>>>> Stashed changes
      </Routes>
    </Router>
  );
}

export default Navb;
