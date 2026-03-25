import { siteConfig } from '@/config/siteConfig'

export default function Footer() {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </p>
    </footer>
  )
}
