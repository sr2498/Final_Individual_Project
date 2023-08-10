import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from '../components/navbar'
import '../styles/global.css'
import { googleAnalytics } from '../google-analytics';

console.log('Inside _app.js');
console.log(googleAnalytics);

function App ({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Only execute this code if we're in the browser environment
    if (typeof window !== 'undefined') {
        // Check if googleAnalytics and its init method exist before calling
        if (googleAnalytics && typeof googleAnalytics.init === 'function') {
          googleAnalytics.init();  // Initialize Google Analytics
        } else {
          console.error("googleAnalytics or its init method is not available");
        }

        // Your existing code for route change
        if (process.env.NEXT_PUBLIC_DB_GA) {
            const handleRouteChange = (url) => {
                window.gtag('config', process.env.NEXT_PUBLIC_DB_GA, {
                    page_path: url
                });
            };

            router.events.on('routeChangeComplete', handleRouteChange);
            return () => {
                router.events.off('routeChangeComplete', handleRouteChange);
            };
        }
    }
}, [router.events]);

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default App;
