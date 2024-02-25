import React, { Component } from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faBootstrap, faGithub, faNodeJs, faNpm } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
    
class SoftwareSkill extends Component {
    render() {

        const icons = this.props.logos.map((logo) => {
            return(
                <OverlayTrigger
                    key={logo.skillName}
                    placement={"top"}
                    overlay={
                        <Tooltip
                            id={`tooltip-top`}
                        >
                            <strong>{logo.skillName}</strong>
                        </Tooltip>
                    }
                >
                    <li className="software-skill-inline" key={logo.skillName}>
                        <FontAwesomeIcon icon={logo.fontAwesomeClassname} style={logo.style} />
                        
                    </li>
                </OverlayTrigger>
            );
        });

        return(
            <div>
                <div className="software-skills-main-div">
                    <ul className="dev-icons">
                        {icons}
                    </ul>
                </div>
            </div>
        );
    }
}

export default SoftwareSkill;