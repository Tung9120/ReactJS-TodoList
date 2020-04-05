import React from 'react';

function TodoItem(){
    let myStyle = {fontStyle: 'Italic', backgroundColor: 'red'}; 

    return(
        <div className="TodoItem" style={myStyle}>
            <p>Learn code at home</p>
            <p>Leave to work to avoid covid-19</p>
        </div>
    );
}

export default TodoItem;