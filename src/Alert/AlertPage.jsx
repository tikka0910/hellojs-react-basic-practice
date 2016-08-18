// var React = require('react');
var AlertButton = require('Alert/AlertButton.jsx');

class AlertPage extends React.Component {
  render() {
    var text = ["qoo","yoo","dada","meow"];
    return (
      <div>
        {text.map((value, key)=>{
          return <AlertButton num={key + 1} key={key} text={ value }/>;
        })}

        {(function(){
          if (text.length >= 3){
            return <button>True</button>;
          }
          else{
            return <button>False False</button>;
          }
        })()}
      </div>
    );
  }
}
module.exports = AlertPage;
