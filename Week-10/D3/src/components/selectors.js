import { createSelector } from "@reduxjs/toolkit";
import { state } from "./postsSlice";

export const selectPosts = createSelector([state], (state)=> {
    return a.posts
})


export const selectStatus = createSelector([state], (state)=> {
    return a.loading
})