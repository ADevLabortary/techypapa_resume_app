// pages/_app.js

import '../styles/global.css';
import 'tailwindcss/tailwind.css';
// import Layout from '../components/Layout'; // Import your Layout component

function MyApp({ Component, pageProps }) {
  return (
 
      <Component {...pageProps} />
   
  );
}

export default MyApp;
