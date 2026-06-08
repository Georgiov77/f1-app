# 🏎️ F1 App

A React Native F1 companion app built with Expo, featuring live race data, standings, schedule and more.

## Features

### 🏠 Home
- Next race card with countdown timer
- Collapsible session schedule (FP1, FP2, FP3, Qualifying, Race) with local timezone support
- Last race podium results
- "On This Day in F1" historical facts

### 🔴 Live
- Real-time race positions with team colors
- Session status (Live / Finished)
- Lap times per driver (tap to expand)
- Auto-refresh every 5 seconds during active sessions

### 📅 Schedule
- Full season calendar
- Past races faded, upcoming highlighted
- Tap any race to see full results

### 🏆 Standings
- Driver championship standings with team badges
- Constructor championship standings
- Head-to-Head driver comparison

## Tech Stack

- **React Native** + **Expo SDK 56**
- **TypeScript**
- **React Navigation** (Bottom Tabs + Native Stack)
- **Axios** for API calls
- **AsyncStorage** for theme persistence
- **Expo Haptics** for tactile feedback
- **Expo Blur** for glass UI effects

## APIs

| API | Usage |
|-----|-------|
| [Jolpica (Ergast)](https://api.jolpi.ca) | Schedule, standings, historical results |
| [OpenF1](https://openf1.org) | Live positions, lap times, session data |

## Getting Started

### Prerequisites
- Node.js 20+
- Xcode (for iOS)
- Expo CLI

### Installation

```bash
git clone https://github.com/Georgiov77/f1-app.git
cd f1-app
npm install
```

### Environment Setup

Create a `.env` file in the root directory:

```
OPENF1_USERNAME=your_email
OPENF1_PASSWORD=your_password
```

> OpenF1 credentials are required for live race data. Get access at [openf1.org](https://openf1.org).

### Run

```bash
# iOS Simulator
npx expo run:ios

# Start Metro bundler
npx expo start
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── EmptyState/
│   ├── H2HCard/
│   ├── LastRaceCard/
│   ├── LiveDriverRow/
│   ├── OnThisDayCard/
│   ├── RaceCard/
│   ├── SessionRow/
│   ├── Skeleton/
│   └── TeamBadge/
├── config/
│   └── theme.ts      # Design tokens (colors, spacing, typography)
├── context/
│   └── ThemeContext.tsx  # Dark/Light theme
├── hooks/            # Custom React hooks
├── navigation/       # React Navigation setup
├── screens/          # App screens
├── services/         # API services (Jolpica, OpenF1)
├── types/            # TypeScript interfaces
└── utils/            # Helper functions
```

## Roadmap

See [ROADMAP.md](./ROADMAP.md) for planned features.

## License

MIT
