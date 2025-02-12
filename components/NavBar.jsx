import Link from "next/link"
import "./NavBar.css"
const NavBar = () => {
  return (
    <div>
        <nav className="navbar py-5">
        <Link href="/">
        <h1 className="text-3xl font-bold">
          NextJs Curso
        </h1>
        </Link>
 

    <ul>
      <li>
        <Link href="/">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about">
          About
        </Link>
      </li>
      <li>
        <Link href="/tienda">
          Tienda
        </Link>
      </li>
      <li>
        <Link href="/post">
          Post
        </Link>
      </li>
    </ul>
  </nav>
  </div>
  )
}

export default NavBar