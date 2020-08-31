import React, { Component } from "react";

class Todo extends Component {
  render() {
    const { id, name } = this.props;
    return (
      <div className="container">
        <div className="card text-white  mb-3 w-4 m-3">
          <div className="card-header bg-success">Task {id}</div>
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
                <i class="fas fa-edit"></i>
              </div>
              <div className="p-2">
                <span> <i className="fas fa-trash "></i> </span>
              </div>
              <div className="p-2">
                <button className="btn btn-primary btn-md ">Done</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
