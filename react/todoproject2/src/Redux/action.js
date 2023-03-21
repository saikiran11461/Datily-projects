import axios from "axios"
import { ADD_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, DELETE_TODO_FAILURE, DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./actionTypes"


export const getTodos =()=>(dispatch)=>{
    dispatch({type:GET_TODO_REQUEST})

   return axios.get("http://localhost:8080/todos")
    .then(res=>{
      return  dispatch({type:GET_TODO_SUCCESS, payload:res.data})
    })

    .catch(err=>{
        dispatch({type:GET_TODO_FAILURE})
    })
}


export const addTodos = (payload)=>(dispatch)=>{
    dispatch({type:ADD_TODO_REQUEST})
   return axios.post("http://localhost:8080/todos", payload)
    .then(res=>{
     return   dispatch({type:ADD_TODO_SUCCESS,payload:res.data})
    })
    .catch(err=>{
        dispatch({type:ADD_TODO_FAILURE})
    })
}


export const deleteTodos = (payload)=>(dispatch)=>{
   // console.log("id inside action", payload)
    dispatch({type:DELETE_TODO_REQUEST})
   return axios.delete(`http://localhost:8080/todos/${payload}`, )
    .then(res=>{
      return  dispatch({type:DELETE_TODO_SUCCESS,payload:red.data})
    })
    .catch(err=>{
        dispatch({type:DELETE_TODO_FAILURE})
    })
}