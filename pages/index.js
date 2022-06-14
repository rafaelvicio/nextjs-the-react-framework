import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Blog</title>
      </Head>

      <main>
        <ul>
          <li>
            <Link href="/">
              <a>SSG (Static-site generation)</a>
            </Link>
          </li>
          <li>
            <Link href="/blog/csr">
              <a>CSR (Client-side rendering)</a>
            </Link>
          </li>
          <li>
            <Link href="/blog/ssr">
              <a>SSR (Server-side rendering)</a>
            </Link>
          </li>
          <li>
            <Link href="/blog/isr">
              <a>ISR: Incremental Static Regeneration</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  )
}
