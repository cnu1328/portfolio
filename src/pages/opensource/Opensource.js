import React, { Component } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./Opensource.css";
import Organisations from "../../containers/organisations/Organisations";
import OpensourceCharts from "../../containers/opensourceCharts/OpensourceCharts";

class Opensource extends Component {
    render() {

        return(
            <div className="opensource-main">
                <Header theme={this.props.theme} />
                {/* <Organisations theme={this.props.theme} /> */}

                <OpensourceCharts theme={this.props.theme} />
                <Footer theme={this.props.theme} />
                <TopButton theme={this.props.theme} />
            </div>
        );
    }
}

export default Opensource;