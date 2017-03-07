//https://scotch.io/tutorials/mean-app-with-angular-2-and-the-angular-cli
// ^check this after getting mongodb working
// ctrl+f 'server/routes/api.js

//maybe check this too: https://scotch.io/tutorials/angular-2-http-requests-with-observables

const express = require('express');
const router = express.Router();
const path = require('path');

const fs = require('fs');
const marked = require('marked');


const axios = require('axios');

// let instance = axios.create({
//     baseURL:
//   });

//will be cached, not good for actual use
//let posts = require('../posts/posts.json');
let posts = require('../posts/posts.json');
// console.log(posts);

marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});

posts.forEach(function(p){
  if(p.mdFileID){
    fs.readFile(path.resolve(__dirname,'../_markdown/' + p.mdFileID + '.md'), (err, data) => {
      if(err) throw err;
      //p.markdown = md(data.toString());
      p.markdown = marked(data.toString());
    })
  }
});

router.get('/', (req, res) => {
  console.log(res);
    res.send('api works');
});

//get all posts
router.get('/posts', (req, res) => {
  //this is where axios async call to database and promise will go
  res.status(200).json(posts);
  // console.log(posts);
})

router.get('/post/:post_url', (req, res) => {
  console.log(req.params.post_id);

  let post = getPost(req.params.post_url);

  if(post){
    res.status(200).json(post);
  }
  else{
    res.status(404);
  }
  console.log(post);
})

module.exports = router;


function getPost(post_url){
  if(posts){
    return posts.filter(post => {
      console.log(typeof post_url);
      console.log(typeof post.url);
      console.log(post.url === post_url);
      return post.url === post_url;
    })[0];
  }
  else{
    throw Error('Requested post does not exist or is available');
  }
}
