# 🚀 Hritik Sharma — Full-Stack Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live_Demo-hritik.is--a.dev-5810ff?style=for-the-badge&logo=vercel&logoColor=white)](https://hritik.is-a.dev)
[![Next.js](https://img.shields.io/badge/Next.js-15.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Express.js](https://img.shields.io/badge/Express.js-5.2-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose_9.1-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

A modern, high-performance, full-stack personal portfolio and showcase built for **Hritik Sharma** — Full-Stack Web Developer based in Chandigarh, India. 

Designed with an immersive dark-mode aesthetic, fluid Framer Motion transitions, responsive layouts, modular component architecture, and a dedicated Express & MongoDB backend powering contact form submissions and automated EmailJS notifications.

---

## 🌐 Live Website

- **Production URL**: [https://hritik.is-a.dev](https://hritik.is-a.dev)

---

## ✨ Features

- **Full-Stack Architecture**: Decoupled Next.js 15 frontend paired with an Express.js 5 REST API backend.
- **Modern Dark Aesthetic**: Custom-crafted color palette with neon purple accents (`#5810ff`), smooth gradients, and glassmorphic UI elements.
- **Dynamic & Interactive Contact System**:
  - Validated contact form connected to the Express backend via Axios.
  - Inquiries persisted to MongoDB with timestamps and structured schemas.
  - Automated transactional email delivery powered by the EmailJS REST API.
  - Interactive toast notifications and alert states for instant user feedback.
- **Rich Page Transitions & Micro-Animations**:
  - Fluid route transitions powered by Framer Motion and custom rectangle wiping effects.
  - Interactive text typing effects with `react-type-animation`.
  - Animated stat counters with `react-countup`.
- **Project Showcase**: Interactive Swiper.js portfolio carousel highlighting featured full-stack projects, live demos, and source code repositories.
- **Interactive Experience & Journey Timeline**: Tabbed interface detailing education, certifications, and technical experience.
- **Complete SEO & Web Standards**:
  - Dynamic route metadata and Open Graph social share cards (`og-image.png`).
  - Search engine bot instructions via `app/robots.js`.
  - Dynamic XML sitemap generator via `app/sitemap.js`.
  - Web App Manifest (`manifest.webmanifest`) and complete favicon icon suite.
- **Fully Responsive**: Flawless experience across ultra-wide monitors, laptops, tablets, and mobile devices with a mobile navigation sheet.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15.4.10](https://nextjs.org/) (App Router, Turbopack enabled)
- **Library**: [React 19.1.0](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + `@tailwindcss/postcss` + `tailwind-scrollbar`
- **Animations**: [Framer Motion 12](https://motion.dev/)
- **UI Primitives**: Radix UI (Dialog, ScrollArea, Tooltip, Tabs)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Icons**: Lucide React & React Icons (`react-icons`)
- **Typography**: Google Fonts — `Sometype Mono` via `next/font/google`
- **Slider / Carousel**: [Swiper.js 14](https://swiperjs.com/)
- **Counters & Typing Effects**: `react-countup` & `react-type-animation`

### Backend
- **Runtime**: [Node.js](https://nodejs.org/) (ES Modules)
- **Framework**: [Express.js 5.2.1](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose 9.10.1](https://mongoosejs.com/)
- **Email Service**: [EmailJS REST API](https://www.emailjs.com/)
- **Middleware & Utilities**: CORS, Dotenv, Nodemon

---

## 📁 Project Structure

```
Portfolio/
├── app/                         # Next.js App Router
│   ├── about/                   # About page (/about)
│   ├── contact/                 # Contact page (/contact)
│   ├── experience/              # Experience page (/experience)
│   ├── portfolio/               # Projects showcase (/portfolio)
│   ├── globals.css              # Global styles & Tailwind tokens
│   ├── layout.jsx               # Root layout, fonts & SEO
│   ├── page.jsx                 # Home page entrypoint
│   ├── robots.js                # Dynamic robots.txt
│   └── sitemap.js               # Dynamic sitemap.xml
├── components/                  # Reusable React components
│   ├── ui/                      # Radix UI primitives & alerts
│   ├── Blob.jsx                 # Animated vector background
│   ├── Gradient.jsx             # Ambient background gradient
│   ├── Header.jsx               # Mobile header & navigation
│   ├── Info.jsx                 # Personal details component
│   ├── Journey.jsx              # Timeline & career journey
│   ├── Logo.jsx                 # Portfolio brand logo
│   ├── MainNav.jsx              # Desktop sidebar navigation
│   ├── NavLinks.jsx             # Navigation route definitions
│   ├── PageTransition.jsx       # Route transition wrapper
│   ├── Pattern.jsx              # Geometric background pattern
│   ├── Rectangle.jsx            # Transition rectangle element
│   ├── RectangleTransition.jsx  # Slide transition effect
│   ├── Skills.jsx               # Categorized skills grid
│   ├── Socials.jsx              # Social profile links
│   ├── Stats.jsx                # Animated numerical statistics
│   └── Toast.jsx                # Notification toast banner
├── lib/                         # Utilities & shared helpers
│   ├── axios.js                 # Configured Axios instance
│   └── utils.js                 # Tailwind merge & clsx utility
├── public/                      # Static public assets
│   ├── assets/                  # Images, icons, and avatars
│   ├── manifest.webmanifest     # PWA web app manifest
│   ├── og-image.png             # Open Graph preview image
│   └── ...                      # Resume PDF & favicon assets
├── server/                      # Express & MongoDB backend
│   ├── src/
│   │   ├── config/              # DB & EmailJS configurations
│   │   ├── controllers/         # API route controllers
│   │   ├── models/              # Mongoose data models
│   │   ├── routes/              # Express API routes
│   │   └── server.js            # Express app & server setup
│   ├── .env.example             # Backend environment template
│   └── package.json             # Backend dependencies & scripts
├── views/                       # Page view containers
│   └── Home.jsx                 # Home page hero section
├── .env                         # Client environment variables
├── package.json                 # Frontend dependencies & scripts
└── postcss.config.mjs           # PostCSS config for Tailwind v4
```

---

## ⚙️ Environment Variables

### 1. Client Environment (`.env`)
Create a `.env` file in the root directory:

```env
NEXT_PUBLIC_SERVER_URL=http://localhost:5000
```

### 2. Server Environment (`server/.env`)
Create a `.env` file in the `server/` directory (see `server/.env.example`):

```env
PORT=5000
CLIENT_URL=http://localhost:3000
MONGODB_URI=your_mongodb_connection_string

# EmailJS Service Configuration
SERVICE_ID=your_emailjs_service_id
PUBLIC_KEY=your_emailjs_public_key
PRIVATE_KEY=your_emailjs_private_key
TEMPLATE_ID=your_emailjs_template_id
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.18.0 or higher
- **npm**, **yarn**, or **pnpm**
- **MongoDB**: Local MongoDB instance or [MongoDB Atlas](https://www.mongodb.com/atlas) URI

### 1. Clone the Repository
```bash
git clone https://github.com/hritik2004-cse/Portfolio.git
cd Portfolio
```

### 2. Backend Setup
1. Open a terminal and navigate to the `server` directory:
   ```bash
   cd server
   npm install
   ```
2. Create and configure `server/.env` based on `server/.env.example`.
3. Start the backend development server:
   ```bash
   npm run dev
   ```
   *The server will start at `http://localhost:5000`.*

### 3. Frontend Setup
1. In the project root, install client dependencies:
   ```bash
   npm install
   ```
2. Verify or create `.env` in the project root:
   ```env
   NEXT_PUBLIC_SERVER_URL=http://localhost:5000
   ```
3. Start the Next.js development server:
   ```bash
   npm run dev
   ```
   *The client will start at `http://localhost:3000` with Turbopack enabled.*

---

## 🔌 API Endpoints

The backend server exposes the following endpoints:

### 1. Health Check
- **Endpoint**: `GET /health`
- **Description**: Verifies if the backend server is active.
- **Response**:
  ```json
  {
    "success": true,
    "message": "Portfolio API is working!"
  }
  ```

### 2. Submit Contact Inquiry
- **Endpoint**: `POST /api/v1/contact`
- **Description**: Validates user inquiry, stores it in MongoDB, and triggers an email notification via EmailJS.
- **Request Body**:
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "intrest": "full-stack",
    "message": "Hi Hritik, I'd like to collaborate on an upcoming web application project."
  }
  ```
- **Validation Rules**:
  - `firstName` & `lastName`: Required, 1–30 characters.
  - `email`: Required, valid email address.
  - `intrest`: Enum (`"full-stack"`, `"frontend"`, `"tools"`, `"games"`).
  - `message`: Required, 20–500 characters.
- **Success Response (200)**:
  ```json
  {
    "success": true,
    "message": "Message sent successfully"
  }
  ```
- **Error Response (401 / 500)**:
  ```json
  {
    "success": false,
    "message": "Invalid credentials"
  }
  ```

---

## 📜 Available Scripts

### Root (Frontend)
| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Next.js development server with Turbopack at `localhost:3000` |
| `npm run build` | Builds optimized production bundle |
| `npm run start` | Runs production Next.js server |
| `npm run lint` | Runs ESLint analysis across codebase |

### Server (Backend)
| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the Express API with `nodemon` for auto-reloading |
| `npm run start` | Runs the Express server using standard Node.js |

---

## 🎨 Design System & Styling

- **Primary Color**: `#0d091a` (Deep cosmic dark background)
- **Secondary Color**: `#140e25` (Card & navigation surface)
- **Tertiary Color**: `#201837` (Borders & muted containers)
- **Accent Color**: `#5810ff` (Vibrant purple highlights & active controls)
- **Accent Hover**: `#4a0bde`
- **Font Family**: `Sometype Mono` (Loaded via `next/font/google` CSS variable `--font-family-primary`)

---

## 🚢 Deployment

### Frontend (Next.js)
Deploy seamlessly on [Vercel](https://vercel.com/):
1. Push your repository to GitHub.
2. Import the project in Vercel.
3. Add the environment variable:
   - `NEXT_PUBLIC_SERVER_URL`: Your deployed backend production URL (e.g., `https://api.yourdomain.com`).
4. Deploy!

### Backend (Express & MongoDB)
Deploy on platforms like [Render](https://render.com/), [Railway](https://railway.app/), or [DigitalOcean](https://www.digitalocean.com/):
1. Set the root directory to `server`.
2. Set build command to `npm install` and start command to `node src/server.js`.
3. Add all server environment variables (`PORT`, `CLIENT_URL`, `MONGODB_URI`, `SERVICE_ID`, `PUBLIC_KEY`, `PRIVATE_KEY`, `TEMPLATE_ID`).
4. Ensure MongoDB network access allows connections from your deployment host.

---

## 🤝 Contributing

Contributions, feedback, and suggestions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 📬 Contact & Connect

**Hritik Sharma**  
*Full-Stack Web Developer — Chandigarh, India*

- **Website**: [hritik.is-a.dev](https://hritik.is-a.dev)
- **Email**: [hritiksharma08725@gmail.com](mailto:hritiksharma08725@gmail.com)
- **LinkedIn**: [hritik-sharma-oct04](https://www.linkedin.com/in/hritik-sharma-oct04/)
- **GitHub**: [@hritik2004-cse](https://github.com/hritik2004-cse)
- **YouTube**: [@hritik_is_coding](https://youtube.com/@hritik_is_coding)
- **Instagram**: [@hritik_sharma_2004](https://www.instagram.com/hritik_sharma_2004/)

---

⭐ *If you like this project, don't forget to give it a star!*
