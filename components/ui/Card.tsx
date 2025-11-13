
import React, { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
    return (
        <div className={`bg-white/5 dark:bg-gray-900/50 border border-white/10 rounded-xl shadow-lg backdrop-blur-sm p-6 ${className}`}>
            {children}
        </div>
    );
};

export default Card;
