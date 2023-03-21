import { ADD_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, DELETE_TODO_FAILURE, DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./actionTypes";

const init={
    deleted:[],
    todos:[],
    isLoading:false,
    isError:false
}

export const reducer = (oldstate=init, action)=>{
    const {type,payload} = action;
    switch(type){
        case GET_TODO_REQUEST:
            return{
                ...oldstate,
                isLoading:true,
                isError:false,
                todos:[]
            }
        case GET_TODO_SUCCESS:
            return{
                ...oldstate,
                isLoading:false,
                isError:false,
                todos:payload
            }
        case GET_TODO_FAILURE:
            return{
                ...oldstate,
                isLoading:false,
                isError:true,
            }
        case ADD_TODO_REQUEST:
            return{
                ...oldstate,
                isLoading:true,
                isError:false,
                todos:[]
            }
        case ADD_TODO_SUCCESS:
            return{
                ...oldstate,
                isLoading:false,
                isError:false,
                todos:[...oldstate.todos,payload]
            }
        case ADD_TODO_FAILURE:
            return{
                ...oldstate,
                isLoading:false,
                isError:true,
                todos:[]
            }
        case DELETE_TODO_REQUEST:
            return{
                ...oldstate,
                isLoading:true,
                isError:false,
                deleted:[]
            }
        case DELETE_TODO_SUCCESS:
            return{
                ...oldstate,
                isLoading:false,
                isError:false,
                delete:payload
            }
        case DELETE_TODO_FAILURE:
            return{
                ...oldstate,
                isLoading:false,
                isError:true,
                deleted:[]
            }
        default:
            return oldstate
    }
    
}