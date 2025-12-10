"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Download, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
      
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }

      if (e.clientY <= 50) {
        setIsVisible(true);
        
        hideTimeoutRef.current = setTimeout(() => {
          if (window.scrollY > 100) {
            setIsVisible(false);
          }
        }, 1000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 bg-white shadow-sm transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-16">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image 
              src="/logo-unisantos.png" 
              alt="Logotipo Universidade Católica de Santos" 
              width={200} 
              height={50}
              className="h-10 sm:h-12 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className="text-gray-900 hover:text-blue-600 text-lg font-medium transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Inicio
            </a>
            <a 
              href="#pesquisa" 
              className="text-gray-900 hover:text-blue-600 text-lg font-medium transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('pesquisa')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Pesquisa
            </a>
            <a 
              href="#metodologia" 
              className="text-gray-900 hover:text-blue-600 text-lg font-medium transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('metodologia')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Metodologia
            </a>
            <a 
              href="#sobre" 
              className="text-gray-900 hover:text-blue-600 text-lg font-medium transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Sobre
            </a>
          </div>

          <div className="hidden md:block">
            <a 
              href="/pesquisa-covid19.pdf" 
              download="Análise_COVID19_Baixada_Santista.pdf"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Baixar Pesquisa
            </a>
          </div>
          
          <div className="md:hidden">
            <button 
              className="text-gray-900 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            <a 
              href="#" 
              className="block text-gray-900 hover:text-blue-600 text-lg font-medium transition-colors py-2"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Inicio
            </a>
            <a 
              href="#pesquisa" 
              className="block text-gray-900 hover:text-blue-600 text-lg font-medium transition-colors py-2"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                document.getElementById('pesquisa')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Pesquisa
            </a>
            <a 
              href="#metodologia" 
              className="block text-gray-900 hover:text-blue-600 text-lg font-medium transition-colors py-2"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                document.getElementById('metodologia')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Metodologia
            </a>
            <a 
              href="#sobre" 
              className="block text-gray-900 hover:text-blue-600 text-lg font-medium transition-colors py-2"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Sobre
            </a>
            <a 
              href="/pesquisa-covid19.pdf" 
              download="Análise_COVID19_Baixada_Santista.pdf"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 mt-4"
            >
              <Download className="w-5 h-5" />
              Baixar Pesquisa
            </a>
          </div>
        </div>
      )}
      
      <div 
        className="h-[1.5px] animate-gradient-x" 
        style={{
          background: 'linear-gradient(-45deg, #2563EB, #16A34A, #DC2626, #dbeb25, #16A34A)',
          backgroundSize: '400% 400%',
        }}
      ></div>    
    </nav>
  );
}