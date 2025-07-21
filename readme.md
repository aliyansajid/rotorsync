# Rotorsync

A sensor monitoring and fleet management system for agricultural crop dusting operations. The platform provides comprehensive equipment tracking, real-time sensor data collection, and operational analytics through separate admin and mobile interfaces.

## Overview

Rotorsync streamlines agricultural aviation operations by providing centralized management of aircraft, equipment, and sensor networks. The system enables administrators to oversee fleet operations while field personnel monitor equipment status in real-time.

## Features

### Admin Dashboard

- **Dashboard Analytics**: Overview cards showing total users, sensor count, and recent activity
- **User Management**: Create, edit, and manage pilot and crew accounts
- **Fleet Management**: Track helicopters, trailers, and associated equipment
- **Sensor Configuration**: Manage BMS, Mopeka, tilt sensors, and Raspberry Pi units
- **Equipment Assignment**: Link sensors to appropriate aircraft or trailers
- **Data Visualization**: Historical sensor data displayed in interactive graphs
- **Export Functionality**: Download operational data in CSV format

### Mobile Application

- **Real-time Monitoring**: Live sensor data collection and display
- **MQTT Integration**: Publish data streams to configured brokers
- **Data Synchronization**: Automatic API updates for database storage
- **Field Operations**: Designed for pilots and crew use during operations

### Data Management

- **Dual MQTT Topics**: Both sensor-specific and equipment-based data streams
- **Database Storage**: Complete historical record of all sensor readings
- **API Integration**: RESTful endpoints for data access and management

## Technology Stack

- **Admin Panel**: Next.js, ShadCN UI, TypeScript
- **Mobile App**: React Native, TypeScript
- **Backend API**: Node.js, Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Message Broker**: MQTT
- **Authentication**: JWT tokens

## Project Structure

```
rotorsync/
├── admin/              # Next.js admin dashboard
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── package.json
│   └── .env.local
├── mobile/             # React Native application
│   ├── src/
│   ├── components/
│   ├── screens/
│   ├── package.json
│   └── .env
├── server/             # Express.js API server
│   ├── src/
│   ├── routes/
│   ├── controllers/
│   ├── prisma/
│   ├── package.json
│   └── .env
└── .gitignore
```

## Equipment Configuration

**Aircraft Management:**

- Helicopter registration
- Tilt sensor assignment for orientation monitoring

**Trailer Systems:**

- Container tracking and management
- Mopeka sensor integration for tank level monitoring
- BMS assignment for battery system oversight
- Raspberry Pi for thermocouple data collection

## MQTT Data Streams

The system publishes sensor telemetry using two topic structures:

**Sensor-based Topics:**

- `trailer1/mopeka`
- `trailer2/bms`
- `helicopter1/tilt`

**Equipment-based Topics:**

- `trailer/[TRAILER_ID]/mopeka`
- `trailer/[TRAILER_ID]/bms`
- `helicopter/[AIRCRAFT_ID]/tilt`

## Installation

### Prerequisites

- Node.js 18+
- PostgreSQL 13+
- MQTT Broker (Mosquitto recommended)
- Git

### Setup

1. **Clone Repository**

```bash
git clone https://github.com/aliyansajid/rotorsync.git
cd rotorsync
```

2. **Server Setup**

```bash
cd server
npm install
```

Create `server/.env`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/rotorsync"
JWT_SECRET="your-secure-jwt-secret"
MQTT_BROKER_URL="mqtt://localhost:1883"
PORT=3000
```

Initialize database:

```bash
npx prisma migrate dev
npx prisma generate
```

Start server:

```bash
npm run dev
```

3. **Admin Dashboard Setup**

```bash
cd admin
npm install
```

Create `admin/.env`:

```env
NEXT_PUBLIC_API_URL="http://localhost:3000"
```

Start admin panel:

```bash
npm run dev
```

4. **Mobile App Setup**

```bash
cd mobile
npm install
```

Create `mobile/.env`:

```env
API_URL="http://localhost:3001"
MQTT_BROKER_URL="mqtt://localhost:1883"
```

Start mobile app:

```bash
npm run start
```

## Development

Each application runs independently:

```bash
# Server (Terminal 1)
cd server && npm run dev

# Admin Panel (Terminal 2)
cd admin && npm run dev

# Mobile App (Terminal 3)
cd mobile && npm run start
```

## Data Export

CSV exports include:

- Sensor readings with timestamps
- Equipment operational history
- User activity logs
- System performance metrics

## Deployment

Each component can be deployed independently:

- **Admin**: Self-hosted on dedicated server
- **Mobile**: iOS App Store
- **Server**: Self-hosted on dedicated server

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Open Pull Request

## License

This is proprietary software. All rights reserved.

## Repository

GitHub: [https://github.com/aliyansajid/rotorsync](https://github.com/aliyansajid/rotorsync)
