import React from 'react';
import './TodoItem.css';
import classNames from 'classnames';

class TodoItem extends React.Component{

    constructor(props){
        super(props);
        this.onItemClick = this.onItemClick.bind(this);
    }

    onItemClick(){
        console.log(this.props.item);
    }

    render(){
        const { item } = this.props;

        return(
            <div onClick={this.onItemClick} className= { classNames('TotoItem', {
                'TodoItem-complete': item.isComplete
            })}>
                <p>{ item.title }</p>
            </div>
        );
    }
}

export default TodoItem;