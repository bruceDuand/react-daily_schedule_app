import React from 'react'
import { Checkbox } from 'antd';

function TodoItem(props) {
    return (
        <div>
            <Checkbox checked={props.isFinished === "true"}>{props.todoItem}</Checkbox>
        </div>
    )
}

export default TodoItem