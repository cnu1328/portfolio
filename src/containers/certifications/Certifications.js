import React, { Component } from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

class Certifcations extends Component {
    render() {
        const theme = this.props.theme;

        const certificates = certifications.certifications.map((cert) => {
            return <CertificationCard certificate={cert} theme={theme}></CertificationCard>
        });

        return(
            <div className="main" id="certs">
                <div className="certs-header-div">
                    <Fade bottom duration={2000} distance="20px">
                        <h1 className="certs-header">
                            Certifications
                        </h1>
                    </Fade>
                </div>

                <div className="certs-body-div">
                    {certificates}
                </div>
            </div>
        );
    }
}

export default Certifcations;