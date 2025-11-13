import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../hooks/useLanguage';
import { LogoIcon, MoonIcon, SunIcon } from './ui/IconComponents';
import { useAuth } from '../hooks/useAuth';

const Header: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const { language, setLanguage, t } = useLanguage();
    const { currentUser, signInWithGoogle, signOutUser } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSignOut = async () => {
        await signOutUser();
        setIsDropdownOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200/50 dark:border-white/10">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <LogoIcon className="h-8 w-8 text-cyan-500" />
                    <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cruitable</span>
                </div>
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-600 dark:text-gray-300">
                    <a href="#features" className="hover:text-cyan-500 transition-colors">{t('nav_features')}</a>
                    <a href="#dashboard" className="hover:text-cyan-500 transition-colors">{t('nav_dashboard')}</a>
                    <a href="#pricing" className="hover:text-cyan-500 transition-colors">{t('nav_pricing')}</a>
                    <a href="#recruiters" className="hover:text-cyan-500 transition-colors">{t('nav_recruiters')}</a>
                </nav>
                <div className="flex items-center space-x-3">
                    <button onClick={toggleTheme} className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
                        {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
                    </button>
                    
                    <div className="flex items-center space-x-1 rounded-full bg-gray-200/50 dark:bg-gray-800/50 p-1">
                        <button
                            onClick={() => setLanguage('en')}
                            className={`px-2 py-1 text-xs font-semibold rounded-full transition-colors ${language === 'en' ? 'bg-white dark:bg-gray-700 text-cyan-600 dark:text-white shadow' : 'text-gray-500 dark:text-gray-400'}`}
                            aria-pressed={language === 'en'}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => setLanguage('ka')}
                            className={`px-2 py-1 text-xs font-semibold rounded-full transition-colors ${language === 'ka' ? 'bg-white dark:bg-gray-700 text-cyan-600 dark:text-white shadow' : 'text-gray-500 dark:text-gray-400'}`}
                             aria-pressed={language === 'ka'}
                        >
                            KA
                        </button>
                    </div>

                    {currentUser ? (
                        <div className="relative" ref={dropdownRef}>
                            <button onClick={() => setIsDropdownOpen(prev => !prev)} className="focus:outline-none">
                                <img 
                                    src={currentUser.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.displayName || '')}&background=06b6d4&color=fff`} 
                                    alt="User avatar" 
                                    className="w-9 h-9 rounded-full border-2 border-transparent hover:border-cyan-500 transition-colors" 
                                />
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700 origin-top-right animate-scale-in">
                                    <div className="px-4 py-3">
                                        <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">{currentUser.displayName}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{currentUser.email}</p>
                                    </div>
                                    <div className="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                                    <a
                                        href="#dashboard"
                                        onClick={() => setIsDropdownOpen(false)}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                        My Dashboard
                                    </a>
                                    <button
                                        onClick={handleSignOut}
                                        className="block w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10"
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <button onClick={signInWithGoogle} className="hidden lg:inline-block px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 bg-gray-200/50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                                {t('btn_signin')}
                            </button>
                            <button onClick={signInWithGoogle} className="px-4 py-2 text-sm font-semibold text-white bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-shadow shadow-cyan-500/30 hover:shadow-lg">
                                {t('btn_get_started')}
                            </button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
