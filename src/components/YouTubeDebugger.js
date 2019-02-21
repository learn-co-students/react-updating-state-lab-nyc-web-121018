import React, {Component, Fragment} from 'react';

class YouTubeDebugger extends Component{
  constructor(props){
    super(props)
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleClickBitrate = e => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    }, () => console.log(this.state))
  }

  handleClickResolution = e => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    }, () => console.log(this.state))
  }

  render(){
    return (
      <Fragment>
        <button
            className='bitrate'
            onClick={this.handleClickBitrate}
          >
          Bitrate Button
        </button>

        <button
            className='resolution'
            onClick={this.handleClickResolution}
          >
          Resolution Button
        </button>
      </Fragment>
    )
  }
}

export default YouTubeDebugger
