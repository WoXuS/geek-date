import logo from "../images/Logo.png";
import { Nav, Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faIdCard,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { LinkContainer } from "react-router-bootstrap";

function Header(props) {
  const NavBarItems = [
    {
      id: "/discover",
      title: "Discover",
      icon: <FontAwesomeIcon icon={faIdCard} />,
    },
    {
      id: "/likes",
      title: "Likes",
      icon: <FontAwesomeIcon icon={faHeart} />,
    },
  ];
  const UserName = "Kamil";
  const NavBarAccount = {
    id: "/profile",
    title: UserName,
    icon: <FontAwesomeIcon icon={faUser} />,
  };
  return (
    <header className="header">
      <Navbar
        className="nav-bar"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <LinkContainer to={NavBarItems[0].id}>
            <Navbar.Brand className="header__logo">
              <img src={logo} alt="GeekDate"></img>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {NavBarItems.map((item, index) => {
                return (
                  <LinkContainer key={index} to={item.id}>
                    <Nav.Link className="nav-item">
                      <div className="nav-item__icon">{item.icon}</div>
                      <div className="nav-item__title">{item.title}</div>
                    </Nav.Link>
                  </LinkContainer>
                );
              })}
            </Nav>
            <Nav>
              <LinkContainer to={NavBarAccount.id}>
                <Nav.Link className="nav-item user" eventKey={2}>
                  <div className="nav-item__icon">{NavBarAccount.icon}</div>
                  <div className="nav-item__title">{NavBarAccount.title}</div>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
export default Header;
