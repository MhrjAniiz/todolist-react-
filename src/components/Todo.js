import React, { Component } from "react";

class Todo extends Component {
  constructor(){
    super()
    this.state={
      status:false
    }
  }

  handleComplete=()=>{
    this.setState({
      status:true
    })
  }

  render() {
    const { id, name,value, deleteInfo, handleEdit} = this.props;
    return (
          <div className="card text-white mt-2  " style={{width:"70rem"}}>
            <div className="card-header bg-primary">Task {value}</div>
            <div className="card-body bg-white text-dark">
              <div className="conatiner">
                <div className="d-flex flex-row">
                  <div className="p-2">
                    <h5 className="card-title">{name}</h5>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row">
                <div className="p-2">
                  <span onClick={()=>handleEdit(id)}>
                  <i className="fas fa-edit" style={{color:'green'}}></i>
                  </span>
                </div>
                <div className="p-2">
                  <span  onClick={()=>deleteInfo(id)}> <i className="fas fa-trash " style={{color:'red'}}></i> </span>
                </div>
                <div className="p-2">
                  {this.state.status ? (<i className="fas fa-check-double " style={{color:'green'}}>completed</i>):
                  (<button className="btn btn-primary btn-md "onClick={this.handleComplete}>Done</button>)}
                      
                  
                      
                  
                  
                </div>
              </div>
            </div>
          </div>
      
    );
  }
}

export default Todo;
