import React, { Component } from "react";
import "./ProjectLanguages.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class ProjectLanguages extends Component {
    render() {

        const sofrwareSkills = this.props.logos.map((logo) => {
            return(
                <OverlayTrigger
                    key={logo.name}
                    placement={"top"}
                    overlay={
                        <Tooltip>
                            <strong>{logo.name}</strong>
                        </Tooltip>
                    }
                >
                    <li className="software-skill-inline-languages" name={logo.skillName}>
                        <span 
                            className="iconify"
                            data-icon={logo.iconifyClass}
                            data-inline="fasle"
                        ></span>
                    </li>

                </OverlayTrigger>
            );
        })

        return(
            <>
                <div className="software-skills-main-div">
                    <ul className="dev-icons-languages">
                        {sofrwareSkills}
                    </ul>
                </div>
            </>
        );
    }
}

export default ProjectLanguages;