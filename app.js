const express = require('express');
const mongoose = require('mongoose');
const serverless = require("serverless-http");
const reviewsList = require('./routes/reviewOps');
const searchReview = require('./routes/search');
const Review = require('./models/review');

app = express();

// Connect to MongoDB
const dbURI = "mongodb+srv://rau:123@gamereviews.czlmiyz.mongodb.net/reviews?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => {
        console.log('Connected to DB')
        app.listen(5000, () => {
            console.log('Listening on port 5000');
        }) 
    })
    .catch((err) => console.log(err))

// Use middleware
app.use(express.static('./public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/api/v1/reviews', reviewsList);
app.use('/api/v1/search', searchReview);

module.exports.handler = serverless(app);