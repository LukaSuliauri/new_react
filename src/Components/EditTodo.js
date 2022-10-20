import React, {useState} from 'react';
import Todo from "./Todo";

const EditTodo = (props) => {
    const {todo, updateTodo} = props
    const {id, text, isChecked } = todo
    const [modifyTodo, setModifyTodo] = useState (todo.text)

    return(
        <>
            <div className="col-sm-10">
                <input type="text" className="form-edit" defaultValue={modifyTodo} onChange={(e) => setModifyTodo(e.target.value)} />
            </div>
            <div className="col-sm-2">
                <button type="button" className="btn btn-warning" onClick={() => updateTodo({id: todo.id, text: modifyTodo, isChecked: false})}>
                    <i className="fa-solid fa-floppy-disk"></i>
                </button>
            </div>
        </>
    )
}


export default EditTodo;