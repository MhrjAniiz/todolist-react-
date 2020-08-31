import React, { Component } from 'react';
import Todo from './Todo';


class TodoList extends Component{
    render(){
       const {data} = this.props
       const information = data.map((info,i)=>{
         return <Todo key={i} id={i +1} name={data[i]} />
       })
       
        return(
          <div>
            
            {information}
          </div>
            
        );
    }
}

export default TodoList;