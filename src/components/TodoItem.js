import React from 'react';

// function TodoItem(props){
//     let myStyle = {fontStyle: 'Italic'}; 

//     return(
//         <div className="TodoItem" style={myStyle}>
//             <p>{props.title}</p>
//         </div>
//     );
//}

class TodoItem extends React.Component{
    render(){
        let myStyle = {fontStyle: 'Italic'};

        return(
            <div className="TodoItem" style={myStyle}>
                <p>{this.props.title}</p>
            </div>
        );
    }
}

export default TodoItem;