const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'fa420920',
      title: 'First server-side post',
      content: 'This is coming from the server'
     },
     {
       id: 'fdas2030238402',
       title: 'Second server-side post',
       content: 'Some more content'
     }
  ];
  res.status(200).json({
    message: 'Posts fetched succesfully!',
    posts: posts,
  });
});

module.exports = app;
