const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
  title: {
    type: 'string',
  },
  postText: {
    type: String,
    required: 'You need to make a post',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  postOwner: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
      },
      commentOwner: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now, 
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Post = model('Post', postSchema);

module.exports = Post;
