# 🚆 Next-Gen IRCTC Train Scheduler

A beautiful, premium, and interactive Train Scheduling application built to track Indian Railways (IRCTC) train routes and live statuses. Designed with a stunning **Glassmorphism** UI, dynamic animations, and seamless UX in mind.

---

## 🌟 Key Features

- **Live Real-Time Tracking**: Get updates on your train's live location, including delays and expected timings.
- **Interactive UI Elements**: Fluid micro-animations, glass-panel aesthetics, and smooth transitions that give a state-of-the-art feel to train tracking.
- **Detailed Schedule View**: Visualize the entire train route, from origin to destination. The timeline displays passed stations, current location, and upcoming stops dynamically based on mock data.
- **Delays & Status Highlights**: Clear badges indicate if a train is on time or the exact minutes it's been delayed.
- **Comprehensive Search**: Easily look up trains using their unique Train Numbers (e.g., `12001`, `12951`) to pull up schedules.

---

## 🛠️ Tech Stack

This project is built using modern front-end technologies:

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: `react-router-dom` v7
- **Styling**: Vanilla CSS featuring modern features (Variables, Glassmorphism, CSS Grid/Flexbox)
- **Icons**: `lucide-react` for beautiful, consistent SVG iconography

---

## 🎨 Design & Aesthetics

The application prioritizes **Visual Excellence**:
- Deep, immersive dark mode backgrounds with dynamic color gradients.
- "Glassmorphism" styled cards and panels featuring translucent backgrounds, subtle borders, and smooth backdrop blurs.
- Interactive hover effects and entry fade-in animations that make the dashboard feel alive.

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js installed (v18+ recommended):
- [Node.js](https://nodejs.org/)
- npm (comes with Node)

### Installation

1. **Clone the repository** (or download the project):
   ```bash
   git clone https://github.com/abhay-bharat/irctc-tracker-and-scheduler.git
   ```

2. **Install the dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```

4. **View the Application**:
   Open your browser and navigate to `http://localhost:5173` (or the port provided by Vite in your terminal).

---

## 📂 Project Structure

```text
irctc-scheduler/
├── index.html            # Main HTML entry
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite build configuration
├── public/               # Public assets
└── src/                  # Source files
    ├── main.jsx          # React app entry point
    ├── App.jsx           # Root layout and Router setup
    ├── index.css         # Global styles and design tokens
    ├── components/       # Reusable UI components
    │   ├── Navbar.jsx
    │   ├── SearchBox.jsx
    │   └── TrainSchedule.jsx
    ├── pages/            # Application routes/pages
    │   ├── Home.jsx      # Landing and search page
    │   └── Schedule.jsx  # Detailed train route timeline
    └── utils/            # Utilities and Mock Data
        └── mockData.js   # Local database for testing and demonstration
```

---

## 🔍 How to Use (Mock Data)

Since this is currently using mock data, you can search for the following train numbers to test the features:
- **`12001`** (Shatabdi Express - On Time)
- **`12951`** (Rajdhani Express - Delayed)
- **`12627`** (Karnataka Express - On Time)

*Note: Entering an invalid or unmocked number will display a beautifully styled "Train Not Found" feedback page.*

---

## 📜 Scripts

- `npm run dev` - Starts the development server.
- `npm run build` - Builds the app for production.
- `npm run preview` - Locally preview the production build.
- `npm run lint` - Run ESLint to find code issues.

---

*Designed and developed as part of an Advanced Agentic Coding session focusing on premium UI experiences.*
