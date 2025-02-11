"use client"
// Este es un RCC - React Client Component
function PostCard({post}) {
  return (
    
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={ ()=> {
                alert('click funciona')
            }} >Click</button>
        </div>
    )
  
}

export default PostCard