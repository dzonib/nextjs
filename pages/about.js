import Link from 'next/link'
import { Component } from 'react'
import Error from './_error'
import fetch from 'isomorphic-unfetch'


export default class About extends Component {

  static async getInitialProps() {
    const res = await fetch('https://api.github.com/users/dzonib')
    const statusCode = res.status > 200 ? res.status : false
    const data = await res.json()
    return {user: data, statusCode}
  }


  render() {
    const { user: {name, avatar_url}, statusCode} = this.props

    if (statusCode) {
      return <Error statusCode={statusCode}/>
    }

    return (
      <div>
      <h1>About</h1>
      <p>{name}</p>
      <p>Javascript developer</p>
      <img src={avatar_url} alt="god." style={{height: '300px'}}/>
    </div>
    )
  }
}
