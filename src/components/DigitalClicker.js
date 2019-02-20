import React, { Component } from "react";

class DigitalClicker extends Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    };
  }

  onClickAction = () => {
    this.setState({
      timesClicked: ++this.state.timesClicked
    });
  };

  render() {
    return (
      <button onClick={this.onClickAction}>{this.state.timesClicked}</button>
    );
  }
}

export default DigitalClicker;
