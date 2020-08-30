import React, { Component } from 'react';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import uuid from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css"

export default class App extends Component{
  constructor(){
    super()
    this.state = {
        input:'',
        data:[]
    }
}

handleSubmit=(event)=>{
  event.preventDefault();
  const inputvalue = this.state.input;

  if(inputvalue.length>0){
    this.setState({
      data:[...this.state.data,inputvalue],
      input: ''
    })
  }
  else{
    alert("you haven't entered anything")
  }
}

handleChange = (event)=>{
    this.setState({
        input:event.target.value
    })
}
  render(){
    return(
      <div>
      <TodoInput inputvalue={this.handleChange} handleSubmit={this.handleSubmit}/>
      <TodoList data={this.state.data}/>
      
      </div>
    );
  }
}