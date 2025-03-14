"use client";
import { useRouter } from "next/navigation";

export const meta = {
    title: "About",
    description: "Pagina de about"
}

function AboutPage (){
    const router = useRouter();
    return <section>
        <h1> Pagina de about </h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi quidem ratione eos possimus molestias repellat ducimus necessitatibus facere. Dolores soluta dicta laudantium commodi amet alias vitae quisquam saepe possimus.</p>
        <button className="bg-sky-400 px-3 py-2 rounded-md" onClick={
            () => {
                console.log('Ejecutando codigo antes de redireccionar')
                router.push('/')
            }
        } >
             Regresar
        </button>    
    </section>
}

export default AboutPage;