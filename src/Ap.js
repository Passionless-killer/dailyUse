import React from 'react';
import './App.css';
import Tip from './tip'
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(){
    super()
    this.title=['流行','新款','精选']
    this.state={
      content:this.title[0]
    }
  }
  tipOnclick(index){
    var a=''
    
    switch(index){
      case 0:
        a=this.title[0]
        break;
      case 1:
        a=this.title[1]
        break;
      case 2:
        a=this.title[2]
        break;
      default:
        a=this.title[0]
      break;
    }
    this.setState({
      content:a
    })
  }
  render(){
    return (
      <div className="App">
        <Tip tip={this.title} tipOnclick={(index)=>this.tipOnclick(index)}/>
    <p>{this.state.content}</p>
      </div>
    );
  }
  
  

}
Tip.propTypes = {
  title: PropTypes.string
}
Tip.defaultProps = {
  title: "流行，新款，精选"
}
export default App;
