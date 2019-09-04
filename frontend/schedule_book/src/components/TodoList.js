import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
    const todoItems = props.data.map(item => <TodoItem key={item.id} isFinished={item.isfinished} todoItem={item.todo_item_name}/>)

    return (
        <div>
            <h3 style={{ fontSize: "x-large", textAlign: "center" }}>Todo list</h3>
            <div style={{ fontSize: "large", fontWeight: "bold" }}>
                {todoItems}
            </div>
        </div>
    )
}

export default TodoList