
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import Card from './ui/Card';
import { Job } from '../types';
import { useLanguage } from '../hooks/useLanguage';

const mockJobs: Job[] = [
    { id: 1, title: 'Senior React Developer', company: 'GlobalTek', location: 'Tbilisi', type: 'Local', logoUrl: 'https://picsum.photos/seed/gt/40/40', isHybrid: true },
    { id: 2, title: 'Product Manager', company: 'Innovate Co.', location: 'Remote', type: 'Remote', logoUrl: 'https://picsum.photos/seed/ic/40/40' },
    { id: 3, title: 'UX/UI Designer', company: 'Creative Minds', location: 'Batumi', type: 'Local', logoUrl: 'https://picsum.photos/seed/cm/40/40' },
    { id: 4, title: 'Data Scientist', company: 'QuantLeap', location: 'Remote (EU)', type: 'Remote', logoUrl: 'https://picsum.photos/seed/ql/40/40' },
    { id: 5, title: 'Backend Engineer (Go)', company: 'GeoDevs', location: 'Kutaisi', type: 'Local', logoUrl: 'https://picsum.photos/seed/gd/40/40' },
];

const skillGapData = [
    { name: 'GraphQL', user: 60, required: 90 },
    { name: 'CI/CD', user: 75, required: 85 },
    { name: 'Testing', user: 80, required: 95 },
    { name: 'WebSockets', user: 40, required: 70 },
];

const skills = ['React', 'TypeScript', 'Node.js', 'Figma', 'Project Management', 'Agile', 'Next.js', 'SQL', 'UI/UX', 'Leadership'];

const CareerFitScore: React.FC<{ score: number, label: string }> = ({ score, label }) => {
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (score / 100) * circumference;

    return (
        <div className="relative w-40 h-40">
            <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle className="text-gray-700 stroke-current" strokeWidth="10" cx="50" cy="50" r="45" fill="transparent"></circle>
                <circle
                    className="text-cyan-500 stroke-current"
                    strokeWidth="10"
                    strokeLinecap="round"
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    transform="rotate(-90 50 50)"
                    style={{ transition: 'stroke-dashoffset 0.5s ease-out' }}
                ></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-white">{score}%</span>
                <span className="text-sm text-gray-400">{label}</span>
            </div>
        </div>
    );
};

const DashboardDemo: React.FC = () => {
    const [profileCompletion] = useState(75);
    const { t } = useLanguage();

    return (
        <section id="dashboard" className="py-20 sm:py-32 bg-gray-900/50 dark:bg-black/20">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {t('dashboard_title')}
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        {t('dashboard_subtitle')}
                    </p>
                </div>

                <div className="mt-16 p-4 md:p-8 rounded-2xl border border-white/10 bg-black/20 shadow-2xl shadow-cyan-500/10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Sidebar */}
                        <aside className="lg:col-span-3">
                            <Card className="h-full flex flex-col">
                                <h3 className="text-lg font-semibold text-white mb-4">{t('dashboard_profile_strength')}</h3>
                                <div className="relative h-2 w-full bg-gray-700 rounded-full mb-2">
                                    <div className="absolute top-0 left-0 h-2 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full" style={{ width: `${profileCompletion}%` }}></div>
                                </div>
                                <p className="text-sm text-gray-400 mb-6">{profileCompletion}% {t('dashboard_profile_completion')}</p>
                                
                                <h3 className="text-lg font-semibold text-white mb-4">{t('dashboard_filters')}</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-300">{t('dashboard_job_type')}</label>
                                        <select className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md py-2 px-3 text-white focus:ring-cyan-500 focus:border-cyan-500">
                                            <option>{t('dashboard_job_type_all')}</option>
                                            <option>{t('dashboard_job_type_full_time')}</option>
                                            <option>{t('dashboard_job_type_part_time')}</option>
                                            <option>{t('dashboard_job_type_contract')}</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-300">{t('dashboard_location')}</label>
                                        <select className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md py-2 px-3 text-white focus:ring-cyan-500 focus:border-cyan-500">
                                            <option>{t('dashboard_location_any')}</option>
                                            <option>{t('dashboard_location_tbilisi')}</option>
                                            <option>{t('dashboard_location_batumi')}</option>
                                            <option>{t('dashboard_location_kutaisi')}</option>
                                            <option>{t('dashboard_location_remote')}</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-300">{t('dashboard_salary')}</label>
                                        <input type="range" className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" />
                                    </div>
                                </div>
                            </Card>
                        </aside>
                        
                        {/* Main Content */}
                        <main className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card className="md:col-span-3">
                                <h3 className="text-xl font-bold text-white">{t('dashboard_top_matches')}</h3>
                                <p className="text-gray-400 mb-4">{t('dashboard_top_matches_desc')}</p>
                                <div className="space-y-3">
                                    {mockJobs.slice(0,3).map(job => (
                                        <div key={job.id} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
                                            <div className="flex items-center gap-4">
                                                <img src={job.logoUrl} alt={job.company} className="w-10 h-10 rounded-full" />
                                                <div>
                                                    <p className="font-semibold text-white">{job.title}</p>
                                                    <p className="text-sm text-gray-400">{job.company} &middot; <span className={job.type === 'Remote' ? 'text-cyan-400' : 'text-fuchsia-400'}>{job.type}</span></p>
                                                </div>
                                            </div>
                                            <button className="px-3 py-1 text-xs font-semibold text-white bg-cyan-600 rounded-full hover:bg-cyan-700">{t('dashboard_view_btn')}</button>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                            
                            <Card className="flex flex-col items-center justify-center">
                                <CareerFitScore score={88} label={t('dashboard_career_fit')} />
                            </Card>

                             <Card>
                                <h3 className="text-xl font-bold text-white mb-2">{t('dashboard_skill_gaps')}</h3>
                                <p className="text-sm text-gray-400 mb-4">{t('dashboard_skill_gaps_desc')}</p>
                                <ResponsiveContainer width="100%" height={120}>
                                    <BarChart data={skillGapData} layout="vertical" margin={{ top: 0, right: 10, left: 10, bottom: 0 }}>
                                        <XAxis type="number" hide />
                                        <YAxis type="category" dataKey="name" hide />
                                        <Tooltip cursor={{fill: 'rgba(255,255,255,0.1)'}} contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '0.5rem' }} />
                                        <Bar dataKey="user" stackId="a" fill="#06b6d4" radius={[4, 0, 0, 4]} />
                                        <Bar dataKey="required" stackId="a" fill="#4f46e5" radius={[0, 4, 4, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </Card>

                            <Card>
                                <h3 className="text-xl font-bold text-white mb-2">{t('dashboard_skill_cloud')}</h3>
                                 <p className="text-sm text-gray-400 mb-4">{t('dashboard_skill_cloud_desc')}</p>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map(skill => (
                                        <span key={skill} className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 text-cyan-200 animate-pulse" style={{ animationDelay: `${Math.random() * 2}s`, animationDuration: '3s'}}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        </main>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardDemo;
