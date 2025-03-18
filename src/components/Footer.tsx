
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-black py-8 bg-retro-darkgray text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold font-courier tracking-tight">
              Noto<span className="animate-blink">_</span>
            </h2>
            <p className="font-helvetica text-sm mt-1 text-gray-300">
              © {new Date().getFullYear()} Noto App. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div>
              <h3 className="font-helvetica text-sm uppercase tracking-wider mb-2">Links</h3>
              <ul className="font-helvetica text-sm text-gray-300 space-y-1">
                <li><a href="#features" className="hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#download" className="hover:text-white transition-colors">Download</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-helvetica text-sm uppercase tracking-wider mb-2">Suporte</h3>
              <ul className="font-helvetica text-sm text-gray-300 space-y-1">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-700">
          <p className="font-courier text-xs text-center text-gray-400">
            Feito com nostalgia. Inspirado na simplicidade dos anos 2000.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
