const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const reviewSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Blog;

// const reviews = [
//   {
//     id: 1,
//     name: 'god of war',
//     rating: 4,
//     desc: `A true return to form for Kratos`,
//   },
//   {
//     id: 2,
//     name: 'legend of zelda',
//     rating: 5,
//     desc: `Legend of Zelda revolutionizes what it means to be an open-world RPG`,
//   },
//   {
//     id: 3,
//     name: 'judgment',
//     rating: 3,
//     desc: `A must-play for fans of the Yakuza series`,
//   },
//   {
//     id: 4,
//     name: 'elden ring',
//     rating: 5,
//     desc: `From Software's biggest achievement to date`,
//   },
//   {
//     id: 5,
//     name: 'prince of persia',
//     rating: 4,
//     desc: `The father of all 3D puzzle platformers`,
//   },
//   {
//     id: 6,
//     name: 'phantom pain',
//     rating: 5,
//     desc: `Kojima y u do dis?`,
//   },
//   {
//     id: 7,
//     name: 'doom',
//     rating: 5,
//     desc: `Rip and tear!`,
//   },
//   {
//     id: 8,
//     name: 'dota 2',
//     rating: 3,
//     desc: `You do not know addiction until Dota 2!`,
//   },
// ]

// module.exports = { reviews }
