import React, { Component } from "react";
import Tele from "../../assests/svg/Telecommuting-pana.png";

class FeelingProud extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <img src={Tele} className="tele" alt="Tele Communicate Animate" />
      </div>
    );
  }
}

export default FeelingProud;
