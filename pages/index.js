import Link from 'next/link'

const Index = () => (
  <div>
    <h1>Home</h1>
    <Link href="/about">
      <a>Go to about</a>
    </Link>
    <p>Welcome to hell</p>
  </div>
)

export default Index