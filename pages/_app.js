import '../styles/globals.css'
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-wrap bg-gray-100 w-full h-screen">
      <Nav />
      <div className="w-10/12 p-4">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
