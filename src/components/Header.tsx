
import React from 'react';

const Header = () => {
  return (
    <header className="border-b border-black py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold font-courier tracking-tight">Noto</h1>
          <span className="ml-1 animate-blink">_</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 font-helvetica text-sm uppercase tracking-wider">
            <li><a href="#features" className="hover:underline">Recursos</a></li>
            <li><a href="#download" className="hover:underline">Download</a></li>
            <li><a href="#about" className="hover:underline">Sobre</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
