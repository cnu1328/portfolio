import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";

function Footer(prop) {
    return(
        <div className="footer-div">
            <Fade>
                <p className="footer-text">
                    Made with <span role="img">❤️</span> by {greeting.title}
                </p>
            </Fade>
        </div>
    );
}

export default Footer;