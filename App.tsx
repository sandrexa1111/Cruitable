import React from 'react';
import { ThemeProvider } from './hooks/useTheme';
import { LanguageProvider } from './hooks/useLanguage';
import { AuthProvider } from './hooks/useAuth';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductVision from './components/ProductVision';
import DashboardDemo from './components/DashboardDemo';
import Pricing from './components/Pricing';
import RecruiterCTA from './components/RecruiterCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <AuthProvider>
                    <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-300">
                        <Header />
                        <main>
                            <Hero />
                            <Features />
                            <ProductVision />
                            <DashboardDemo />
                            <Pricing />
                            <RecruiterCTA />
                        </main>
                        <Footer />
                    </div>
                </AuthProvider>
            </LanguageProvider>
        </ThemeProvider>
    );
};

export default App;
