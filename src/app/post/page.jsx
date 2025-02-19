import PostCard from '@/src/components/PostCard' // Usando alias
import "./post.css"
// Este es un RFC - React Server Component

async function loadPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    //await new Promise(resolve => setTimeout(resolve, 3000))

    return data
}


async function PostPage() {

  const posts = await loadPosts()
  return (
    <div>
        <h1 className='text-center pt-6  pb-0 font-bold'>Mis Post</h1>
        <div className='grid'>
        {posts.map(post => (
            <PostCard key={post.id} post={post}/>
        ))}
        </div>
    </div>
  )
}

export default PostPage