import React, { Component } from "react";
import "./CompetitiveSites.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class CompetitiveSites extends Component {
    render() {

        const icons = this.props.logos.map((logo) => {
            return(
                <OverlayTrigger
                    key={logo.siteName}
                    placement={"top"}
                    style={{marginBottom: "5px"}}
                    overlay={
                        <Tooltip id={`tool-tip`}>
                            <strong>{logo.siteName}</strong>
                        </Tooltip>
                    }
                >

                    <li className="competitive-sites-inline" name={logo.siteName}>
                        <a 
                            href={logo.profileLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        
                        >
                            <span 
                                className="iconify"
                                data-icon={logo.iconifyClassName}
                                style={logo.style}
                                data-inline="false"
                            
                            >

                            </span>
                        </a>
                    </li>

                </OverlayTrigger>
            );
        });

        return(
            <div className="competitive-sites-main-div">
                <div>
                    <ul className="dev-icons">
                        {icons}
                    </ul>
                    
                </div>
            </div>
        );
    }
}

export default CompetitiveSites;