import React, { Component } from 'react';
import Edit from './Edit.js';
//import './css/App.css';
//import './css/style.css';


class Todoitem extends Component {
  constructor(props, context){
      super(props, context);
      this.state = {isEditmode: false};
      
      this.default_show = this.default_show.bind(this);
      this.toggleEditmode = this.toggleEditmode.bind(this);
  }
  
  toggleEditmode(){
      this.setState({isEditmode: !this.state.isEditmode});
  }
    
  default_show(){
    const { data, onChangeCompleted, onChangeImportant, onEdittodo } = this.props;
    let isComplete = data.completed ? "line-through" : "";
    let isImportant = data.important ? "important" : "";
    return (
        <div className={`todoItem ${isImportant}`}>
            <div className="d-flex todoItem_main">
                <input type="checkbox" className="fas fa-square finish_checkbox" checked={data.completed} onChange={()=>{onChangeCompleted(data.id)}} />
                <label className={`todoTitle ${isComplete}`}>{data.title}</label>
                <input className="icon-star-empty star" type="checkbox" title="important" checked={data.important} onChange={()=>{onChangeImportant(data.id)}}/>
                <input className="fas fa-pencil-alt edit" type="checkbox" title="edit" checked={this.state.isEditmode} onChange={this.toggleEditmode}/>
            </div>
            <div className="d-flex todoItem_status">
                <div className="date">
                    <i className="far fa-calendar-alt"></i>
                    <label>{data.daystring} {data.timestring}</label>
                </div>
                <div className="file">
                    <i className="far fa-file"></i>
                </div>
                <div className="comment">
                    <i className="far fa-comment-dots"></i>
                </div>
            </div>
        </div>
    );
  }
    
  editmode_show(){
    const { data, onChangeCompleted, onChangeImportant, onAddtask } = this.props;
//    let isComplete = data.completed ? "line-through" : "";
//    let isImportant = data.important ? "important" : "";
    return (
        <Edit tododata={data} onAddtask={onAddtask} editModeOFF={this.toggleEditmode}/>
    );
  }
  render() {
      return (this.state.isEditmode) ? this.editmode_show() : this.default_show();
//    const { data, onChangeCompleted, onChangeImportant } = this.props;
//    let isComplete = data.completed ? "line-through" : "";
//    let isImportant = data.important ? "important" : "";
//    return (
//        <div className={`todoItem ${isImportant}`}>
//            <div className="d-flex todoItem_main">
//                <input type="checkbox" className="fas fa-square finish_checkbox" checked={data.completed} onChange={()=>{onChangeCompleted(data.id)}} />
//                <label className={`todoTitle ${isComplete}`}>{data.title}</label>
//                <input className="icon-star-empty star" type="checkbox" title="important" checked={data.important} onChange={()=>{onChangeImportant(data.id)}}/>
//                <input className="fas fa-pencil-alt edit" type="checkbox" title="edit"/>
//            </div>
//            <div className="d-flex todoItem_status">
//                <div className="date">
//                    <i className="far fa-calendar-alt"></i>
//                    <label>6/18</label>
//                </div>
//                <div className="file">
//                    <i className="far fa-file"></i>
//                </div>
//                <div className="comment">
//                    <i className="far fa-comment-dots"></i>
//                </div>
//            </div>
//        </div>
//    );
  }
}

export default Todoitem;
