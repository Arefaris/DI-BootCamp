import React from 'react'
import { useEffect, useState } from 'react'
import Article from './Article'
export default function Articles() {

  const [posts, setPosts] = useState()
  const [userId, setUserId] = useState(1)

  useEffect(() => {
    fetchArticles()
    return ()=> alert("dont do that")
  }, [])

  const fetchArticles = async()=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    const data = await response.json()
    
    setPosts(data)
  }
 const handleSubmit = (e)=>{
    e.preventDefault()
    console.log*(e.target.un.value)
 }
  return (
    <>
    <h2>New Articles</h2>
    <button onClick={fetchArticles}>Get Articles</button>
    <input onChange={(e) => setUserId(e.target.value)} type="number" max="10" min="0" placeholder="userId"></input>
    {

        posts && posts.map(post => <Article title={post.title} body={post.body}/>) 
    }

    <form onSubmit={handleSubmit}>
        <input type="text" name='un' onChange={(e)=> setUserId(e.target.value)}/>
        <input type="submit" />
    </form>
    </>
    
  )
}
