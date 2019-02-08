import Link from 'next/link'
import Layout from '../components/Layout'
import styled, {createGlobalStyle} from 'styled-components'

const Index = () => (
  <div>
  <StyledHeading>Home</StyledHeading>

    <Link href="/about">
      <a>Go to about</a>
    </Link>
    <p>Welcome to hell</p>
  </div>
)

const StyledHeading = styled.h1`
  color: blue;
`

export default Index