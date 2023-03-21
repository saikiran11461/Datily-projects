import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodos, getTodos } from '../Redux/action'
import Todo from './Todo'
import './TodoInput.css'
const TodoInput = () => {
    const [text,setText] = useState('')
    const disptach = useDispatch()
    const handleSubmit=()=>{
        const payload ={
            title:text,
            status:false
        }
        disptach(addTodos(payload))
        .then(res=>{
            disptach(getTodos())
            .then(res=>{
                console.log(res)
                setText('')
            })
        })
    }


  return (
    <div className='container'>
        <input type="text"  value={text} onChange={(e)=>setText(e.target.value)} />
        <button disabled={text === ""} onClick={handleSubmit}>add</button>
        <Todo/>
    </div>
  )
}

export default TodoInput