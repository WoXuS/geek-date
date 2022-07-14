import logo from "./images/Logo.png";
//import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Footer (props){

    return (
        <div className="footer">
        <footer className="footer footer-container">
            <img src={logo} alt="GeekDate"></img>
            Kamil Woźniak © All rights reserved!
        </footer>
        </div>
    );
}

export default Footer;