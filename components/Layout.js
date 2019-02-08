import Link from 'next/link'


export default({children, title}) => (
  <div className="main">
    <header>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/hireme"><a>Hire me</a></Link>
    </header>

    {children}

    <footer>&copy; {new Date().getFullYear()}</footer>
  </div>
)