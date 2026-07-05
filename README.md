# EarnwithLovely - Backend API

Complete earning platform built with Node.js, Express, and MongoDB.

## Installation

```bash
npm install
```

## Configuration

1. Create `.env` file from `.env.example`
2. Update MongoDB connection string
3. Add JWT secret key

## Running

```bash
npm run dev
```

Server runs on `http://localhost:5000`

## API Endpoints

### Auth
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get profile

### Plans
- `GET /api/plans` - Get all plans
- `POST /api/plans/buy` - Buy plan

### Tasks
- `GET /api/tasks` - Get tasks
- `POST /api/tasks/complete/:taskId` - Complete task

### Withdrawals
- `POST /api/withdrawals/request` - Request withdrawal
- `GET /api/withdrawals` - Get withdrawals

### Admin
- `GET /api/admin/dashboard` - Dashboard stats
- `GET /api/admin/users` - All users
- `PUT /api/admin/deposits/:id/approve` - Approve deposit
- `PUT /api/admin/withdrawals/:id/approve` - Approve withdrawal
