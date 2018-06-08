import React, { Component } from 'react';
import './css/style.css';
import './css/my.css';
import Mynavbar from './Mynavbar.js';
import Inputgroup from './Inputgroup.js';
import Todolist from './Todolist.js';


class App extends Component {
  constructor(props, context){
      super(props, context);
      this.state = {todos: [
      ],
      navstate: 0,
      };
//      {
//          id: 1,
//          title: "123",
//          comment: "321321321",
//          completed: false,
//          important: true,
//          daystring: "2018-06-12",
//          timestring: "10:10"
//      },{
//          id: 2,
//          title: "888321",
//          comment: "88888",
//          completed: true,
//          important: false,
//          daystring: "2018-06-12",
//          timestring: "10:10"
//      },
      this.setNavstate = this.setNavstate.bind(this);
      this.onChangeCompleted = this.onChangeCompleted.bind(this);
      this.onChangeImportant = this.onChangeImportant.bind(this);
      this.getTaskleft = this.getTaskleft.bind(this);
      this.getTaskcompleted = this.getTaskcompleted.bind(this);
      this.taskIndicator = this.taskIndicator.bind(this);
      this.onAddtask = this.onAddtask.bind(this);
      this.onEdittodo = this.onEdittodo.bind(this);
  }

  getTaskleft(){
      let count = 0;
      this.state.todos.forEach((todo)=>{
          if(!todo.completed)
              count += 1;
      });
      return count;
  }
    
  getTaskcompleted(){
      let count = 0;
      this.state.todos.forEach((todo)=>{
          if(todo.completed)
              count += 1;
      });
      return count;
  }
    
  taskIndicator(navstate){
      let str = "";
      if(navstate === 2){
          str = `${this.getTaskcompleted()} task${this.getTaskcompleted() < 2 ? "" : "s"} completed`;
      } else{
          str = `${this.getTaskleft()} task${this.getTaskleft() < 2 ? "" : "s"} left`;
      }
      return (
        <div>
            <label id="taskleft">{str}</label>
        </div>
      );
  }

  setNavstate(index){
      if(this.state.navstate !== index)
          this.setState({navstate: index});
  }

  onChangeCompleted(todoid){
//      console.log(todoid);
      this.state.todos.find((todo)=>{
          if(todo.id === todoid){
              todo.completed =  !todo.completed;
//              console.log(this.state.todos);
              this.setState({todos: this.state.todos});
              return true;
          }
          return false;
      });
  }

  onAddtask(tododata){
      console.log(tododata);
      //找最大的id數字+1
      let newId = 0;
      this.state.todos.forEach((todo)=>{
          newId = (newId <= todo.id) ? todo.id : newId;
      });
      newId += 1;
      //排序
//      let newId = this.state.todos.sort(function (a, b) {
//          return b.id - a.id;
//      })[0].id + 1;
      console.log(newId);
      tododata.id = newId;
      this.state.todos.push(tododata);
      this.setState({todos: this.state.todos});
  }
    
  onEdittodo(tododata){
      this.state.todos.find((todo, index)=>{
          if(todo.id === tododata.id){
              todo =  tododata;
              this.setState({todos: this.state.todos});
              return true;
          }
          return false;
      });
  }
    
  onChangeImportant(todoid){
//      console.log(todoid);
      this.state.todos.find((todo)=>{
          if(todo.id === todoid){
              todo.important =  !todo.important;
//              console.log(this.state.todos);
              this.setState({todos: this.state.todos});
              return true;
          }
          return false;
      });
  }

  render() {
    let todos = this.state.todos;
    let navstate = this.state.navstate;
    const navnames = ["My Tasks", "In Progress", "Completed"];
//    console.log("render");
    return (
      <div className="App">
        <Mynavbar navnames={navnames} navstate={navstate} setNavFunc={this.setNavstate}/>
        <div className="main_container content_w620px">
            <Inputgroup onAddtask={this.onAddtask}/>
            <Todolist todos={todos} onChangeCompleted={this.onChangeCompleted} onChangeImportant={this.onChangeImportant} navstate={navstate} onEdittodo={this.onEdittodo}/>
            {this.taskIndicator(navstate)}
        </div>
      </div>
    );
  }
}

export default App;
