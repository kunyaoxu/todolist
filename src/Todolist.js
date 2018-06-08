import React, { Component } from 'react';
import Todoitem from './Todoitem.js';
//import './css/App.css';
//import './css/style.css';


class Todolist extends Component {
  constructor(props, context){
      super(props, context);
      this.state = {};
  }

  render() {
    const { todos, onChangeCompleted, onChangeImportant, navstate, onEdittodo } = this.props;
    const todoitems = todos.map((data)=>{
        if(!data.completed){
            return <Todoitem key={data.id} data={data} onChangeCompleted={onChangeCompleted} onChangeImportant={onChangeImportant} onAddtask={onEdittodo}/>
        }
    });
    const todoitems_completed = todos.map((data)=>{
        if(data.completed){
            return <Todoitem key={data.id} data={data} onChangeCompleted={onChangeCompleted} onChangeImportant={onChangeImportant} onAddtask={onEdittodo}/>
        }
    });
    
    return (
        <div className="todolist">
            {navstate === 2 ? "" : todoitems}
            {navstate === 1 ? "" : todoitems_completed}
        </div>
    );
  }
}

export default Todolist;
