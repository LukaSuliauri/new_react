import React from 'react';
import Todo from "./Todo";


const CountTodo = (props) => {
    const{todos} = props

    return(
        <p className="todo-accumulator bg-info py-2 text-white">{todos.length}</p>
    )

}











export default CountTodo;