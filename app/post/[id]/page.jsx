import Post from "../page"
import { Suspense } from 'react'

 async function loadPost (id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()
    return post
}

async function Page({params}) {
    const post = await loadPost(params.id)
  return (
    <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <hr />
        <h2>Otras publicaciones</h2>
        <Suspense fallback={<h1>Cargando publicaciones...</h1>}>
            <Post />
        </Suspense>
        
    </div>
  )
}

export default Page