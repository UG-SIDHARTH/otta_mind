# Layover: Transit Guide & Itinerary Builder ✈️🌍

Layover is a premium, modern web application designed for travelers looking to maximize their layover time. Instead of waiting at the terminal, users can build curated micro-experiences, find premium lounges, and generate express city tours tailored exactly to their transit duration. 

## ✨ Key Features

- **Dynamic Itinerary Builder**: A drag-and-drop (`@dnd-kit`) interface allowing users to add, reorder, and remove stops during their layover.
- **Real-Time Fare & Transit Guide**: Calculates Haversine distances to estimate fares across Standard Taxi, Ride-Hail (Uber/Careem), and Metro transit systems.
- **Smart Metro Suggestions**: Analyzes proximity to nearest Metro stations; if points are close enough to a station, it highlights Metro transit as a viable, money-saving alternative.
- **Interactive Maps**: Uses `react-leaflet` to display origin, destination, and transit stations on a geographical map.
- **Persistent State**: Itineraries are saved seamlessly in `localStorage`.
- **Admin Dashboard**: An integrated management interface to handle available destinations.
- **Stunning UI**: Built using React, Vite, and Tailwind CSS v4, featuring glassmorphism, responsive designs, gradients, and micro-animations with `lucide-react` icons.

## 🚀 Tech Stack

- **Frontend Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (v4)
- **Routing**: React Router DOM (`react-router-dom`)
- **Drag & Drop**: `@dnd-kit/core`, `@dnd-kit/sortable`
- **Mapping**: `leaflet`, `react-leaflet`
- **Icons**: `lucide-react`
- **Testing**: `vitest`
- **Deployment & Infra**: Docker & Docker Compose

## 🛠️ How to Run Locally

### Using Docker (Recommended for Debian/Linux)
This project is containerized to ensure cross-platform compatibility without local node environment issues.

```bash
# Build and start the container in the background
docker-compose up --build -d

# To stop the container
docker-compose down
```
The app will be accessible at `http://localhost:5173` (or your mapped port/domain).

### Using NPM (Standard Development)
```bash
npm install
npm run dev
```

## 🧪 Running Tests
The core routing algorithms (Haversine distance) and fare calculation logic are tested using `vitest`.
```bash
npm install vitest -D
npx vitest run
```

## 📁 Project Structure
- `src/components/` - Reusable UI components (`TransitGuide.tsx`, `ItineraryBuilder.tsx`, `MapComponent.tsx`, etc.)
- `src/pages/` - Main route views (`Home.tsx`, `Admin.tsx`)
- `src/lib/` - Core logic (`fare.ts`, `routing.ts`) and tests.
- `src/data/` - Seeded JSON data (Places, Stations, Tariffs) generated via `seed.cjs`.
