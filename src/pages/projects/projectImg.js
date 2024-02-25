import React, { Component } from "react";
import Tele from "../../assests/svg/Collab-bro.png";

class ProjectImg extends Component {
    render() {
        return(
            <>
                <img src={Tele} className="collab"  alt="Innovation" />
            </>
        );
    }
}

export default ProjectImg;