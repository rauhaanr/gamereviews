const express = require('express');
const reviewsList = require('./routes/reviewOps');
const searchReview = require('./routes/search');

app = express();
app.use(express.static('./public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/api/v1/reviews', reviewsList);
app.use('/api/v1/search', searchReview);

app.listen(5000, () => {
    console.log('Listening on port 5000');
}) 