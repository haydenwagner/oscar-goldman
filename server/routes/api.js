//todo...take 'post' usage out...have it be article or something..confusing on server

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

//This is bad...in future this should happen once when a new MD file is posted. Then the text
//file of the converted MD file should be saved on the server
// posts.forEach(function(p){
//   if(p.mdFileID){
//     fs.readFile(path.resolve(__dirname,'../_markdown/' + p.mdFileID + '.md'), (err, data) => {
//       if(err) throw err;
//       //p.markdown = md(data.toString());
//       p.markdown = marked(data.toString());
//     })
//   }
// });
function addMarkdownContent(post, cb){
    fs.readFile(path.resolve(__dirname,'../_markdown/' + post.mdFileID + '.md'), (err, data) => {
        if(err) cb(err, post);
        else{
            post.markdown = marked(data.toString());
            cb(null, post);
        }
    })
}

router.get('/', (req, res) => {
  console.log(res);
    res.sendFile('public/api.html', {root: __dirname + '/../'});
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
    try {
        post.markdown = addMarkdownContent(post, sendRes);
    }catch(e){
        console.error(e);
    }
    function sendRes(err,post){
        if(err) {
            res.status(500);
            throw err;
        }
        else
            res.status(200).json(post);
    }
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
      return post.url === post_url;
    })[0];
  }
  else{
    throw Error('Requested post does not exist or is available');
  }
}
