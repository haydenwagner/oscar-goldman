//https://scotch.io/tutorials/mean-app-with-angular-2-and-the-angular-cli
// ^check this after getting mongodb working
// ctrl+f 'server/routes/api.js

//maybe check this too: https://scotch.io/tutorials/angular-2-http-requests-with-observables

const express = require('express');
const router = express.Router();
const path = require('path');

const fs = require('fs');
const md = require('node-markdown').Markdown;


const axios = require('axios');

// let instance = axios.create({
//     baseURL:
//   });

//will be cached, not good for actual use
//let posts = require('../posts/posts.json');
let posts = require('../posts/posts.json');
// console.log(posts);

posts.forEach(function(p){
  if(p.mdFileID){
    fs.readFile(path.resolve(__dirname,'../_markdown/' + p.mdFileID + '.md'), (err, data) => {
      if(err) throw err;
      p.markdown = md(data.toString());
    })
  }
});

router.get('/', (req, res) => {
  res.send('api works');
});

//get all posts
router.get('/posts', (req, res) => {
  //this is where axios async call to database and promise will go
  res.status(200).json(posts);
  // console.log(posts);
})

router.get('/post/:post_id', (req, res) => {
  console.log(req.params.post_id);
  let post = getPost(req.params.post_id);

  if(post){
    res.status(200).json(post);
  }
  else{
    res.status(404);
  }
  console.log(post);
})

module.exports = router;


function getPost(post_id){
  if(posts){
    return posts.filter(post => {
      console.log(typeof post_id);
      console.log(typeof post.id);
      console.log(post.id === post_id);
      return post.id === post_id;
    })[0];
  }
  else{
    throw Error('No posts available');
  }
}
