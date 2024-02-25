import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { Fade } from "react-reveal";
import  "./PullRequestChart.css";

class PullRequestChart extends Component {
    render() {

        return(
            <div className="pr-chart">
                <Fade bottom duration={2000} distance="20px">
                    <h1 className="pr-chart-header">
                        Pull Request Distribution
                    </h1>
                </Fade>

                {/* <Doughnut 
                    data = {data}
                    options={{
                        padding: "0",
                        margin: "0",
                        responsive: true,
                        maintainAspectRatio: true,

                        animation: {
                            duration: 4000,
                        }
                    }}
                /> */}
            </div>
        );
    }
}

export default PullRequestChart;