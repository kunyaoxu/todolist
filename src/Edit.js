import React, { Component } from 'react';
//import './css/App.css';
//import './css/style.css';


class Edit extends Component {
  constructor(props, context){
      super(props, context);
      let initData = {
          id: -1,
          completed: false,
          title: "",
          important: false,
          daystring: "",
          timestring: "",
          comment: "",
      };
      const {tododata} = this.props;
      console.log(tododata);
      initData = tododata ? tododata : initData;
      this.state = {
          data: initData,
          onEdit: true,
          okTosave: Boolean(tododata)
      };
      
      console.log(this.state);

      this.settitleValue = this.settitleValue.bind(this);
      this.setday = this.setday.bind(this);
      this.settime = this.settime.bind(this);
      this.toggleImportant = this.toggleImportant.bind(this);
      
      this.settextareaValue = this.settextareaValue.bind(this);
      this.onSave = this.onSave.bind(this);
      this.toggleEditmode = this.toggleEditmode.bind(this);
  }
    
  settitleValue(e){
      let data = this.state.data;
      data.title = e.target.value;
      this.setState({data: data});
      if(e.target.value.length > 0)
          this.setState({okTosave: true});
      else
          this.setState({okTosave: false});
  }
    
  settextareaValue(e){
      let data = this.state.data;
      data.comment = e.target.value;
      this.setState({data: data});
  }
  
  setday(e){
      let data = this.state.data;
      data.daystring = e.target.value;
      this.setState({data: data});
  }
    
  settime(e){
      let data = this.state.data;
      data.timestring = e.target.value;
      this.setState({data: data});
  }
    
  onSave(editModeOFF_func, onAddtask_func){
      onAddtask_func(this.state.data);
      editModeOFF_func();
  }
    
  toggleEditmode(editModeOFF_func){
      //this.setState({onEdit: !this.state.onEdit});
      //console.log(!this.state.onEdit);
      //if(this.state.onEdit){
          editModeOFF_func();
      //}
  }

  toggleImportant(){
      let data = this.state.data;
      data.important = !data.important;
      this.setState({data: data});
  }
  
  render() {

    const { editModeOFF, onAddtask } = this.props;
//    let isComplete = data.completed ? "line-through" : "";
//    let isImportant = data.important ? "important" : "";
      console.log(this.state);
    return (
        <div className={`editon todoItem ${"isImportant"}`}>
            <div className="d-flex todoItem_main">
                <input type="checkbox" className="fas fa-square finish_checkbox"/>
                <input type="text" className={`todoTitle ${""}`} autoFocus required={true} placeholder="Type title here..." value={this.state.data.title} onChange={this.settitleValue}/>
                <input className="icon-star-empty star" type="checkbox" title="important" checked={this.state.data.important} onChange={this.toggleImportant}/>
                <input className="fas fa-pencil-alt edit" type="checkbox" title="edit" checked={this.state.data.onEdit} onChange={()=>{this.toggleEditmode(editModeOFF)}}/>
            </div>
            <div className="todoItem_editstatus">
                    <div className="deadlineArea">
                        <div>
                            <i className="far fa-calendar-alt"></i>
                            <label>Deadline</label>
                        </div>
                        <div className="timearea">
                            <input className="dayselector" type="date" name="day" value={this.state.data.daystring} onChange={this.setday}/>
                            <input className="timeselector" type="time" name="time" value={this.state.data.timestring} onChange={this.settime}/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <i className="far fa-comment-dots"></i>
                            <label>Comment</label>
                        </div>
                        <div className="commentarea">
                            <textarea placeholder="Type your memo here..." value={this.state.data.comment} onChange={this.settextareaValue}></textarea>
                        </div>
                    </div>
            </div>
            <div className="d-flex cancel_save">
                <input type="button" className="btn cancelBtn" value="cancel" onClick={editModeOFF}/>
                <input type="button" className="btn saveBtn" value="Save" disabled={!this.state.okTosave} onClick={()=>{this.onSave(editModeOFF, onAddtask)}}/>
            </div>
        </div>
    );

  }
}

export default Edit;
