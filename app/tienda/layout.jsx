import Link from "next/link"

function TiendaLayout({children}) {
  return <>
    <nav>
        <h1> Menu de tienda </h1>
        <ul>
            <li>
                <Link href="/tienda/categorias">
                    Categorias
                </Link>
            </li>
            <li>
                Productos
            </li>
        </ul>
    </nav>
    {children}
  </>
}

export default TiendaLayout