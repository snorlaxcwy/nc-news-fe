# Northcoders News (Frontend) by Wai Yan Sze

## Deployed version:

    https://dapper-froyo-08b7cd.netlify.app/

# Overview

    Northcoders News is a Reddit-style social news aggregation and discussion platform. Users can browse articles by topic, vote on articles and comments, add new comments, and delete their own comments.

    Articles are categorized by topics.
    Each article can be upvoted or downvoted.
    Users can view and add comments to articles.
    Comments can be deleted by the user who posted them.
    Articles can be sorted and filtered by different criteria.

# Backend Repository

    API base URL:
    https://snorlax-7fa6.onrender.com/api

# Backend repo:

    https://github.com/snorlaxcwy/my-seeding-stuff

# Minimum Node Version

    Node >= 18
    To check your Node version:
    node --version

# How to Run Locally

    ## 1. Clone this repository
    git clone https://github.com/snorlaxcwy/nc-news-fe.git
    cd nc-news-fe

    ## 2. Install dependencies
    npm install

    ## 3. Start the local development server (Vite)
    npm run dev

    ## 4. Open http://localhost:5173/ in your browser

# Features

    - Browse all articles on the homepage.
    - Click on an article to view its details.
    - Vote on articles and comments.
    - Add new comments to articles.
    - Delete your own comments.
    - View and filter articles by topic.
    - Sort articles by date, votes, or comment count, in ascending or descending order.
    - Error handling for non-existent pages, articles, topics, and invalid comment submissions.

# Project Structure

    /src/components/: Reusable React components
    /src/api/: API utility functions (using axios)
    /src/pages/: Main page components
    /planning/: Wireframes and component tree diagrams

    For more planning details, please refer to developer log, checklist, UI and component tree record here : https://github.com/snorlaxcwy/nc-news-fe/tree/master/planning

# Wireframe and Component Tree samples:

    Task Log
    Task 1: Create a React project and a public repo
    Task 2: Enable CORS on backend
    Task 3: Planning (Component tree, wireframes)
    Task 4: List all articles on the homepage
    Task 5: View individual article details
    Task 6: View comments for an article
    Task 7: Vote on articles
    Task 8: Post new comments
    Task 9: Delete comments (own comments only)
    Task 10: View topic-specific article lists
    Task 11: Sort articles by various criteria
    Task 12: Error handling for navigation and forms
    Task 13: Deploy to Netlify
    Task 14: Write README

# Notes

    The default user is set as "weegembump" (no login page implemented yet).
    Only your own comments can be deleted.
    All API and data fetching errors are handled with user-friendly messages.
    The app is designed mobile-first and is functional across modern browsers.

# About

This portfolio project was created as part of a Skills Bootcamp in Software Engineering provided by Northcoders

<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->
