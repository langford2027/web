import { useState, useEffect } from 'react';
import { useLocation, Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { useAuth } from '@/_core/hooks/useAuth';
import { getLoginUrl } from '@/const';
import { Logo } from '@/components/common/Logo';

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user, isAuthenticated } = useAuth();
    const [location] = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/programs', label: 'Programs' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav
                className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled || location !== '/'
                    ? 'bg-white/95 backdrop-blur-md shadow-lg'
                    : 'bg-white/30 backdrop-blur-md'
                    }`}
            >
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/">
                        <div className="cursor-pointer">
                            <Logo variant={isScrolled || location !== '/' ? 'dark' : 'dark'} />
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href}>
                                <span className={`cursor-pointer transition-colors font-body ${location === link.href ? 'text-[#E21E26] font-bold' : 'text-black hover:text-[#E21E26]'}`}>
                                    {link.label}
                                </span>
                            </Link>
                        ))}

                        {isAuthenticated ? (
                            <div className="flex items-center gap-4">
                                <span className="text-sm text-black">{user?.name}</span>
                                {user?.role === 'admin' && (
                                    <a href="/admin" className="bg-[#E21E26] text-white px-6 py-2 rounded-lg hover:bg-[#D01820] transition-colors font-body">
                                        Admin
                                    </a>
                                )}
                            </div>
                        ) : (
                            <a href={getLoginUrl()} className="bg-[#E21E26] text-white px-6 py-2 rounded-lg hover:bg-[#D01820] transition-colors font-body">
                                Login
                            </a>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-black"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200 p-4 space-y-3">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href}>
                                <span className={`block w-full text-left transition-colors font-body py-2 ${location === link.href ? 'text-[#E21E26] font-bold' : 'text-black hover:text-[#E21E26]'}`}>
                                    {link.label}
                                </span>
                            </Link>
                        ))}

                        {isAuthenticated ? (
                            <a href="/dashboard" className="block w-full bg-[#E21E26] text-white px-6 py-2 rounded-lg hover:bg-[#D01820] transition-colors font-body text-center">
                                Dashboard
                            </a>
                        ) : (
                            <a href={getLoginUrl()} className="block w-full bg-[#E21E26] text-white px-6 py-2 rounded-lg hover:bg-[#D01820] transition-colors font-body text-center">
                                Login
                            </a>
                        )}
                    </div>
                )}
            </nav>

            <main>
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-black text-white py-8 border-t border-gray-800">
                <div className="container mx-auto px-4 text-center">
                    <p className="font-body text-gray-400">
                        © 2025 Langford International Institute. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
