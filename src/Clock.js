import React from 'react';

class Clock extends React.PureComponent {
	state = {
     time: new Date()
  }

  componentDidMount() {
  	this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnMount() {
  	clearInterval(this.interval);
  }

  tick(){
  	this.setState({
  		time: new Date()
  	}) 
  }

	render() {
		return (
			<p>{this.state.time.toLocaleTimeString()}</p>
		);
	}
}

export default Clock;