import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaGithub, FaSquareXTwitter } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black shadow-md flex items-center justify-between py-6 px-4 md:px-8">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <h1 className="tracking-widest">Chris-PORTFOLIO</h1>
        </a>
      </div>

      <div className="flex items-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/chris-obot-41a36026b/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Christor90"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="http://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/obitex36"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
