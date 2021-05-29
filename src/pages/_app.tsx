import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    const Layout = Component.layout || (children => <>{children}</>)

    return (
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    )
}

export default MyApp
