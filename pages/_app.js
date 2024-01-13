// pages/_app.js

import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import '../styles/global.css';
import 'tailwindcss/tailwind.css';
// import Layout from '../components/Layout'; // Import your Layout component

function MyApp({ Component, pageProps }) {
  return (<>
      <Header />
      <Component {...pageProps} />
      <Footer />
      </>
  );
}

export default MyApp;
