// var React = require('react');

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h1>
        Counter ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}
module.exports = Counter;
