### CHECKLIST

nc-news-fe/
├── public/
│ └── index.html // first point entrance
├── src/
│ ├── assets/  
│ ├── components/  
│ │ ├── Header.jsx
│ │ ├── Footer.jsx
│ │ ├── ArticleCard.jsx
│ │ ├── ArticleList.jsx
│ │ ├── CommentCard.jsx
│ │ ├── ComemntList.jsx
│ │ ├── AddComment.jsx
│ │ ├── Pagination.jsx(to be finished)
│ │ ├── SortBy.jsx
│ │ └── ...  
│ ├── pages/  
│ │ ├── ArticleDetail.jsx  
│ │ ├── TopicList.jsx  
│ │ ├── TopicArticles.jsx  
│ │ ├── AddArticle.jsx (to be finished)
│ │ ├── LoginPage.jsx //user(to be finished)
│ │ └── NotFound.jsx // 404
│ ├── App.jsx //skeleton ＋ router ＋ state
│ ├── index.js // React entry point
│ ├── api/
│ │ ├── comments.jsx //axios - fetch data ＋ post data
│ │ ├── topics.jsx //axios - fetch data
│ │ └── articles.jsx // axios - fetch data
│ └── styles/ // css
│ └── App.css
├── package.json
└── README.md
