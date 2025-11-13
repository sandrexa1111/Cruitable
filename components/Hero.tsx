
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { ArrowRightIcon, LinkedinIcon, UploadIcon } from './ui/IconComponents';

const Hero: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 text-center overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="w-80 h-80 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-gray-900 dark:text-white leading-tight">
                    {t('hero_title_1')}
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">
                        {t('hero_title_2')}
                    </span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                    {t('hero_subtitle')}
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                     <label htmlFor="cv-upload" className="cursor-pointer group flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-all shadow-lg shadow-cyan-500/30 w-full sm:w-auto">
                        <UploadIcon className="w-5 h-5 group-hover:animate-bounce" />
                        {t('btn_upload_cv')}
                    </label>
                    <input type="file" id="cv-upload" className="hidden"/>
                    <button className="group flex items-center justify-center gap-2 px-6 py-3 font-semibold text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-800/80 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-all w-full sm:w-auto">
                        <LinkedinIcon className="w-5 h-5 text-[#0077b5]" />
                        {t('btn_connect_linkedin')}
                        <ArrowRightIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
