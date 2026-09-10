# Data Routing Auth Project

A modern React authentication project built with React Router, React Hook Form, Yup Validation, Context API, Local Storage, and Tailwind CSS.

---

## Features

### Authentication

- User Registration
- User Login
- User Logout
- Persistent Login using Local Storage
- Authentication Context
- Custom Authentication Hook

### Route Protection

- Protected Routes
- Unauthorized Access Prevention
- Automatic Redirect to Login Page
- Session Persistence after Refresh

### Form Validation

- React Hook Form
- Yup Schema Validation
- Email Validation
- Password Strength Validation
- Name Validation
- Error Handling

### User Management

- Multi User Registration
- Duplicate Email Prevention
- Case-Insensitive Email Validation
- User Lookup by Email

### UI

- Responsive Authentication Pages
- Professional Login Screen
- Professional Registration Screen
- Navbar Navigation
- Footer Component
- Toast Notifications
- Tailwind CSS Styling

---

## Tech Stack

### Frontend

- React
- React Router
- React Hook Form
- Yup
- Context API
- Tailwind CSS
- React Toastify
- React Icons

---

## Project Structure

```text
src
│
├── components
│   ├── Navbar.jsx
│   └── Footer.jsx
│
├── context
│   └── AuthContext.jsx
│
├── forms
│   ├── LoginForm.jsx
│   └── RegisterForm.jsx
│
├── hooks
│   └── useAuth.js
│
├── layouts
│   ├── AuthLayout.jsx
│   ├── Mainlayout.jsx
│   └── AdminLayout.jsx
│
├── pages
│   ├── auth
│   │   ├── LoginPage.jsx
│   │   └── RegisterPage.jsx
│   │
│   ├── user
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Profile.jsx
│   │
│   └── admin
│       ├── Dashboard.jsx
│       ├── Users.jsx
│       └── Settings.jsx
│
├── routes
│   ├── AppRoutes.jsx
│   └── ProtectedRoute.jsx
│
├── services
│   └── authService.js
│
├── validation
│   └── validation.js
│
└── main.jsx
```

---

## Authentication Flow

```text
Register
    ↓
Validate Form
    ↓
Check Duplicate Email
    ↓
Save User
    ↓
Redirect Login

Login
    ↓
Validate Credentials
    ↓
Save Auth User
    ↓
Update Context
    ↓
Navigate Home

Logout
    ↓
Clear Auth User
    ↓
Update Context
    ↓
Redirect Login
```

---

## Validation Rules

### Name

- Required
- Minimum 3 Characters
- Maximum 50 Characters
- Letters and Spaces Only

### Email

- Required
- Valid Email Format
- Maximum 255 Characters
- Unique Across Users

### Password

- Required
- Minimum 8 Characters
- Maximum 32 Characters
- At Least One Uppercase Letter
- At Least One Lowercase Letter
- At Least One Number
- At Least One Special Character

---

## Protected Routes

Authenticated users can access:

```text
/home
/about
/profile
```

Unauthenticated users are redirected to:

```text
/
```

---

## Local Storage Structure

### Registered Users

```json
[
  {
    "name": "John Doe",
    "email": "john@gmail.com",
    "password": "John@123"
  }
]
```

### Authenticated User

```json
{
  "name": "John Doe",
  "email": "john@gmail.com",
  "password": "John@123"
}
```

---

## Current Progress

### Completed

- Project Setup
- Authentication Pages
- Form Validation
- Registration Flow
- Login Flow
- Logout Flow
- Auth Context
- Custom Hook
- Local Storage Persistence
- Protected Routes
- Navbar
- Footer

### Upcoming

- Role Based Authentication
- Admin Protected Route
- Admin Layout
- Admin Dashboard
- Ecommerce Module
- Product Listing
- Product Details
- Cart Functionality
- Wishlist
- Orders Management

---

## Installation

```bash
git clone <repository-url>
```

```bash
cd Data-Routing-Auth-Project
```

```bash
npm install
```

```bash
npm run dev
```

---

## Learning Goals

This project is focused on understanding:

- React Router Data Routing
- Authentication Flow
- Protected Routes
- Context API
- Form Validation
- State Management Fundamentals
- Role Based Authorization
- Ecommerce Architecture

---

## Author

HM Maisuriya

Built for learning modern React Authentication, Routing, and Ecommerce Architecture.
