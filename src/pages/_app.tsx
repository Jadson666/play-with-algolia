import '../styles/globals.css'
import '../styles/nav.css'
import '../styles/record.css'

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>)

  return (
    <Layout>
      <Component {...pageProps}></Component>
    </Layout>
  )
}

export default MyApp
