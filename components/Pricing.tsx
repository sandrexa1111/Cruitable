
import React from 'react';
import { Plan } from '../types';
import { CheckIcon } from './ui/IconComponents';
import { useLanguage } from '../hooks/useLanguage';

const Pricing: React.FC = () => {
    const { t } = useLanguage();

    const plans: Plan[] = [
        {
            name: t('pricing_plan_free'),
            price: '0',
            currency: '₾',
            period: t('pricing_period_forever'),
            features: [t('pricing_plan_free_feature_1'), t('pricing_plan_free_feature_2'), t('pricing_plan_free_feature_3')],
            isPopular: false,
        },
        {
            name: t('pricing_plan_pro'),
            price: '9.99',
            currency: '₾',
            period: t('pricing_period_monthly'),
            features: [t('pricing_plan_pro_feature_1'), t('pricing_plan_pro_feature_2'), t('pricing_plan_pro_feature_3'), t('pricing_plan_pro_feature_4')],
            isPopular: true,
        },
        {
            name: t('pricing_plan_elite'),
            price: '19.99',
            currency: '₾',
            period: t('pricing_period_monthly'),
            features: [t('pricing_plan_elite_feature_1'), t('pricing_plan_elite_feature_2'), t('pricing_plan_elite_feature_3'), t('pricing_plan_elite_feature_4'), t('pricing_plan_elite_feature_5')],
            isPopular: false,
        },
    ];

    return (
        <section id="pricing" className="py-20 sm:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {t('pricing_title')}
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        {t('pricing_subtitle')}
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan) => (
                        <div key={plan.name} className={`relative p-8 rounded-2xl border ${plan.isPopular ? 'border-cyan-500' : 'border-gray-200 dark:border-gray-800'} bg-white dark:bg-gray-900/50`}>
                            {plan.isPopular && (
                                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-4 py-1 text-sm font-semibold text-white bg-cyan-500 rounded-full">
                                    {t('pricing_popular')}
                                </div>
                            )}
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
                            <p className="mt-4">
                                <span className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">{plan.currency}{plan.price}</span>
                                <span className="text-base font-medium text-gray-500 dark:text-gray-400">{plan.period}</span>
                            </p>
                            <ul className="mt-6 space-y-4">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start">
                                        <CheckIcon className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0 mt-1" />
                                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className={`mt-8 w-full py-3 px-6 text-lg font-semibold rounded-lg transition-colors ${plan.isPopular ? 'bg-cyan-600 text-white hover:bg-cyan-700' : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700'}`}>
                                {plan.name === t('pricing_plan_free') ? t('btn_get_started') : t('pricing_btn_start_trial')}
                            </button>
                        </div>
                    ))}
                </div>
                 <p className="text-center mt-8 text-sm text-gray-500">{t('pricing_footer')}</p>
            </div>
        </section>
    );
};

export default Pricing;
