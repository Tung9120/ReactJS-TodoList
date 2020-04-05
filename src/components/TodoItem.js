import React from 'react';

function TodoItem(){
    let myStyle = {fontStyle: 'Italic', backgroundColor: 'red'}; 

    return(
        <div className="TodoItem" style={myStyle}>
            Learn code at home
        </div>
    );
}

export default TodoItem;