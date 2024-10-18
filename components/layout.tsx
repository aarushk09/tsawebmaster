import Link from 'next/link'
import { Leaf } from 'lucide-react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-green-800 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8" />
            <span className="text-2xl font-bold">Green Plate</span>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/menu" className="hover:underline">Menu</Link></li>
              <li><Link href="/approach" className="hover:underline">Our Approach</Link></li>
              <li><Link href="/sustainability" className="hover:underline">Sustainability</Link></li>
              <li><Link href="/gallery" className="hover:underline">Gallery</Link></li>
              <li><Link href="/reservations" className="hover:underline">Reservations</Link></li>
              <li><Link href="/order" className="hover:underline">Order Online</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Green Plate</h3>
              <p>123 Vegan Street, Eco City, EC 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@greenplate.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Hours</h3>
              <p>Monday - Friday: 11am - 10pm</p>
              <p>Saturday - Sunday: 10am - 11pm</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-green-300">Facebook</a>
                <a href="#" className="hover:text-green-300">Instagram</a>
                <a href="#" className="hover:text-green-300">Twitter</a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Green Plate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}