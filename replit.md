# Overview

This is a full-stack business services platform called "Vestra Strategies" that helps entrepreneurs and businesses with startup guidance, growth strategies, certifications, government/corporate contracting opportunities, and capital solutions. The application provides comprehensive business development services through a modern web interface built with React and TypeScript on the frontend, with an Express.js backend and PostgreSQL database integration.

## Recent Updates (January 2024)

### New React Components Created
- **Navigation & Layout**: Professional responsive Navbar with sticky behavior and mobile menu, comprehensive Footer with newsletter signup
- **Hero & Landing**: Dynamic Hero section with animations and video modal, Interactive JourneyCards for business pathways
- **Content & Features**: Configurable FeatureList component, Rotating TestimonialCard with ratings and results, ProcessTimeline visualization
- **Call-to-Action**: Flexible CTASection with multiple variants (default, orange, navy, gradient)
- **Go High Level Integration**: GHLFormEmbed for contact forms with fallback, GHLCalendarEmbed for appointment booking
- **Enhanced Homepage**: Complete redesign showcasing all new components with professional business aesthetic

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development/build tooling
- **UI Framework**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **Routing**: Wouter for client-side routing (lightweight React router alternative)
- **State Management**: TanStack React Query for server state management and API interactions
- **Forms**: React Hook Form with Zod validation via Hookform Resolvers
- **Animations**: Framer Motion for smooth transitions and animations
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: TSX for TypeScript execution during development
- **Build**: ESBuild for production bundling with platform-specific optimizations
- **API Design**: RESTful endpoints under `/api` prefix with structured error handling
- **Development Integration**: Vite middleware integration for seamless full-stack development

## Data Layer
- **Database**: PostgreSQL with Neon Database serverless hosting
- **ORM**: Drizzle ORM for type-safe database operations and migrations
- **Schema Management**: Shared schema definitions between frontend and backend
- **Validation**: Drizzle-Zod integration for runtime type validation
- **Connection**: Connection pooling with pg-simple session store support

## Authentication & Session Management
- **Session Storage**: Connect-pg-simple for PostgreSQL-backed session storage
- **User Management**: User entity with username/password authentication
- **Storage Layer**: Abstracted storage interface with in-memory fallback for development

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Drizzle Kit**: Database migration and schema management tooling

### Frontend Libraries
- **UI Components**: Comprehensive Radix UI component collection (40+ components)
- **Styling**: Tailwind CSS with PostCSS processing and autoprefixer
- **Utilities**: Class-variance-authority for component variants, clsx for conditional classes
- **Date Handling**: date-fns for date manipulation and formatting
- **Carousel**: Embla Carousel React for image/content carousels

### Development Tools
- **Replit Integration**: Vite plugins for Replit development environment
- **Error Handling**: Runtime error modal for development debugging
- **Code Mapping**: Cartographer plugin for enhanced development experience

### Form & Validation
- **React Hook Form**: Form state management with TypeScript support
- **Zod**: Runtime type validation and schema definition
- **Input Components**: Specialized input components including OTP input support

### Monitoring & Utilities
- **Query Management**: TanStack React Query for API state, caching, and synchronization
- **Toast Notifications**: Radix UI toast system for user feedback
- **Icons**: Lucide React for consistent iconography
- **Animations**: Framer Motion for performant animations and transitions