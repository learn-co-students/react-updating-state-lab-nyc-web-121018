import React, { Component } from "react";

class YouTubeDebugger extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      }
    };
  }

  changeBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  changeResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: "720p"
        }
      }
    });
  };

  whatIsState = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.changeBitrate}>
          Bitrate Button
        </button>
        <button className="resolution" onClick={this.changeResolution}>
          Resolution Button
        </button>
        <button onClick={this.whatIsState}> what is state?</button>
      </div>
    );
  }
}

export default YouTubeDebugger;
