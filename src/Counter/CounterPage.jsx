require('vendor/vendor.scss');
require('Counter/CounterPage.scss');

var React = require('react');
var Counter = require('Counter/Counter.jsx');

class CounterPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Counter increment={5}/>
      </div>
    );
  }
}
module.exports = CounterPage;
