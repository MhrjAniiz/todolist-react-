import React, { Component } from 'react';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import uuid from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Scroll from './components/scroll';

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
    const {data} = this.state
    return(
      <div>
        <h1 className="bg-dark text-white p-2 text-center" >TODO LIST</h1>

        <div className="container ">
          <TodoInput passedInput={this.state.input} inputvalue={this.handleChange} handleSubmit={this.handleSubmit}/>
          <h1 className="text-center">There are {data.length} tasks for today.</h1>
          <Scroll>
            <TodoList data={this.state.data}/>
          </Scroll>
          
        </div>
      </div>
    );
  }
}