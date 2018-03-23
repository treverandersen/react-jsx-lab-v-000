import React from 'react'
import FillerText from './FillerText'

class Webpage extends React.Component {
  render() {
    return (
      <div className="webpage">
        <h1>The worlds coolest webpage</h1>
        <FillerText />
        <FillerText />
      </div>
    );
  }
}

export default Webpage;
