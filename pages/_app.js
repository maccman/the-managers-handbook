import '../styles.css'
import 'nextra-theme-book/style.css'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
