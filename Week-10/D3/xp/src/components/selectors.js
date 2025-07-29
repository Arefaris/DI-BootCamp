import { createSelector } from "@reduxjs/toolkit";
import {state} from "./bookSlice"

export const selectBooks = createSelector(state, (state)=>{
    return state.books
})

export const selectHorrorBooks = createSelector(state, (state)=>{
    return state.books.filter(book => book.genre === "Horror")
})

export const selectFantasyBooks = createSelector(state, (state)=>{
    return state.books.filter(book => book.genre === "Fantasy")
})

export const selectScienceFictionBooks = createSelector(state, (state)=>{
    return state.books.filter(book => book.genre === "Science Fiction")
})