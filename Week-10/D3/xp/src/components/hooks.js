import { useSelector, useDispatch } from "react-redux";
import { selectBooks, selectHorrorBooks, selectFantasyBooks, selectScienceFictionBooks } from "./selectors";

export const useBookSelector = ()=>{
    return useSelector(selectBooks)
}

export const useBookHorrorSelector = ()=>{
    return useSelector(selectHorrorBooks)
}

export const useBookFantasySelector = ()=>{
    return useSelector(selectFantasyBooks)
}

export const useScienceFictionBooks = ()=>{
    return useSelector(selectScienceFictionBooks)
}