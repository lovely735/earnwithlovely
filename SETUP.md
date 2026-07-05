# Setup Instructions

## Backend Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Update `.env` with your MongoDB URI and JWT secret

4. Start MongoDB on your system

5. Run backend:
```bash
npm run dev
```

Backend runs on `http://localhost:5000`

## Frontend Setup

1. Navigate to client folder:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start React app:
```bash
npm start
```

Frontend runs on `http://localhost:3000`

## Default Plans

The system has 4 plans:
- Plan 1: 500 PKR (50 PKR/day)
- Plan 2: 1000 PKR (120 PKR/day)
- Plan 3: 2000 PKR (250 PKR/day)
- Plan 4: 2500 PKR (280 PKR/day)

## Admin Account

To create admin, update a user document in MongoDB:
```
db.users.updateOne({email: "admin@example.com"}, {$set: {isAdmin: true}})
```

## Features

✅ User Registration & Login
✅ 4 Earning Plans
✅ Daily Video Tasks
✅ Referral System (5% commission)
✅ Withdrawal/Cash Out
✅ Admin Dashboard
✅ Real-time Earnings Tracking
✅ Mobile Responsive Design

## API Documentation

All endpoints require JWT token in Authorization header:
```
Authorization: Bearer <token>
```

See README.md for complete API documentation.
