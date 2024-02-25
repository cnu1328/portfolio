import React, { Component } from "react";
import "./experienceAccording.css";
import { Accordion, Panel } from "baseui/accordion";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";

class ExperienceAccordion extends Component {
    render() {
        const theme = this.props.theme;

        const experience = this.props.sections.map((section) => {
            return (
                <Panel
                    className="accord-panel"
                    title={section["title"]}
                    key={section["title"]}
                >
                    {section["experiences"].map((experience) => {
                        return (
                            <ExperienceCard experience={experience} theme={theme} />
                        );
                    })}
                </Panel>
            );
        });

        return (
            <div className="experience-accord">
                <Accordion
                    onChange={({ expanded }) => console.log(expanded)}
                    renderAll 
                >
                    {experience}
                </Accordion>
            </div>
        );
    }
}

export default ExperienceAccordion;
