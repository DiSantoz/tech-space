const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Great post!',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'This is interesting!',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'WOW!',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'I wonder...',
    user_id: 3,
    post_id: 4
  },
  {
    comment_text: 'This is exciting!',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: `Can't wait to see the outcome!`,
    user_id: 1,
    post_id: 6
  },
  {
    comment_text: 'Incrediable',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'I need to read more on this',
    user_id: 7,
    post_id: 8
  },
  {
    comment_text: 'NO way!',
    user_id: 6,
    post_id: 9
  },
  {
    comment_text: 'Awesome',
    user_id: 6,
    post_id: 10
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
