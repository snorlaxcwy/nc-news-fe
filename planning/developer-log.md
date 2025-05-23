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
    git commit -m "1: display articles list"
    git push origin fe-ncnews-display-articles
    github -> Compare & pull request

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

    /Users/szewaiyan/northcoders/frontend/nc-news-fe/planning/component-tree-nc-news_3.png

## UI

    /Users/szewaiyan/northcoders/frontend/nc-news-fe/planning/UI_ncnews_5.png

# Task 4 View a list of all articles + home skeleton

    - home : create app.jsx render header + footer + main content(article list+card)
    - article list => article card (Title, Author, Date, Votes, Comment Count, image)
    - fetch API for data : https://snorlax-7fa6.onrender.com/api/articles,
         => install axios
         => article list fetch API by axios
         => import useEffect, useState from react
         => useState for [articles, setArticles, isLoading, setIsLoading, error, setError]
         => useEffect to fetch API data
         => put all fetch under api folder
         => fetch backend data {article.body} again from backend (remeber to npm run seed-dev after changes)
         => Footer : use link,useLocation from React Router
         => css need bottom and left incase overwritten

    - layout : card and clickable, stack, stick header and footer with 4 icons

# Task 5 View an individual article

    - Path : /articles/:article_id
    - react router => article card{link} click to article detail
    - pages/articleDetail => component commentList, CommentCard, CommentForm(later)
    - App + new route
    - ArticleCard => clickable
    - create ArticleDetail.jsx
    - add link to the header
    - add margin bottom at ArticleList to fix the content hidden problem
    - sticky header

# 6 View a list of comments associated with an article

    - Api endpoint :/api/articles/:article_id/comments
    - new components : CommentList + CommentCard
    - CommentList : useParams() to take article_id, fetch comments, control loading/error state, render all the CommentCard
    - CommentCard : fetch all single comment
    - ArticleDetail to add <CommentList />
    - future to correct** possible problems : comment list => infinite scroll (show more), sort comment + search comment, if votes is negative, show up dislike

# 7 Vote on an article

    - endpoint: PATCH /api/articles/:article_id => api/articles.js
    - body : { inc_votes: 1 } || { inc_votes: -1 }
    - two button UP || DOWN
    - show total votes => Optimistic Rendering
    - if Api fail, resume the votes and show error
    - ArticleDetail => new state : votes(how many likes now), voteError(rollback if error), isVoting(loading, avoid repeated loading)
    - useEffect to fetch data , params=article_id =>1. loading UI=setIsLoading(true) => 2.fetchArticleById = call API => 3. if success = save data, setIsLoading(false) => 4. failed = save err msg, setIsLoading(false)
    - sync votes by useEffect, params: article
    - handleVote function => optimistic rendering, if voting no pressed button, clear old error => api need to update the new vote, if error, push back to original vote
    - render UI, copy reddit vote UI, re-observer forum setting, text all align to left not center!
    - adjust css to a simple layout to see
    - p.s. 1 don't how to make articleCard and articleDetail have the voting function at the same time, now just display the votes and comment count in articleCard.
    - p.s.2 will try do the function "user only vote once on one article" after the login page is finished
    - p.s. 3 should add votes function to each comment as well (need to update the UI plan)

# 8 Post a new comment to an existing article

    - Endpoint: POST /api/articles/:article_id/comments
    - body: { username, body } => textarea required, posting disable textarea & sumbit button, after POST success clear textarea and add comment to commentlist, catch error
    - Create Component: CommentList add AddComment.jsx
    - fetch api : api/comment.js
    - connect CommentList & AddComment
    - P.S. need to do infinite scroll down and limit comemnt display later
    - reset user later, now default to specific user

# 9 Delete comments

    - API Endpoint : DELETE /api/comments/:comment_id
    - deleteComment() at api/comments.js
    - only can delete own comment
    - CommentCard => props => currentUser and add Delete button
    - condition: if comment.author === currentUser, display delete button
    - delete => disable button, deleting...
    - if API call success, remove comment
    - if API failed, err msg/ retry
    - need to define currentUser at App.jsx!!(when no login page)
    - pass the props => apps=> ArticleDetail =>CommentList => CommentCard
    - CommentList(pass currentUser to Params) => handleDelete function, add back CommendCard value of currentUser and onDelete

# 10 View a separate page for each topic with a list of related articles

    - endpoint: /api/topics => /topics/:topic_slang
    - api/topics.js
    - new component : TopicsList, TopicArticles
    - reuse ArticleList & Article Card
    - fetchArticlesByTopic() & fetchTopics  in api/articles.js
    - TopicArticles => Photo cover(fixed later) + componenet : articlelist
    - TopicList.jsx => useEfftect fetchTopics
    - add route to app

# 11 Sort articles

    - ArticleList => useState : sortby + order
    - ArticleList => render UI button group
    - articles.js adjust for sort by and order by
    - ArticleList  => amend useEffect fetch
    - touch up the css later

# 12 Error Handling

    - <Routes> => <Route path="*" element={<404NotFound />} />
    - 404NotFound.jsx => return not found msg
    - error setting has been done before in all the api fetching
