import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-900 text-white py-4 px-6 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          CyberPro
        </Link>
        <div className="hidden md:flex space-x-4">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <NavLink href="#about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink href="#projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink href="#experience" onClick={() => setIsOpen(false)}>Experience</NavLink>
          <NavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>
      )}
    </nav>
  )
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link href={href} className="block py-2 hover:text-gray-300 transition-colors" onClick={onClick}>
      {children}
    </Link>
  )
}

