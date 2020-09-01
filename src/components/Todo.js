import React, { Component } from "react";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      status: false,
    };
  }

  handleComplete = () => {
    this.setState({
      status: true,
    });
  };

  render() {
    const { id, name, value, deleteInfo, handleEdit } = this.props;
    return (
     
        <div className=" tc bg-light-green dib br3 pa4 ma2 bw2 shadow-5 ">
          <div>
            <h1>Task {value}</h1>
            <p>{name}</p>
            <span onClick={() => handleEdit(id)}>
              <i className="fas fa-edit" style={{ color: "green" }}></i>
            </span>
            <span onClick={() => deleteInfo(id)}>
              {" "}
              <i
                className="fas fa-trash ml-3 mr-3"
                style={{ color: "red" }}
              ></i>{" "}
            </span>
            {this.state.status ? (
              <i className="fas fa-check-double " style={{ color: "green" }}>
                completed
              </i>
            ) : (
              <button
                className="btn btn-primary btn-md "
                onClick={this.handleComplete}
              >
                Done
              </button>
            )}
          </div>
        </div>
     
    );
  }
}

export default Todo;
