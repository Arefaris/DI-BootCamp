import { createSelector } from "@reduxjs/toolkit";
import { state } from "./postsSlice";
import { stateUsers } from "./sliceUsers";



export const filterPost = createSelector([selectPosts, selectWriter], (post, writer) => {
    if (writer == -1){
        return post
    }else {
        return post.filter(item => item.userId == writer)
    }
})
export const selectPosts = createSelector([state], (state)=> {
    return state.posts
})


export const selectStatus = createSelector([state], (state)=> {
    return state.loading
})

export const selectUsers = createSelector([stateUsers], (state) => {
    return state.users
})


export const selectWriter = createSelector([stateUsers], (state) => {
    return state.writer
})