import PostCard from '@/components/PostCard' // Usando alias

// Este es un RFC - React Server Component

async function loadPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    //await new Promise(resolve => setTimeout(resolve, 3000))

    return data
}


async function PostPage() {

    //Pasos para hacer un fetch en React
    //1. Importar useEffect
    //2. Crear una función asincrona
    //3. Llamar a la función asincrona en useEffect
    //4. Hacer el fetch
    //5. Convertir la respuesta a JSON
    //6. Guardar la respuesta en un estado
    //7. Mostrar la respuesta en el componente
    //8. Manejar errores    

  const posts = await loadPosts()
  console.log(posts)
  return (
    <div>
        {posts.map(post => (
            <PostCard key={post.id} post={post}/>
        ))}

    </div>
  )
}

export default PostPage