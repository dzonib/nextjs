import React from 'react'
import App, { Container } from 'next/app'
import NProgress from "next-nprogress/component"
import Head from 'next/head'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
      <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>

      </Head>
        <NProgress 
            color="#29d"
            options={{ trickleSpeed: 50 }}
            showAfterMs={300}
            spinner
        />
        <Component {...pageProps} />
      </Container>
    )
  }
}