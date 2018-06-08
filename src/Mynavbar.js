import React, { Component } from 'react';
//import './css/App.css';
//import App2 from './App2.js';

class Mynavbar extends Component {
  constructor(props, context){
      super(props, context);
      this.state = {};
  }
  render() {
    //const navnames = ["My Tasks", "In Progress", "Completed"];
    const { navnames, navstate, setNavFunc } = this.props;
    let navs = navnames.map((name, index)=>{
        let classname = "nav-link";
        if(navstate === index)
            classname += " active";
        return (
            <li key={index} className="nav-item" onClick={()=>{setNavFunc(index)}}>
                <a className={classname} href="#">{name}</a>
            </li>
        );
    });
    return (
        <div id="mynavbar" className="navbar justify-content-center content_w620px">
            <ul className="nav justify-content-center w100">
                {navs}
            </ul>
        </div>
    );
  }
}

export default Mynavbar;
