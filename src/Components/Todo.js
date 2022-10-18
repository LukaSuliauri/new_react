import React from 'react';

const Todo = (props) => {
    const{todo, deleteTodo, darkMode} = props
    const{id, text, isChecked } = todo
    const classes = ['col-sm-9', 'todo-col', 'my-3']
    if (isChecked) classes.push('text-white', 'bg-black')
    return (
        <div className="col-sm-12 todo">
            <div className="row todo-row d-flex flex-wrap">
                <div className="check-box col-sm-1 d-flex justify-content-center">
                    <input type="checkbox" data-id={id} onChange={() => {darkMode(id)}}></input>
                </div>
                <div className={classes.join(' ')} id={id}>{text}</div>
                <div className="col-sm-1 my-3">
                    <button className="btn btn-danger w-100" data-id={id} onClick={() => {deleteTodo(id)}}>
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
                <div className="col-sm-1 my-3">
                    <button className="btn btn-secondary w-100" >
                        <i className="fa-solid fa-arrow-rotate-left"></i>
                    </button>
                </div>
            </div>
        </div>
        )

}







export default Todo;