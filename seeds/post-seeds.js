const { Post } = require('../models');

const postdata = [
  {
    title: 'Capsule Corp launches new Radar',
    post_content: 'New radar now comes in different color options and better proximity senor!',
    user_id: 1
  },
  {
    title: 'Leaf village to get Ramen Robo',
    post_content: 'New AI advances have paved the way for a ramen making robot',
    user_id: 2
  },
  {
    title: 'Traveling to the moon unsafe?',
    post_content: 'Recent studies have found that ninjas should not travel to the moon',
    user_id: 3
  },
  {
    title: 'New Saiyan Pod in development!!',
    post_content: 'The new pod in development with Capsule Corp and Anbu Intel Division paves the way for space travel',
    user_id: 4
  },
  {
    title: 'New M1 and Tensor Chip battle! ',
    post_content: 'Both apple and google now have their own CPU creating an inner battle for efficiency and cost',
    user_id: 5
  },
  {
    title: 'Ciri or Siri',
    post_content: `Should Siri have an option to use Ciri's voice from The Witcher!`,
    user_id: 6
  },
  {
    title: 'Planet Namek: New Hope ',
    post_content: 'NASA has recently discovered an uninhabited planet, with hopes to give the Namekians a new home ',
    user_id: 7
  },
  {
    title: 'Spirit energy source?',
    post_content: 'New studies are being conducted with hopes to harvest spirit energy to combat fossil fuel waste',
    user_id: 8
  },
  {
    title: 'Immortality, a new possibility?',
    post_content: 'Orochimaru has been secretly conducting studies on immortality technology, to perserve humanity',
    user_id: 9
  },
  {
    title: 'Saiyan vs Uzumaki',
    post_content: 'Who would win? Sorry, I know this is not tech related, but honestly, who?',
    user_id: 10
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
