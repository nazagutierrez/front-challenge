import Link from "next/link"
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  return (
    <header className="bg-main-black shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-main-text">
          My Store
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:opacity-70 transition-opacity">
                Home
              </Link>
            </li>
            <li>
              <Link href="/fake-auth" className="hover:opacity-70 transition-opacity">
                Login
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:opacity-70 transition-opacity">
                <AiOutlineShoppingCart className="inline-block w-6 h-6" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

