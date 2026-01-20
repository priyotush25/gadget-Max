# ShopLite

## Short Project Description

ShopLite is a premium, minimalist e-commerce application built with Next.js and Express. It is designed to offer a seamless product listing and browsing experience, featuring a high-end UI with smooth animations and responsive design.

## Setup & Installation Instructions

**Prerequisites:** Node.js installed on your system.

### 1. Backend Setup

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
npm run dev
# Server runs on http://localhost:5000
```

### 2. Frontend Setup

In a new terminal window, navigate to the root directory and install dependencies:

```bash
# Root directory
npm install
npm run dev
# Frontend runs on http://localhost:3000
```

_Note: Ensure both servers are running simultaneously._

## Deployment Guide (Separate Deployment)

This project is configured to run as two separate services: a Frontend (Next.js) and a Backend (Express).

### 1. Deploying the Backend

You can deploy the `server` folder to any Node.js hosting platform like **Render**, **Railway**, or **Heroku**.

1.  Push your code to GitHub.
2.  Connect your repository to your hosting provider.
3.  **Root Directory:** Set this to `server`.
4.  **Build Command:** `npm install`
5.  **Start Command:** `npm start`
6.  **Environment Variables:**
    - `CLIENT_URL`: The URL of your deployed frontend (e.g., `https://gadget-max.vercel.app`).
    - `NODE_ENV`: `production`

### 2. Deploying the Frontend

Deploy the root of the repository to **Vercel**.

1.  Connect your repository to Vercel.
2.  **Root Directory:** Leave as default (`./`).
3.  **Environment Variables:**
    - `NEXT_PUBLIC_API_URL`: The URL of your deployed backend (e.g., `https://your-api-service.onrender.com`).

## Route Summary

| Route         | Access        | Description                                 |
| :------------ | :------------ | :------------------------------------------ |
| `/`           | Public        | Landing page with hero and feature sections |
| `/items`      | Public        | Gallery view of all listed products         |
| `/items/[id]` | Public        | Detailed view of a single product           |
| `/add-item`   | **Protected** | Form to list a new product (Requires Login) |
| `/login`      | Public        | User login page                             |
| `/register`   | Public        | User registration page                      |
| `/profile`    | **Protected** | User profile overview                       |

## List of Implemented Features

- **Responsive Landing Page:** High-impact visuals with modular sections.
- **Product Gallery:** Dynamic fetching and display of products from the API.
- **Product Details:** Individual pages for each item with rich metadata.
- **User Authentication:** Mock login/signup flow with cookie-based access control.
- **Protected Routes:** Middleware (Proxy) to secure the selling flow.
- **Interactive Notifications:** Toast notifications for user actions (Add to Cart, List Item).
- **Premium UI/UX:** Glassmorphism effects, Framer Motion animations, and custom fonts.

## Brief Explanation of Features

- **Authentication System:** A robust mock authentication system allows users to "Log In" using demo credentials (`demo@example.com` / `password`). This sets a secure HTTP-only cookie to manage sessions and gatekeep access to protected routes like `/add-item`.
- **Dynamic Item Listing:** Users can list new items via the `/add-item` page. The form includes manual validation to ensure data integrity and provides real-time feedback using toast notifications upon success or error.
- **Toast Notifications:** A centralized notification system (using `react-hot-toast`) provides immediate visual feedback for key actions, such as adding an item to the cart or successfully listing a product. These notifications are positioned top-right for visibility.
- **Product Management:** The backend Express API stores an in-memory list of products that persists while the server is running, allowing the frontend to dynamically fetch and display new regular listings instantly.
- **Visual Design:** The application uses a "dark mode" aesthetic with careful attention to typography (Outfit & Inter fonts) and spacing, creating a professional, trust-building environment for e-commerce.
