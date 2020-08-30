import React, { Component } from 'react';



 class TodoInput extends Component{


    render(){
        const {inputvalue, handleSubmit}=this.props
        return(
           <div>
               <form onSubmit={handleSubmit}>
               <input type="text" name="input" onChange={inputvalue}/>
               <button type="submit">submit</button>
               </form>
               
           </div>
        );
    }
}

export default TodoInput;