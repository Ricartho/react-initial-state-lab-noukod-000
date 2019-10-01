// your Bomb code here!
import React, {Component} from 'react';

export default class Bomb extends Component{
  constructor(props){
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }
  render(){
    return(
    if({this.state.secondsLeft} === 0){
      return <div>'Boom!'</div>
    }else{
      return <div>`${this.state.secondsLeft} seconds left before i go boom!`</div>
    }
      
      )
  }
}