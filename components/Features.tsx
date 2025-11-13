
import React from 'react';
import Card from './ui/Card';
import { BrainCircuitIcon, TargetIcon, GlobeIcon, ChartBarIcon } from './ui/IconComponents';
import { useLanguage } from '../hooks/useLanguage';

const Features: React.FC = () => {
    const { t } = useLanguage();

    const features = [
        {
            title: t('feature_1_title'),
            description: t('feature_1_desc'),
            icon: <BrainCircuitIcon className="w-10 h-10 text-cyan-400" />
        },
        {
            title: t('feature_2_title'),
            description: t('feature_2_desc'),
            icon: <TargetIcon className="w-10 h-10 text-fuchsia-400" />
        },
        {
            title: t('feature_3_title'),
            description: t('feature_3_desc'),
            icon: <GlobeIcon className="w-10 h-10 text-cyan-400" />
        },
        {
            title: t('feature_4_title'),
            description: t('feature_4_desc'),
            icon: <ChartBarIcon className="w-10 h-10 text-fuchsia-400" />
        }
    ];

    return (
        <section id="features" className="py-20 sm:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {t('features_title')}
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        {t('features_subtitle')}
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">{feature.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
