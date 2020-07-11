import React from 'react'
import './tip.css';
export default class Tip extends React.Component{
    constructor(props){
        super(props);
        this.props=props
        this.state={
            currenIndedx:0
        }
    }
    tipOnclick(index){ 
        this.setState({
            currenIndedx:index
        })
        
       console.log(index)
        this.props.tipOnclick(index)
    }
    render(){
       const {tip}=this.props
       return(
        <div>
        {tip.map((e,index)=>{
            return(
                <div key={index} onClick={e=>this.tipOnclick(index)}><span className={this.state.currenIndedx===index?'actived':null}>{e}</span></div>)
        })}
    </div>
       )
    }
}