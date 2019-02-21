// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  };

  handleClickBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  handleClickRes = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: { resolution: '720p' }
      }
    });
  };
  render() {
    console.log(this.state.settings);
    return (
      <div>
        <button className='bitrate' onClick={this.handleClickBitrate}>
          Change Bitrate to 12
        </button>
        <button className='resolution' onClick={this.handleClickRes}>
          Change Resolution to 720p
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
