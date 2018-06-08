import React, { Component } from 'react';
import Edit from './Edit.js'
//import './css/App.css';
//import './css/style.css';


class Inputgroup extends Component {
  constructor(props, context){
      super(props, context);
      this.state = {isaddMode: false};
      this.addModeON = this.addModeON.bind(this);
      this.addModeOFF = this.addModeOFF.bind(this);
  }
  
  addModeON(){
      this.setState({isaddMode: true});
  }
  addModeOFF(){
      this.setState({isaddMode: false});
  }
    
  default_state(){
    return (
        <div className="input-group">
            <label htmlFor="todoinput" className="add"></label>
            <input type="button" id="todoinput" className="form-control" value="Add Task" onClick={this.addModeON}/>
        </div>
    );
  }
    
  render() {
      let {onAddtask} = this.props;
      if(!this.state.isaddMode){
          return this.default_state();
      } else{
          return (<Edit addModeON={this.addModeON} editModeOFF={this.addModeOFF} onAddtask={onAddtask}/>);
      }
      
  }
}

export default Inputgroup;
