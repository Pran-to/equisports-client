# EquiSports

A responsive sports equipment e-commerce application built with React, Vite, and Firebase.

🔗 **Live Site:** [https://equisports-project-b7818.web.app](https://equisports-project-b7818.web.app)

## Features

- Responsive single-page application (SPA).
- Firebase authentication with email/password and Google sign-in.
- Protected routes for private management actions.
- Light and dark theme switching.
- Custom notifications powered by SweetAlert2.
- Interactive tooltips and Swiper-powered content carousels.

## Tech Stack

- **React**
- **Vite**
- **React Router DOM**
- **Tailwind CSS** & **DaisyUI**
- **Firebase Authentication**
- **Lucide Icons**
- **Swiper**
- **SweetAlert2**

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org) and npm.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Pran-to/equisports-client.git
   ```
2. Navigate to the project directory:
   ```bash
   cd equisports-client
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables

Configure the Firebase credentials required by the app in a `.env` file at the project root. Check the source code for the exact variable names expected (e.g., `VITE_APIKEY`, `VITE_AUTHDOMAIN`, etc.).

> **Note:** Do not commit secrets or private credentials to version control. Ensure `.env` is listed in your `.gitignore` file.

### Run Locally

Start the development server:
```bash
npm run dev
```

Open the local URL shown in your terminal to view the application in your browser.

## Available Scripts

```bash
npm run dev      # Start the local development server
npm run build    # Create a production build
npm run preview  # Preview the production build locally
```

Check `package.json` for the complete list of scripts configured in this repository.

## Build

Create a production-ready bundle with:
```bash
npm run build
```


## License
&copy; 2026 Pranto Chakrobortty. All rights reserved.
