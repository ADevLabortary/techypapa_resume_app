// components/Header.js

import Link from 'next/link';
import Logo from '../../public/images/logo.png'

const Header = () => {
  console.log(Logo)
  return (
    <header className="bg-red-800 text-white p-4 flex justify-between items-center">
    <div className="flex items-center">
      {/* Replace "Your Logo" with the path or URL to your actual logo image */}
      <img src={Logo.src} alt="Your Logo" className="w-16 h-16 mr-2" />
      <h1 className="text-lg font-semibold">Techy Resume Builder</h1>
    </div>
    <nav>
      <ul className="flex space-x-4 mr-6">
        <li>
          <Link href="/" className="bg-yellow-500 py-3 px-5 rounded-xl text-black hover:bg-white hover:text-black">Home</Link>
        </li>
        <li>
          <Link href="/" className="bg-yellow-500 py-3 px-5 rounded-xl text-black hover:bg-white hover:text-black">Features</Link>
        </li>
        <li>
          <Link href="/" className="bg-yellow-500 py-3 px-5 rounded-xl text-black hover:bg-white hover:text-black">Templates</Link>
        </li>
        <li>
          <Link href="/" className="bg-yellow-500 py-3 px-5 rounded-xl text-black hover:bg-white hover:text-black">Pricing</Link>
        </li>
        <li>
          <Link href="/" className="bg-yellow-500 py-3 px-5 rounded-xl text-black hover:bg-white hover:text-black">Blogs</Link>
        </li>
        <li>
          <Link href="/" className="bg-purple-600 py-3 px-5 rounded-xl text-white-600 hover:bg-white hover:text-black">Login/Sign Up</Link>
        </li>
      </ul>
    </nav>
  </header>

  );
};

export default Header;
