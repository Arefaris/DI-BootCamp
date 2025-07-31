import React, { useEffect } from 'react'
import type { RootState } from '../redux/store/store'
import { useDispatch, useSelector } from 'react-redux'
import type{ AppDispatch } from '../redux/store/store';
import { getData } from '../features/dataSlice'

export default function DataFetcher() {
  const meals = useSelector((state: RootState) => state.recepieSliceReducer.meals)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(()=> {
    dispatch(getData())
  }, [])
  return ( <>
            {meals.map((meal) => {
                return <div key={meal.idMeal}>
                    <div>Title: {meal.strMeal}</div>
                    <div>Category: {meal.strCategory}</div>
                    <div>Instructions: {meal.strInstructions}</div>
                </div>
            })}
        </>
    
  )
}
