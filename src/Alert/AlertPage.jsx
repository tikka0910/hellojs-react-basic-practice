var React = require('react');
var AlertButton = require('Alert/AlertButton.jsx');

class AlertPage extends React.Component {
  render() {
    return (
      <div>
        <AlertButton text='hello'/>
        <AlertButton text='zet'/>
        <AlertButton text='moomoo'/>
      </div>
    );
  }
}
module.exports = AlertPage;
