
import React from 'react';
import { ArrowRightIcon } from './ui/IconComponents';
import { useLanguage } from '../hooks/useLanguage';

const RecruiterCTA: React.FC = () => {
    const { t } = useLanguage();
    
    return (
        <section id="recruiters" className="py-20 sm:py-24">
            <div className="container mx-auto px-6">
                <div className="relative p-10 md:p-16 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 dark:from-cyan-900/30 dark:to-fuchsia-900/30 overflow-hidden">
                     <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
                     <div className="absolute -top-20 -left-20 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {t('recruiter_title')}
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                           {t('recruiter_desc')}
                        </p>
                        <div className="mt-8">
                            <button className="group inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-all shadow-lg shadow-cyan-500/30">
                                {t('recruiter_btn')}
                                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecruiterCTA;
