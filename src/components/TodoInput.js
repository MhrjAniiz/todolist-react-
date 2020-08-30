import React, { Component } from 'react';



 class TodoInput extends Component{


    render(){
        const {inputvalue, handleSubmit}=this.props
        return(
           <div className='container m-5'>
               <form onSubmit={handleSubmit}>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1"><i class="fas fa-th-list"></i></span>
                    </div>
                    <input type="text" class="form-control" name="input"  onChange={inputvalue}/>
                </div>
                <div className="text-center">
                    <button type="submit" class="btn btn-primary btn-lg " >submit</button>
               </div>
               </form>
               
           </div>
        );
    }
}

export default TodoInput;