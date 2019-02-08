import App, { Container } from 'next/app'
import Layout from '../components/Layout';

export default class MyApp extends App {
  render() {
    const {Component} = this.props

    return (
      <Container>
        <Layout>
          <Component />
        </Layout>
      </Container>
    )
  }
}