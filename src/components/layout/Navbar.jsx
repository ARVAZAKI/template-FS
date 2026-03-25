import { NavLink } from 'react-router-dom'
import { siteConfig } from '@/config/siteConfig'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  return (
    <nav>
      <span>{siteConfig.name}</span>
      <ul>
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
