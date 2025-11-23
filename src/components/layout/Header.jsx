import React, { useState, useEffect } from 'react';
import { Menu, X, Recycle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Sobre', href: '#about' },
        { name: 'Como Funciona', href: '#how-it-works' },
        { name: 'Benefícios', href: '#benefits' },
        { name: 'Soluções', href: '#solutions' },
        { name: 'MVP', href: '#mvp' },
        { name: 'Contato', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="bg-eco-green-500 p-2 rounded-lg text-white group-hover:bg-eco-green-600 transition-colors">
                        <Recycle size={24} />
                    </div>
                    <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                        ECO CICLO <span className="text-eco-green-500">360°</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium hover:text-eco-green-500 transition-colors ${isScrolled ? 'text-gray-600' : 'text-gray-100'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Link
                        to="/app"
                        className="bg-eco-green-500 hover:bg-eco-green-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-eco-green-500/30"
                    >
                        Acessar Plataforma
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-600"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X size={24} className={isScrolled ? 'text-gray-900' : 'text-white'} />
                    ) : (
                        <Menu size={24} className={isScrolled ? 'text-gray-900' : 'text-white'} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-4 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-600 font-medium py-2 border-b border-gray-50 hover:text-eco-green-500"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex flex-col gap-3 mt-2">
                        <Link
                            to="/app"
                            className="text-center bg-eco-green-500 text-white font-medium py-2 rounded-lg hover:bg-eco-green-600"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Acessar Plataforma
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
