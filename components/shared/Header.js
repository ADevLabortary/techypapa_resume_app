import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../public/images/logo.png";
import { useRouter } from "next/router";
import { FaRegUserCircle, FaUserAlt, FaBars } from "react-icons/fa";
import { useState } from "react";
import SignupForm from '../auth/SignupForm'
const MobileMenu = ({ isOpen, onClose }) => {
  const router = useRouter();
  const { pathname } = router;
  const token = true;
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center z-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-white w-3/4 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg p-4">
        <ul className="space-y-4">
          <li>
            <Link
              href="/"
              onClick={onClose}
              className="block text-lg text-gray-800 hover:text-black"
            >
              Home
            </Link>
          </li>
          <li>
            <ScrollLink
              to="features"
              smooth={true}
              duration={500}
              onClick={onClose}
              className="block text-lg text-gray-800 hover:text-black"
            >
              Features
            </ScrollLink>
          </li>
          <li>
            <Link
              href="/templates"
              onClick={onClose}
              className="block text-lg text-gray-800 hover:text-black"
            >
              Templates
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              onClick={onClose}
              className="block text-lg text-gray-800 hover:text-black"
            >
              Blogs
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                !token
                  ? toggleSignup()
                  : router.push("/dashboard");
                onClose();
              }}
              className="block text-lg text-gray-800 hover:text-black"
            >
              {!token ? "Join Now" : "Dashboard"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Header = () => {
  const router = useRouter();
  const { pathname } = router;
  const token = true; // Assuming token is always true for this example

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const toggleSignup = () => {
    setIsSignupOpen(!isSignupOpen);
  };
  return (
    <header className="bg-red-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={Logo.src} alt="Your Logo" className="w-16 h-16 mr-2" />
        <h1 className="text-lg font-semibold">Techy Resume Builder</h1>
      </div>
      <ul className="lg:flex hidden space-x-4 mr-6 items-center">
        <li>
          <Link
            href="/"
            className="py-2 px-5 cursor-pointer text-white hover:bg-yellow-300 border-2 border-white hover:text-black"
          >
            Home
          </Link>
        </li>
        {pathname === "/" && (
          <li>
            <ScrollLink
              to="features"
              smooth={true}
              duration={500}
              className="py-2 px-5 cursor-pointer text-white hover:bg-yellow-300 border-2 border-white hover:text-black"
            >
              Features
            </ScrollLink>
          </li>
        )}
        <li>
          <Link
            href="/templates"
            className="py-2 px-5 cursor-pointer text-white hover:bg-yellow-300 border-2 border-white hover:text-black"
          >
            Templates
          </Link>
        </li>
        <li>
          <Link
            href="/blogs"
            className="py-2 px-5 cursor-pointer text-white hover:bg-yellow-300 border-2 border-white hover:text-black"
          >
            Blogs
          </Link>
        </li>
        <li>
          {token ? (
            <Link
              href="/"
              onClick={() => {
                toggleSignup()
              }}
              className="py-2 px-5 rounded-xl cursor-pointer text-white hover:bg-green-300 border-2 border-white hover:text-black flex items-center"
            >
              <FaUserAlt className="mr-2" />
              <span>Join Now</span>
            </Link>
          ) : (
            <Link
              href="/dashboard"
              className="cursor-pointer text-white text-2xl "
            >
              <FaRegUserCircle />
            </Link>
          )}
        </li>
      </ul>
      {/* Hamburger menu for mobile and tablet */}
      <div className="lg:hidden">
        <FaBars className="text-2xl cursor-pointer" onClick={toggleMenu} />
      </div>
      {/* Drawer-like menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
      {/* Signup form */}
      <SignupForm
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
      />
    </header>
  );
};

export default Header;
