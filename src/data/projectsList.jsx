import FlexPreview from "../assets/vanilla-preview.png"
import YoutubeClonePreview from "../assets/youtube-clone-preview.png"

export const projectsList = [
    {
        id: "youtube-frontend-clone",
        name: "YouTube Frontend Clone",
        alt: "Youtube Recreation Preview",
        previewImage: YoutubeClonePreview,
        video: "https://www.youtube.com/watch?v=zsUIJyR5Ejk",
        embeddedVideo: "https://www.youtube.com/embed/zsUIJyR5Ejk?rel=0&modestbranding=1",
        github: "https://github.com/DLAwe7/Youtube-Frontend-Clone",
        liveDemo: "https://youtube-frontendclone.netlify.app/",
        shortDescription: {
            title: "React YouTube Interface Clone",
            content: {
                resume: (
                    <>
                        A <strong>responsive</strong> video platform interface built with
                        <strong className="blue"> React</strong>,
                        <strong className="yellow"> JavaScript</strong>, and
                        <strong className="green"> serverless API integration</strong>.
                    </>
                ),
                introduction:
                    "This project recreates the YouTube browsing and watch experience with a strong focus on reusable components, responsive layouts, accessibility, and protected API architecture."
            }
        },
        tools: {
            introduction: "Built with a modern front-end stack:",
            toolsUsed: [
                { name: "React", color: "blue", icon: "faReact" },
                { name: "CSS", color: "green", icon: "faCss3Alt" }
            ]
        },
        sections: [
            {
                id: "overview",
                title: "Overview",
                introduction:
                    "The project reproduces the core YouTube browsing and viewing flow through a responsive React application, combining API-driven content with reusable UI patterns and a cleaner front-end architecture.",
                color: "green",
                content: [
                    {
                        title: "Responsive Browsing Experience",
                        id: "responsive-browsing",
                        description:
                            "Includes home and watch page layouts designed to adapt cleanly across desktop and smaller screen sizes.",
                        icon: "faDisplay",
                        className: "project-item-title-green",
                    },
                    {
                        title: "API-Driven Video Data",
                        id: "api-data",
                        description:
                            "Video and channel content are loaded dynamically from the YouTube API instead of relying on static mock screens.",
                        icon: "faVideo",
                        className: "project-item-title-green",
                    },
                    {
                        title: "Frontend + Serverless Split",
                        id: "serverless-split",
                        description:
                            "A Netlify function acts as a secure layer between the client and the external API, keeping sensitive keys out of the browser.",
                        icon: "faServer",
                        className: "project-item-title-green",
                    }
                ]
            },
            {
                id: "features",
                title: "Key Features",
                introduction:
                    "Beyond matching the visual feel of YouTube, the project focuses on interaction quality, scalable component structure, and practical front-end engineering decisions.",
                color: "blue",
                content: [
                    {
                        title: "Reusable Component Architecture",
                        id: "components",
                        description:
                            "The UI is organized into reusable React components to keep rendering logic easier to maintain and extend.",
                        icon: "faCubes",
                        className: "project-item-title-blue",
                    },
                    {
                        title: "React Query Data Flow",
                        id: "react-query",
                        description:
                            "Remote data fetching and caching are handled with React Query to improve consistency and reduce repetitive request logic.",
                        icon: "faDatabase",
                        className: "project-item-title-blue",
                    },
                    {
                        title: "Custom Interaction Hooks",
                        id: "custom-hooks",
                        description:
                            "The project includes custom hooks for click outside behavior, escape key handling, focus restoration, media queries, body scroll locking, inert background behavior, and keyboard navigation.",
                        icon: "faCodeBranch",
                        className: "project-item-title-blue",
                    },
                    {
                        title: "Accessibility-Focused Interactions",
                        id: "accessibility",
                        description:
                            "Keyboard support and focus management were treated as core interaction requirements rather than optional polish.",
                        icon: "faUniversalAccess",
                        className: "project-item-title-blue",
                    },
                    {
                        title: "Demo-Mode Feedback",
                        id: "demo-feedback",
                        description:
                            "For actions that are not fully implemented, the interface provides controlled feedback instead of leaving interactions feeling broken or unfinished.",
                        icon: "faCommentDots",
                        className: "project-item-title-blue",
                    },
                    {
                        title: "Richer Watch Experience",
                        id: "watch-experience",
                        description:
                            "Local mock comment data helps make the video detail view feel more complete and closer to a real platform experience.",
                        icon: "faComments",
                        className: "project-item-title-blue",
                    }
                ]
            },
            {
                id: "architecture",
                title: "Architecture Choices",
                introduction:
                    "A major goal of the project was to move beyond simple cloning and use the build as practice for structuring a medium-sized React application more deliberately.",
                color: "green",
                content: [
                    {
                        title: "Separation of Concerns",
                        id: "separation",
                        description:
                            "UI rendering, reusable hooks, and API access responsibilities are split more clearly so the app remains easier to reason about as it grows."
                    },
                    {
                        title: "Protected API Access",
                        id: "protected-api",
                        description:
                            "Using a serverless function avoids exposing the YouTube API key directly in the frontend source code."
                    },
                    {
                        title: "Scalable Interaction Patterns",
                        id: "interaction-patterns",
                        description:
                            "Instead of solving each UI behavior ad hoc, the project consolidates repeated interaction logic into reusable hooks and systems."
                    }
                ]
            },
            {
                id: "takeaways",
                title: "What I Learned",
                introduction:
                    "This project became a strong exercise in building a larger React interface with more attention to maintainability, remote data, and user interaction details.",
                color: "blue",
                content: [
                    {
                        title: "How to Structure a Larger React App",
                        id: "react-structure",
                        description:
                            "Building beyond small demos required more deliberate component boundaries and better folder organization."
                    },
                    {
                        title: "Why Reusable Hooks Matter",
                        id: "reusable-hooks",
                        description:
                            "Extracting repeated interaction logic into hooks made the codebase cleaner and improved consistency across features."
                    },
                    {
                        title: "Managing Remote State More Cleanly",
                        id: "remote-state",
                        description:
                            "React Query helped simplify data fetching and caching patterns while making API-driven screens easier to manage."
                    },
                    {
                        title: "Accessibility Improves Product Quality",
                        id: "a11y",
                        description:
                            "Focus handling, keyboard support, and controlled overlays noticeably improved the overall polish and usability of the interface."
                    }
                ]
            }
        ]
    },
    {
        id: "flexfinance",
        name: "FlexFinance",
        alt: "FlexFinance preview image",
        previewImage: FlexPreview,
        video: "https://www.youtube.com/watch?v=VM2-aURb0C0",
        embeddedVideo: "https://www.youtube.com/embed/VM2-aURb0C0?rel=0&modestbranding=1",
        github: "https://github.com/DLAwe7/FlexFinance",
        liveDemo: "https://dlawe7.github.io/FlexFinance/",
        shortDescription: {
            title: "Vanilla JavaScript Banking Dashboard",
            content: {
                resume: (
                    <>
                        A <strong>responsive</strong> multi-page finance interface built with
                        <strong className="orange"> HTML</strong>,
                        <strong className="blue"> CSS</strong>, and
                        <strong className="yellow"> JavaScript</strong>.
                    </>
                ),
                introduction:
                    "FlexFinance is a front-end banking experience focused on modular UI architecture, dynamic data rendering, accessibility, and polished client-side interactions all without a framework or backend."
            }
        },
        tools: {
            introduction: "My first project. Built with a lightweight front-end stack:",
            toolsUsed: [
                { name: "HTML", color: "orange", icon: "faHtml5" },
                { name: "CSS", color: "blue", icon: "faCss3Alt" },
                { name: "JavaScript", color: "yellow", icon: "faJs" },
            ]
        },
        sections: [
            {
                id: "overview",
                title: "Overview",
                introduction:
                    "FlexFinance simulates a modern digital banking product with a connected multi-page experience. Instead of treating each page as isolated, the project uses shared layout patterns and reusable front-end logic to keep the app cohesive.",
                color: "green",
                content: [
                    {
                        title: "Modular Multi-Page App",
                        id: "multi-page",
                        description:
                            "Built as a structured multi-page interface with shared navigation, sidebar, and footer components dynamically reused across the application.",
                        icon: "faLayerGroup",
                        className: "project-item-title-green"
                    },
                    {
                        title: "Finance-Focused UI",
                        id: "finance-ui",
                        description:
                            "Includes dashboard analytics, wallet views, transaction history, account settings, crypto tracking, and support-oriented pages.",
                        icon: "faChartColumn",
                        className: "project-item-title-green"
                    },
                    {
                        title: "Frontend-Only Simulation",
                        id: "frontend-only",
                        description:
                            "Uses local JSON and client-side rendering to simulate realistic banking flows without relying on a backend.",
                        icon: "faLaptopCode",
                        className: "project-item-title-green"
                    }
                ]
            },
            {
                id: "features",
                title: "Key Features",
                introduction:
                    "The project goes beyond static layout work by combining reusable architecture with interactive data-driven features.",
                color: "blue",
                content: [
                    {
                        title: "Reusable Layout System",
                        id: "layout-system",
                        description:
                            "Header, sidebar, and footer are dynamically loaded to reduce duplication and keep the experience consistent across pages.",
                        icon: "faCubes",
                        className: "project-item-title-blue",
                    },
                    {
                        title: "Interactive Dashboard",
                        id: "dashboard",
                        description:
                            "Account summaries, savings progress, and data visualizations create a more realistic finance dashboard experience.",
                        icon: "faChartLine",
                        className: "project-item-title-blue",
                    },
                    {
                        title: "Transaction History Tools",
                        id: "transactions",
                        description:
                            "Transaction views include filtering, sorting, and incremental rendering for better usability.",
                        icon: "faWallet",
                        className: "project-item-title-blue",
                    },
                    {
                        title: "Live Crypto Data",
                        id: "crypto",
                        description:
                            "The crypto section pulls live market data and pairs it with chart-based feedback for a more dynamic experience.",
                        icon: "faBitcoin",
                        className: "project-item-title-blue",
                    },
                    {
                        title: "Theme + UX Polish",
                        id: "theme",
                        description:
                            "Light and dark theme behavior, transitions, and interactive states help the interface feel more product-like.",
                        icon: "faPalette",
                        className: "project-item-title-blue",
                    },
                    {
                        title: "Accessibility-Driven Interactions",
                        id: "accessibility",
                        description:
                            "Focus handling, keyboard support, ARIA state sync, and click-outside interactions were treated as part of the core UI system rather than afterthoughts.",
                        icon: "faUniversalAccess",
                        className: "project-item-title-blue",
                    }
                ]
            },
            {
                id: "architecture",
                title: "Architecture Choices",
                introduction:
                    "One of the most valuable parts of this build was learning how to organize a larger vanilla JavaScript project so it stayed maintainable as features expanded.",
                color: "green",
                content: [
                    {
                        title: "Shared Logic Over Repetition",
                        id: "shared-logic",
                        description:
                            "Reusable scripts handle layout injection, common UI behavior, and accessibility patterns instead of duplicating code across pages."
                    },
                    {
                        title: "Page-Specific Rendering",
                        id: "page-rendering",
                        description:
                            "Each page keeps its own responsibilities while still plugging into a broader shared system."
                    },
                    {
                        title: "Scalability Without Frameworks",
                        id: "scalability",
                        description:
                            "The project was an exercise in building structure, consistency, and stateful behavior with plain JavaScript before relying on abstractions."
                    }
                ]
            },
            {
                id: "takeaways",
                title: "What I Learned",
                introduction:
                    "FlexFinance became an important step in how I think about front-end systems, especially when building larger interfaces without a framework.",
                color: "blue",
                content: [
                    {
                        title: "Modularity Improves Everything",
                        id: "modularity",
                        description:
                            "Separating shared UI patterns from page-specific logic made the project easier to maintain, extend, and refactor."
                    },
                    {
                        title: "Accessibility Should Be Built In",
                        id: "a11y",
                        description:
                            "Working on keyboard flows, focus control, and semantic interaction patterns made accessibility feel like a design requirement, not a final pass."
                    },
                    {
                        title: "Vanilla JavaScript Still Teaches Deeply",
                        id: "vanilla-js",
                        description:
                            "Building this without a framework strengthened my understanding of rendering flow, UI state, event handling, and component thinking at a lower level."
                    }
                ]
            }
        ]
    },
];