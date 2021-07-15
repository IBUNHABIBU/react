import React from 'react'

const TodoItem = (props) => {
    return (
        <div>
            <li>
                {props.item.task}
            </li>
        </div>
    )
}

export default TodoItem
