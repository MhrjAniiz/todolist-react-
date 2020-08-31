
import React from 'react';


const Scroll = (props)=>{
    return(
        <div style={{overflowY: 'scroll', width: '1200px',  height:'800px'}}>
            {props.children}
        </div>
    );

}

export default Scroll;