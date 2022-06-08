# GameReviews

## API usage

- All reviews (GET): `/api/v1/reviews`

- Review by ID (GET): `/api/v1/reviews/id`
    - Params: `id`

- Search by title (GET): `/api/v1/search?title=abc`
    - Query params: `title`

- Create review (POST): `/api/v1/reviews`
    - Body: `{ title: "Name", score: 5, review: "This is a review" }`
      
- Update review title (PUT): `/api/v1/reviews/id`
    - Params: `id`
    - Body `{ name: "abc" }`

- Delete review by ID (DELETE): `/api/v1/review/id`
    - Params: `id`


## Run server
- `git clone https://github.com/rauhaanr/gamereviews`
- `npm install`
- `npm start`

## Run serverless
- `npm run serverless`
