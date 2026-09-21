# SO NICE NX Backend

Backend API for the SO NICE NX fashion showroom prototype.

## Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- CORS
- dotenv

## Local Setup

```bash
cd backend
npm install
```

Create `.env`:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
FRONTEND_URL=http://localhost:3000
```

Start development server:

```bash
npm run dev
```

Seed demo products:

```bash
npm run seed
```

Build:

```bash
npm run build
```

Start production build:

```bash
npm start
```

## API Endpoints

### Health

`GET /api/health`

### Products

`GET /api/products`

`GET /api/products/:id`

`GET /api/products?category=Women`

`GET /api/products?category=Men`

`GET /api/products?category=Kids`

`GET /api/products?category=Winter`

`GET /api/products/featured`

`GET /api/products?search=kurti`

### Store

`GET /api/store`

### Contact

`POST /api/contact`

Request:

```json
{
  "name": "Yuragi",
  "phone": "9876543210",
  "email": "yuragi@example.com",
  "message": "I want to know about the latest collection."
}
```

### Callback

`POST /api/callback`

Request:

```json
{
  "name": "Yuragi",
  "phone": "9876543210",
  "preferredTime": "5 PM - 7 PM",
  "message": "Please call me regarding the collection."
}
```

## Required Environment Variables

- `PORT`
- `MONGODB_URI`
- `FRONTEND_URL`

Never commit `.env` or database credentials.

## Project Scope

This backend is a prototype foundation for the SO NICE NX showroom website. Authentication, payment gateway, cart, orders, inventory management and advanced recommendation systems are intentionally outside the current assignment scope.
