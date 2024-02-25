import React, { Component } from "react";
import "./Skills.css";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import FullStackImg from "./FullStackImg";
import SoftwareSkill from "../../components/softwareSkill/SoftwareSkill";
import ProblemImg from "./ProblemImg";

function GetSkillSvg(props) {
    if (props.fileName === "FullStackImg")
        return <FullStackImg theme={props.theme} />
    else if (props.fileName === "ProblemImg")
        return <ProblemImg theme={props.theme} />

        
}

class SkillSection extends Component {
    render() {
        const theme = this.props.theme;

        const Skills = skills.data.map((skill) => {

            const subSkills = skill.skills.map((skillSentence) => {
                return (
                    <li
                        className="subTitle skills-text"
                        style={{color: theme.secondaryText }}
                    >
                        {skillSentence}
                    </li>
                );
            });

            return(
                <div className="skills-main-div">
                    <Fade left duration={2000}>
                        <div className="skills-image-div">
                            <GetSkillSvg fileName={skill.fileName} theme={theme} />
                        </div>
                    </Fade>

                    <div className="skills-text-div">
                        <Fade right duration={1000}>
                            <h1 className="skills-heading" style={{color: theme.text}}>
                                {skill.title}
                            </h1>
                        </Fade>

                        <Fade right duration={1500}>
                            <SoftwareSkill logos={skill.softwareSkills} />
                        </Fade>

                        <Fade right duration={2000}>
                            <ul className="skills-text-ul">
                                {subSkills}
                            </ul>
                        </Fade>

                    </div>
                </div>
            );
        });

        return(
            <div>
               {Skills}
            </div>
        );
    }
}

export default SkillSection;