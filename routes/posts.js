const express = require('express');
const mongoose = require('mongoose');
const Posts = require('../models/posts');

const router = express.Router();

// Save Posts
router.post('/post/save', (req, res) => {
   let newPost = new Posts(req.body);
   newPost.save((err) => {
      if (err) {
         return res.status(400).json({
            error: err,
         });
      }
      return res.status(200).json({
         success: 'Posts saved successfully!',
      });
   });
});

// Get Posts
router.get('/posts', (req, res) => {
   Posts.find().exec((err, posts) => {
      if (err) {
         return res.status(400).json({
            error: err,
         });
      }
      return res.status(200).json({
         success: 'Posts retrieved successfully!',
         existingPosts: posts,
      });
   });
});

// Update Posts
router.put('/post/update/:id', (req, res) => {
   Posts.findByIdAndUpdate(
      req.params.id,
      {
         $set: req.body,
      },
      (err, post) => {
         if (err) {
            return res.status(400).json({
               error: err,
            });
         }
         return res.status(200).json({
            success: 'Posts updated successfully!',
         });
      }
   );
});

// Delete Posts
router.delete('./post/delete/:id', (req, res) => {
   Posts.findByIdAndRemove(req.params.id).exec((err, deletedPost) => {
      if (err) {
         return res.status(400).json({
            error: 'Error while deleting post',
         });
      }
      return res.status(200).json({
         success: 'Post deleted successfully!',
         deletedPost,
      });
   });
});

module.exports = router;
