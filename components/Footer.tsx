
import React from 'react';
import { LogoIcon } from './ui/IconComponents';
import { useLanguage } from '../hooks/useLanguage';

const Footer: React.FC = () => {
    const { t } = useLanguage();
    
    return (
        <footer className="bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    <div className="col-span-full lg:col-span-2">
                        <div className="flex items-center space-x-2">
                            <LogoIcon className="h-8 w-8 text-cyan-500" />
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">Cruitable</span>
                        </div>
                        <p className="mt-4 max-w-xs text-gray-500 dark:text-gray-400">
                           {t('footer_desc')}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">{t('footer_product')}</h3>
                        <ul className="mt-4 space-y-3">
                            <li><a href="#features" className="text-base text-gray-500 dark:text-gray-400 hover:text-cyan-500">{t('nav_features')}</a></li>
                            <li><a href="#pricing" className="text-base text-gray-500 dark:text-gray-400 hover:text-cyan-500">{t('nav_pricing')}</a></li>
                            <li><a href="#dashboard" className="text-base text-gray-500 dark:text-gray-400 hover:text-cyan-500">{t('nav_dashboard')}</a></li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">{t('footer_company')}</h3>
                        <ul className="mt-4 space-y-3">
                            <li><a href="#" className="text-base text-gray-500 dark:text-gray-400 hover:text-cyan-500">{t('footer_about')}</a></li>
                            <li><a href="#" className="text-base text-gray-500 dark:text-gray-400 hover:text-cyan-500">{t('footer_careers')}</a></li>
                            <li><a href="#" className="text-base text-gray-500 dark:text-gray-400 hover:text-cyan-500">{t('footer_contact')}</a></li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">{t('footer_legal')}</h3>
                        <ul className="mt-4 space-y-3">
                            <li><a href="#" className="text-base text-gray-500 dark:text-gray-400 hover:text-cyan-500">{t('footer_privacy')}</a></li>
                            <li><a href="#" className="text-base text-gray-500 dark:text-gray-400 hover:text-cyan-500">{t('footer_terms')}</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
                    <p>&copy; {new Date().getFullYear()} {t('footer_copyright')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
