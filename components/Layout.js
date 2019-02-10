import React from 'react'
import Link from 'next/link'
import { StyledNav } from './styled/header/StyledNav'
import { StyledHamburgerMeny } from './styled/header/StyledHamburgerNav'
import StyledLayout from './styled/header/StyledLayout'


export default class Layout extends React.Component {

  render() {
    return (
      <StyledLayout> 
      <StyledNav>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/blog"><a>Blog</a></Link>
        <Link href="/hireme"><a>Hire me</a></Link>
      </StyledNav> 
      
      <div className='styled-body'>
        { this.props.children }
      </div>
  
      <footer>&copy; {new Date().getFullYear()}</footer>
    </StyledLayout>
    )
  }
}
