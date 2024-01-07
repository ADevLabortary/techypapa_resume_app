// components/Header.js

import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        {/* Replace "Your Logo" with the path or URL to your actual logo image */}
        <img src="your-logo.png" alt="Your Logo" className="w-8 h-8 mr-2" />
        <h1 className="text-lg font-semibold">Your Resume Builder</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
             Home
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-gray-300">
              Features
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-gray-300">
              Templates
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-gray-300">
             Pricing
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-gray-300">
             Login/Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
