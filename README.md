# Social Media App

A modern social media application built with React, featuring post creation, viewing, and interactive UI components.

## Features

- 📝 Create and view posts
- 🎨 Modern UI with Bootstrap styling
- 🧭 Client-side routing with React Router
- 📱 Responsive design
- 🎯 Context-based state management
- ⚡ Fast development with Vite

## Tech Stack

- **Frontend**: React 19.1.1
- **Styling**: Bootstrap 5.3.8
- **Icons**: Lucide React
- **Routing**: React Router DOM 7.9.5
- **Build Tool**: Vite 7.1.7
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd socilamedia
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── header.jsx      # App header
│   ├── sidebar.jsx     # Navigation sidebar
│   ├── Footer.jsx      # App footer
│   ├── postList.jsx    # Display posts
│   └── createPost.jsx  # Create new posts
├── lib/                # Utilities and contexts
│   ├── Postcontext.jsx # Post state management
│   └── contexts.js     # Router actions and loaders
├── assets/             # Static assets
├── App.jsx             # Main app component
├── App.css             # Global styles
└── main.jsx            # App entry point
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
