import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Logo from "../../public/images/logo.png";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter()
  const {pathname} = router
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
            <Link 
              href="/"
              className="bg-yellow-500 py-3 px-5 rounded-xl cursor-pointer text-black hover:bg-yellow-300 border-2 border-black hover:text-black"
            >
              Home
            </Link>
          </li>
          {pathname ==='/' &&
          <li>
            {/* Use ScrollLink for smooth scrolling to the "Features" section */}
            <ScrollLink
              to="features"
              smooth={true}
              duration={500}
              className="bg-yellow-500 py-3 px-5 rounded-xl cursor-pointer text-black hover:bg-yellow-300 border-2 border-black hover:text-black"
           
            >
           Features
              
            </ScrollLink>
          </li>}
          <li>
            <Link 
              href="/templates"
              className="bg-yellow-500 py-3 px-5 rounded-xl cursor-pointer text-black hover:bg-yellow-300 border-2 border-black hover:text-black"
            >
              Templates
            </Link>
          </li>
          <li>
            <Link 
              href="/blogs"
              className="bg-yellow-500 py-3 px-5 rounded-xl cursor-pointer text-black hover:bg-yellow-300 border-2 border-black hover:text-black"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link 
              href="/dashboard"
              className="bg-purple-600 border-2 border-white py-3 px-5 rounded-xl text-white-600 hover:bg-purple-300 hover:text-black"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
