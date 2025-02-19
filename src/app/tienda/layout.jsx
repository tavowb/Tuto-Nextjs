import Link from "next/link"

export const metadata = {
    title: "Tienda oficial"
}

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