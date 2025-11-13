import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { UploadIcon, SearchIcon, BellIcon } from './ui/IconComponents';
import Card from './ui/Card';

const ProductVision: React.FC = () => {
    const { t } = useLanguage();

    const workflowSteps = [
        {
            title: t('vision_step1_title'),
            description: t('vision_step1_desc'),
            icon: <UploadIcon className="w-10 h-10 text-cyan-400" />,
        },
        {
            title: t('vision_step2_title'),
            description: t('vision_step2_desc'),
            icon: <SearchIcon className="w-10 h-10 text-fuchsia-400" />,
        },
        {
            title: t('vision_step3_title'),
            description: t('vision_step3_desc'),
            icon: <BellIcon className="w-10 h-10 text-cyan-400" />,
        },
    ];

    return (
        <section id="vision" className="py-20 sm:py-32 bg-gray-100/50 dark:bg-black/20">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {t('vision_title')}
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        {t('vision_subtitle')}
                    </p>
                </div>
                
                <div className="mt-16">
                    <div className="text-center mb-12">
                         <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {t('vision_how_it_works_title')}
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {workflowSteps.map((step, index) => (
                             <Card key={index} className="text-center transform hover:-translate-y-2 transition-transform duration-300">
                                <div className="flex justify-center mb-4">{step.icon}</div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</h4>
                                <p className="mt-2 text-gray-500 dark:text-gray-400">{step.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="mt-24">
                     <div className="text-center mb-12">
                         <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {t('vision_ui_ux_title')}
                        </h3>
                        <p className="mt-3 text-md text-gray-500 dark:text-gray-400">{t('vision_ui_ux_subtitle')}</p>
                    </div>
                    <Card className="p-8 md:p-12">
                        <ul className="space-y-8">
                            <li className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 flex items-center justify-center text-white font-bold">1</div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('vision_ui_hero_title')}</h4>
                                    <p className="mt-1 text-gray-400">{t('vision_ui_hero_desc')}</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 flex items-center justify-center text-white font-bold">2</div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('vision_ui_dashboard_title')}</h4>
                                    <p className="mt-1 text-gray-400">{t('vision_ui_dashboard_desc')}</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 flex items-center justify-center text-white font-bold">3</div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('vision_ui_popup_title')}</h4>
                                    <p className="mt-1 text-gray-400">{t('vision_ui_popup_desc')}</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500 flex items-center justify-center text-white font-bold">4</div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white">{t('vision_ui_toggle_title')}</h4>
                                    <p className="mt-1 text-gray-400">{t('vision_ui_toggle_desc')}</p>
                                </div>
                            </li>
                        </ul>
                    </Card>
                </div>

            </div>
        </section>
    );
};

export default ProductVision;
