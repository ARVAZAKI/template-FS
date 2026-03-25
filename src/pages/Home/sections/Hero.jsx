import { siteConfig } from '@/config/siteConfig'

export default function Hero() {
  return (
    <section id="hero">
      <h1>{siteConfig.name}</h1>
      <p>{siteConfig.tagline}</p>
    </section>
  )
}
