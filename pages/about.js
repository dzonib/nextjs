import Link from 'next/link'
import Layout from '../components/Layout'

export default () => (
  <div>
    <h1>About</h1>
    <Link href="/">
      <a>Go to home</a>
    </Link>
    <p>Javascript developer</p>
    <img src="/static/jslogo.png" alt="JavaScript" style={{height: '300px'}}/>
  </div>
)


