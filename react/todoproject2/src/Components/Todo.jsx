import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTodos, getTodos } from '../Redux/action'
import "./TodoInput.css"
const Todo = () => {
    const dispatch = useDispatch()
    const store = useSelector((state)=>{
        return state.todos
    })
    const loading = useSelector((state)=>{
        return state.isLoading
    })
    
    // const deleted = useSelector((state)=>{
    //     return state.deleted
    // })

    // console.log(deleted,"delete")
  // console.log(store,"todos here")
    
        useEffect(()=>{
            dispatch(getTodos())
        },[])

        const deleteHandler=(id)=>{
            dispatch(deleteTodos(id))
            .then(res=>{
                dispatch(getTodos())
            })
        }
  return (
    <div>
        {
            loading && <h1>Loading....</h1>
        }
        {
           store.length >0 && store.map(item=>(<div className='divs' key={item.id}>{item.title}
            <button onClick={()=>deleteHandler(item.id)} className='btn1'>Delete</button> 
            <button className='btn2'>Edit</button></div>))
        }
    </div>
  )
}

export default Todo