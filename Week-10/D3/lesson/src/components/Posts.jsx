import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {getPosts} from "../components/postsSlice"
import ReactionsButton from './ReactionsButton'
import { usePostsSelectors, usePostsStatus, useGetPosts } from './hooks'
function Posts() {

const posts = usePostsSelectors()
const status = usePostsStatus()

const callFetchPosts = useGetPosts()
  useEffect(()=>{
    callFetchPosts()
  }, [])

 
  if (status === "loading") return <h2>Loading ...</h2>
  if (status === "error") return <h2>Error</h2>
  return (<>
       <section>
         {
            posts.map(post => <article key={post.id}>
                <h3>{post.title}</h3>
                <h2>{post.body}</h2>
                <ReactionsButton id={post.id} reactions={post.reactions}/>
            </article>)
         }
        </section>
    
  </>
    
  )
}

export default memo(Posts)