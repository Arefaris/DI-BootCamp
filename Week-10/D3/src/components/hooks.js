import { useSelector, useDispatch } from "react-redux";
import { selectPosts, selectStatus } from "./selectors";
import {getPosts, addReaction} from "../components/postsSlice"
import { useCallback } from "react";

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