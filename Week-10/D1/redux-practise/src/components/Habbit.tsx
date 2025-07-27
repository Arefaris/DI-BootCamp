import React from 'react'

interface HabbitProps {
  name: string;
  date: number;
}

export default function Habbit({ name, date }: HabbitProps) {
  return (<>
    <div>{name}</div>
    <div>{date}</div>
  </> 
  )
}
