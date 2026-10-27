export type Project = {
    title: string;
    description: string;
    media: string;
    technologies: string[];
    code?: string;
    live?: string;
    product?: string;
};

export const projects: Project[] = [
    {
        title: "Flabet",
        description:
            "Backend for Flamengo FC's iGaming platform. Payments, sportsbook, casino games, facial-recognition auth and 2FA. Shipped in 6 months.",
        media: "media/projects/flabet.webp",
        technologies: ["NestJS", "PostgreSQL", "AWS", "Docker", "Redis"],
        live: "https://flabet-br.org",
    },
    {
        title: "Connected Music",
        description:
            "Spotify integration inside BMW and Rolls-Royce infotainment systems. Owned releases and deployment pipelines.",
        media: "media/projects/connected-music.webp",
        technologies: ["TypeScript", "GitHub", "Python", "Linux", "Kanban"],
        product: "https://bmw.co.uk/en/shop/ls/dp/Base_Connected_Music_gb",
    },
    {
        title: "Trip Planner",
        description:
            "Web application that generates travel routes based on origin, destination, and user-selected points of interest.",
        media: "media/projects/trip-planner.webp",
        technologies: [
            "Ruby",
            "Ruby on Rails",
            "RSpec",
            "PostgreSQL",
            "PostGIS",
        ],
        code: "https://github.com/segarra99/trip-planner.git",
    },
    {
        title: "Odds Feed Risk Guard",
        description:
            "Node.js service that processes real-time sports odds, validating incoming data to prevent inconsistent or incorrect odds from reaching downstream consumers and trading systems.",
        media: "media/projects/odds-feed-risk-guard.avif",
        technologies: ["WebSockets", "Typescript", "Zod", "npm"],
        code: "https://github.com/segarra99/odds-feed-risk-guard.git",
    },
];
