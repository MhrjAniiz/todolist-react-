import React, { Component } from 'react';


class TodoList extends Component{
    render(){
       const {data} = this.props; 
        return(
            <h1>{data}</h1>
        );
    }
}

export default TodoList;