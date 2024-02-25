import React, { Component } from "react";
import "./Organisations.css";
import { Fade } from "react-reveal";
import OrganisationsData from "../../shared/opensource/organisations.json";
import OrganisationList from "../../components/organisationList/OrganisationList";

class Organisations extends Component {
    render() {
        const theme = this.props.theme;
        return(
            <div id="organisations">
                <div className="organisations-header-div">
                    <Fade bottom duration={2000} distance="20px">
                        <h1 className="organisations-header" style={{color: theme.text}}>
                            Contributed Organisations
                        </h1>
                    </Fade>
                </div>

                <OrganisationList logos={OrganisationsData["data"]} />
            </div>
        );
    }
}

export default Organisations;