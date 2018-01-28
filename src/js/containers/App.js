import React, { Component } from 'react';
import flightPathAngle from '../scripts/flightPathAngle';

class App extends Component {
  constructor() {
    super();

    this.state = {
      radiusOne: undefined,
      radiusTwo: undefined,
      eccentricity: undefined,
      trueAnomaly: undefined,
      timeOfFlight: undefined,
      flightPathAngle: undefined
    }
  }

  setEccentricity(e) {
    this.setState({
      eccentricity: e.target.value
    })
  }

  setTrueAnomaly(e) {
    this.setState({
      trueAnomaly: e.target.value
    })
  }

  setRadiusOne(e) {
    this.setState({
      radiusOne: e.target.value
    })
  }

  setRadiusTwo(e) {
    this.setState({
      radiusTwo: e.target.value
    })
  }

  setTimeOfFlight(timeOfFlight) {
    this.setState({
      timeOfFlight: timeOfFlight
    })
  }

  setFlightPathAngle(flightPathAngle) {
    this.setState({
      flightPathAngle: flightPathAngle
    })
  }

  render() {
    return (
      <div>
        <div>Flight Path Angle</div>
        <input type="number" placeholder="Orbit Eccentricity" value={this.state.eccentricity} onChange={this.setEccentricity.bind(this)} />
        <input type="number" placeholder="True Anomaly" value={this.state.trueAnomaly} onChange={this.setTrueAnomaly.bind(this)} />
        <button onClick={() => {
          this.setFlightPathAngle(flightPathAngle(this.state.trueAnomaly*Math.PI/180, this.state.eccentricity));
        }}>
          Calculate Flight Path Angle
        </button>

        <div>
          <p>{this.state.flightPathAngle}</p>
        </div>
      </div>
    );
  }
}

export default App;
