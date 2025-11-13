
export interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    type: 'Local' | 'Remote';
    isHybrid?: boolean;
    logoUrl: string;
}

export interface Skill {
    name: string;
    level: number; // e.g., 1 to 5
}

export interface Plan {
    name: string;
    price: string;
    currency: string;
    period: string;
    features: string[];
    isPopular: boolean;
}
