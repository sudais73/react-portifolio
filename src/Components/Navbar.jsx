import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menu when clicking on a link
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">YourLogo</div>
        
        {/* Mobile Menu Button (visible only on small screens) */}
        <button 
          className="md:hidden text-xl p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <FaTimes className="text-red-400 hover:text-red-300" />
          ) : (
            <FaBars className="hover:text-blue-300" />
          )}
        </button>

        {/* Desktop Navigation (hidden on small screens) */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-blue-300">Home</a>
          <a href="#about" className="hover:text-blue-300">About</a>
          <a href="#projects" className="hover:text-blue-300">Projects</a>
          <a href="#contact" className="hover:text-blue-300">Contact</a>
        </nav>
      </div>
      
      {/* Mobile Menu (only for small screens) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900 shadow-lg z-40">
          <div className="flex flex-col p-4 space-y-4">
            <a href="#home" className="py-2 hover:text-blue-300" onClick={closeMobileMenu}>Home</a>
            <a href="#about" className="py-2 hover:text-blue-300" onClick={closeMobileMenu}>About</a>
            <a href="#projects" className="py-2 hover:text-blue-300" onClick={closeMobileMenu}>Projects</a>
            <a href="#contact" className="py-2 hover:text-blue-300" onClick={closeMobileMenu}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
export default Navbar
