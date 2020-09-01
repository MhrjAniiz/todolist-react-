import React, { Component } from 'react';
import Todo from './Todo';


class TodoList extends Component{
    render(){
       const {data, remove, handleEdit} = this.props;
       console.log(data)
       const information = data.map((user,i)=>{
         return (<Todo key={user.id}  
          id={user.id}
           value={i+1}   
           name={user.name} 
           deleteInfo={remove} 
           handleEdit={handleEdit}
           />)
       })
       
        return(
          <div>
            
            {information}
          </div>
            
        );
    }
}

export default TodoList;