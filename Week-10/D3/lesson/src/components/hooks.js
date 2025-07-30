import { useSelector, useDispatch } from "react-redux";
import { selectPosts, selectStatus, selectUsers, selectWriter } from "./selectors";
import {getPosts, addReaction} from "../components/postsSlice"
import { useCallback } from "react";
import { fetchUsers } from "./sliceUsers";

export const useUSersSelector = ()=> {
    return useSelector(selectUsers)
}

export const useFetchUsers = ()=> {
    const dispatch = useDispatch()
    return useCallback(() => {
        dispatch(fetchUsers())
    }, [])
}

export const useSelectWriter = ()=> {
     const dispatch = useDispatch()
    return useCallback((id) => {
        dispatch(selectWriter(id))
    }, [])
}

export const usePostsSelectors = ()=> {
    return useSelector(selectPosts)
}

export const usePostsStatus = ()=>{
    return useSelector(selectStatus)
}

export const useGetPosts = ()=> {
    const dispatch = useDispatch()
    return useCallback(()=> {
        dispatch(getPosts(), [dispatch])
})
}

export const useAddReaction = ()=>{
    const dispatch = useDispatch()
    return useCallback((id, name)=> {
        dispatch(addReaction(id, name), [dispatch])
})
}