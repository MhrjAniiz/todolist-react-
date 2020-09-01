import React, { Component } from 'react';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import uuid from 'react-uuid'
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'tachyons';

export default class App extends Component{
  constructor(){
    super()
    this.state = {
        input:'',
        data:[],
        id:uuid(),
        edit:false,
      }
}

handleSubmit=(event)=>{
  event.preventDefault();
  if(this.state.input.length>0){
    const realData = {
      id: this.state.id,
      name: this.state.input
      };
  
    const newData = [...this.state.data,realData];
  
      this.setState({
        data:newData,
        input: '',
        id: uuid(),
        edit:false
  
      })
  
  }else{
    alert('please enter valid info')
  }
 
}

handleChange = (event)=>{
    this.setState({
        input:event.target.value
    })
}
deleteInfo=(id)=>{
  const {data} = this.state;
  const filterData = data.filter(res=>{
    return res.id !== id
  })

  this.setState({
    data:filterData
  })
}

handleEdit=(id)=>{
  const {data} = this.state;
  const filterData = data.filter(res=>{
    return res.id !== id
  })

  const selectedItem = data.find(res=>{
    return res.id === id
  })

  this.setState({
    data:filterData,
    input: selectedItem.name,
    id:id,
    edit:true

  })
}


  render(){
    const {data} = this.state
    return(
      <div>
        <h1 className="bg-dark text-white p-2 text-center" >TODO LIST</h1>

        <div >
          <TodoInput 
            passedInput={this.state.input} 
            inputvalue={this.handleChange} 
            handleSubmit={this.handleSubmit}
            edit={this.state.edit}
          />

          <h1 className="text-center">There are {data.length} tasks for today.</h1>

          <div className="container">
            <TodoList data={this.state.data}
            remove={this.deleteInfo} 
            handleEdit={this.handleEdit}
            />
          </div>
          
        </div>
      </div>
    );
  }
}