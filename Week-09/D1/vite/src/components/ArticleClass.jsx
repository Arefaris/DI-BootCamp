import React, { Component } from 'react'

export default class ArticleClass extends Component {
  constructor(){
        super();
    
        this.state = {
            posts: null,
            userId: null
        }
    }

fetchArticles = async()=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    const data = await response.json()
    
    this.setState({posts: data})
  }


  render() {
    return (
        <>
        
           <h2>New Articles</h2>
          <button onClick={this.fetchArticles}>Get Articles</button>
          <input onChange={(e) => setUserId(e.target.value)} type="number" max="10" min="0" placeholder="userId"></input>
          {
              this.posts && this.posts.map(post => <Article title={post.title} body={post.body}/>) 
          }
        
        
        </>
      
    )
  }
}
