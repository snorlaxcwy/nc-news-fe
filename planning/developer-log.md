# Northcoder News

- create a forum like reddit
- user can read the articles
- every article could be upvote/downvote
- every article with comment function
- use topic to see different articles
- push new comment/ delete comment
- upvote / downvote comment

# MVP

- see all the articles on home
- click to each articles for details
- vote for article & comment
- topic filter

# Basic - Git

    git checkout master
    git pull origin master
    git checkout -b fe-ncnews-display-articles
    git add .
    git commit -m "Ticket #1: display articles list"
    git push origin fe-ncnews-display-articles
    githyb -> Compare & pull request

# Task 1 Create a React project and a public repo

    cd nc-news
    git init
    cd nc-news
    git remote add origin https://github.com/your-username/nc-news.git
    git push origin main

# Task 2 Enable CORS on BE repo

    npm install cors
    [backend!] (also fixed render issue)
     app.js => const cors = require('cors'); && app.use(cors());
        git add package.json package-lock.json app.js
        git commit -m 'allow cross origin resource sharing'
        git push origin main

# Task 3 Planning

## Component Tree:

    /Users/szewaiyan/northcoders/frontend/nc-news-fe/planning/component-tree-nc-news.png

## UI

    /Users/szewaiyan/northcoders/frontend/nc-news-fe/planning/UI_ncnews_4.png

# Task 4 View a list of all articles
