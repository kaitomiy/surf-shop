const express = require('express');
const router = express.Router({ mergeParams: true });
const { asyncErrorHandler, isReviewAuthor } = require('../midlleware');
const {
  reviewCreate,
  reviewUpdate,
  reviewDestroy,
} = require('../controllers/reviews');

/* POST reviews create /posts/:id/reviews  */
router.post('/', asyncErrorHandler(reviewCreate));

/* PUT reviews update /posts/:id/reviews/:review_id  */
router.put('/:review_id', isReviewAuthor, asyncErrorHandler(reviewUpdate));

/* DELETE reviews destory /posts/:id/reviews/:review_id  */
router.delete('/:review_id', isReviewAuthor, asyncErrorHandler(reviewDestroy));

module.exports = router;
