import React, { Component } from "react";
import "./OrganisationList.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Fade from "react-reveal";

class OrganisationList extends Component {
    render() {

        const logos = this.props.logos.map((logo) => {
            return(
                <OverlayTrigger
                    key={logo["login"]}
                    placement={"top"}
                    style={{marginBottom: "5px"}}
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            <strong>{logo["login"]}</strong>
                        </Tooltip>
                    }

                >
                    <li className="organisations-inline" name={logo["login"]}>
                        <Fade bottom duration={2000} distance="40px">
                            <img 
                                src={logo["avatarUrl"]} 
                                alt={logo["login"]}
                                className="organisations-img" 
                            />
                        </Fade>
                    </li>

                </OverlayTrigger>
            );
        });

        return(
            <div className="organisations-main-div">
                <ul className="dev-icons-orgs">
                    {logos}
                </ul>
            </div>
        );
    }
}

export default OrganisationList;