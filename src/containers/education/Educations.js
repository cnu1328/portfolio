import React, { Component } from "react";
import "./Educations.css";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";
import DegreeCard from "../../components/degreeCard/DegreeCard";


class Educations extends Component {
    render() {
        const theme = this.props.theme;

        const degreeCards = degrees.degrees.map((degree) => {
            return <DegreeCard degree={degree} theme={theme} />
        });

        return(
            <div className="main" id="educations">
                <div className="educations-header-div">
                    <Fade bottom duration={2000} distance="20px">
                        <h1 className="educations-header" style={{color: theme.text}}>
                            Degrees
                        </h1>
                    </Fade>
                </div>

                <div className="educations-body-div">
                    {degreeCards}
                </div>

            </div>

        );
    }
}

export default Educations;