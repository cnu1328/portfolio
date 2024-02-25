import React, { Component } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./Education.css";
import { Fade } from "react-reveal";
import EducationImg from "./EducationImg";
import CompetitiveSites from "../../components/competitiveSites/competitiveSites";
import { competitiveSites } from "../../portfolio";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";

class Education extends Component {
    render() {
        const theme  = this.props.theme;
        return(
            <div className="education-main">
                <Header theme={this.props.theme} />

                <div className="basic-education">
                    <Fade bottom duration={2000} distance="40px">
                        <div className="heading-div">
                            <div className="heading-img-div">
                                <EducationImg theme={theme} />
                            </div>

                            <div className="heading-text-div" >
                                <h1 className="heading-text" style={{ color: theme.text }}>
                                    Education
                                </h1>

                                <h3 className="heading-subtext">
                                    Basic Qualification and Certifcations
                                </h3>

                                <CompetitiveSites logos={competitiveSites.comptetitiveSites} />
                            </div>
                        </div>
                    </Fade>
                    <Educations theme={this.props.theme} />
                    <Certifications theme={this.props.theme} />
                </div>
                <Footer theme={this.props.theme} />
                <TopButton theme={this.props.theme} />
            </div>
        );
    }
}

export default Education;