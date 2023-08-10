import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../components/navbar'
import '../styles/global.css'

console.log("Inside _app.js");   
function App ({ Component, pageProps }) {
  const router = useRouter()
  console.log(process.env.GA_MEASUREMENT_ID);
  useEffect(() => {
    // Only execute if the GA_MEASUREMENT_ID is defined
    if (process.env.GA_MEASUREMENT_ID) {
      // This function initializes GA and sends a pageview when the app first loads
      console.log("GA Measurement ID found:", process.env.GA_MEASUREMENT_ID);  // <-- Console log
      const handleRouteChange = (url) => {
        window.gtag('config', process.env.GA_MEASUREMENT_ID, {
          page_path: url
        })
      }

      // When the component is mounted, we register the event to track route changes
      router.events.on('routeChangeComplete', handleRouteChange)

      // If the component is unmounted, we unregister the event
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }
  }, [router.events])

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default App
