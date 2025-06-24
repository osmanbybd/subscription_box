# Subscription Box Service Platform

## Project Overview
This project is a web application where users can browse various subscription box services, view detailed information, and submit reviews.  
Subscription boxes are displayed as cards on the Home page with a responsive slider.  
If the user is not logged in, attempting to access the subscription details page will redirect them to the Login page.  
Reviews can be submitted and displayed dynamically on the details page.

---

## Features
- **Responsive Home Page** with a Swiper slider showcasing at least 6 subscription boxes.  
- **Subscription Details Page** protected by authentication; non-logged-in users get redirected to Login.  
- **User Authentication** using Firebase Authentication for secure login and registration.  
- **Review System** with input fields for review text and rating, dynamically displayed after submission.  
- **React Router DOM** for SPA routing and private route handling.  
- **Toast Notifications** to provide user feedback on actions like login status and review submission.  
- **React Hooks** (`useState`, `useEffect`, `useContext`) for state and lifecycle management.  
- **Swiper.js** for responsive and customizable sliders.  
- **Tailwind CSS and DaisyUI** for rapid and consistent UI styling.  
- **Protected Routes** to restrict pages to authenticated users only.  
- **Firebase Firestore** as the real-time database to store and retrieve user reviews.  
- **Custom Forget Password** feature without requiring email verification.

---

## Technologies Used

| Technology          | Purpose                                                 | Reason for Use                          |
|---------------------|---------------------------------------------------------|---------------------------------------|
| React.js            | Frontend UI & component-based architecture              | Modern, efficient UI development      |
| React Router DOM    | SPA routing and protected routes                         | Single Page App navigation             |
| Firebase Authentication | User authentication and authorization                  | Easy and secure user login system      |
| Firebase Firestore  | Database for storing user data and reviews              | Real-time syncing and easy integration |
| Swiper.js           | Responsive, touch-friendly sliders                       | Smooth slider experience                |
| Tailwind CSS        | Utility-first CSS framework                              | Rapid, responsive, and modular styling |
| DaisyUI             | UI components built on Tailwind CSS                      | Quick, consistent UI elements           |
| React Hooks         | Component state and lifecycle management                 | Modern React best practices             |
| React Context API   | Global state management (authentication state)          | Easy data sharing across components     |
| React Hot Toast     | User notifications (toasts)                              | User-friendly feedback mechanism        |

---

## Project Structure


---

## Why These Technologies?

- **React**: For building fast, modular user interfaces.  
- **Firebase**: Simplifies backend setup with authentication and real-time database.  
- **Swiper.js**: To create a beautiful, responsive slider experience.  
- **Tailwind CSS & DaisyUI**: For quick, consistent, and responsive styling.  
- **React Router DOM**: To manage navigation and secure routes in SPA.  
- **React Context API**: To manage and share authentication state globally.  
- **Toast Notifications**: To give instant, clear feedback to users.

---

## Getting Started

1. Clone the repository:

```bash
git clone <repo-url>

npm install
npm run dev
