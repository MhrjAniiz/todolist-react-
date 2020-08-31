import React, { Component } from 'react';



 class TodoInput extends Component{


    render(){
        const {inputvalue, passedInput,handleSubmit}=this.props
        return(
            <div className="container">
                <div className='container mt-5 mb-5'>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><i className="fas fa-th-list"></i></span>
                            </div>

                            <input type="text" className="form-control" name="input"  
                            placeholder="what you want to complete today?" 
                            value={passedInput} 
                            onChange={inputvalue}
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary btn-lg " >submit</button>
                    </div>
                    </form>
                    
                </div>
           </div>
        );
    }
}

export default TodoInput;