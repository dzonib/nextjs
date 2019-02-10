import Document, {Head, Main, NextScript} from 'next/document'
import {createGlobalStyle} from 'styled-components'
import Router from 'next/router'
import NProgress from 'nprogress'
import Layout from '../components/Layout'
import { ServerStyleSheet } from 'styled-components';


Router.onRouteChangeStart = () => {
    
    NProgress.start()
  }
  
  Router.onRouteChangeComplete = () => NProgress.done()
    
  Router.onRouteChangeError = () => NProgress.done()
  

const GlobalStyles = createGlobalStyle`

  html {
    font-size: 1.5rem;

  }

  body {
    font-family: 'Shadows Into Light', cursive;
    margin: 0;
    box-sizing: border-box;
    background: #f4f4f4;
    color: #232b2b;
    font-size: 100%;
    a {
      text-decoration: none;
    }
  }
`

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        // Step 1: Create an instance of ServerStyleSheet
        const sheet = new ServerStyleSheet();
        // Step 2: Retrieve styles from components in the page
        const page = renderPage((App) => (props) =>
          sheet.collectStyles(<App {...props} />),
        );
        // Step 3: Extract the styles as <style> tags
        const styleTags = sheet.getStyleElement();
        // Step 4: Pass styleTags as a prop
        return { ...page, styleTags };
      }
    
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta name="description" content="A site for my programing portfolio and nextjs exercise"></meta>
                    <meta charSet="utf-8"/>
                    <meta name="robots" content="noindex, nofollow"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <link href="https://fonts.googleapis.com/css?family=Shadows+Into+Light" rel="stylesheet"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
                    {this.props.styleTags}
                </Head>
                <body>
                    <GlobalStyles />
                    <Layout>
                        <Main />
                    </Layout>
                    <NextScript />
                </body>
            </html>
        )
    }
}