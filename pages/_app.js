// import '../pages/styles/global.css'
import Navbar from "../components/navbar";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
