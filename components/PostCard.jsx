"use client"
import Link from 'next/link'
// Este es un RCC - React Client Component
function PostCard({post}) {
  return (
    
        <div>
            <Link href={`/post/${post.id}`}>
                
                <h2> {post.id} {post.title}</h2>
                
            </Link>
            <p>{post.body}</p>

            <button onClick={ ()=> {
                alert('click funciona')
            }} >Click</button>
        </div>
    )
  
}

export default PostCard