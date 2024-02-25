import React, { Component } from "react";
import { Fade } from "react-reveal";
import "./OpensourceCharts.css";
import PullRequestChart from "../../components/pullRequestChart/PullRequestChart";

class OpensourceCharts extends Component {
    render() {
        const theme = this.props.theme;

        return(
            <>
                <div className="os-charts-header-div">
                    <Fade bottom duration={2000} distance="20px">
                        <h1 className="os-charts-header" style={{color: theme.text}}>
                            Contributions
                        </h1>
                    </Fade>
                </div>

                <div className="os-charts-body-div">
                    <PullRequestChart />
                </div>
            </>
        );
    }
}

export default OpensourceCharts;