import Posts from "../page"
import { Suspense } from 'react'

 async function loadPost (id) {
  console.log('id', id)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}

async function Page( { params } ) {

  const post = await loadPost(params.postId); // Esperar a que `params` esté disponible


  return (
    <div>
        <div className="pt-5 pb-5 text-center">
          <h1 className="font-bold">{post.id} {post.title}</h1>
          <p >{post.body}</p>
        </div>

        <hr className="pt-5 " />

        <Suspense fallback={<h1>Cargando publicaciones...</h1>}>
            <Posts />
        </Suspense>
        
    </div>
  )
}

export default Page