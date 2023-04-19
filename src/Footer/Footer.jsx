import React from "react";
import { Link } from "react-router-dom";
import FooterCompany from "./FooterCompany/FooterCompany";
import FooterUseful from "./FooterUseful/FooterUseful";
import FooterBuyer from "./FooterBuyer/FooterBuyer";
import FooterContact from "./FooterContact/FooterContact";

function Footer() {
  return (
    <div className="footer">
        <FooterCompany/>
        <FooterUseful/>
        <FooterBuyer/>
        <FooterContact/>
    </div>
  );
}

export default Footer;
