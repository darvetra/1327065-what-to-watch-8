import {CommentsType} from '../../types/comment';

import Review from './review';

type MoviePageReviewsProps = {
  comments: CommentsType;
}

function MoviePageReviews({comments}: MoviePageReviewsProps): JSX.Element {
  const halfOfTheComments = Math.round(comments.length / 2) - 1;

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">

        {comments.map(
          (review, i) =>
            i <= halfOfTheComments && (
              <Review key={review.id} comment={review} />
            ),
        )}

      </div>
      <div className="film-card__reviews-col">

        {comments.map(
          (review, i) =>
            i > halfOfTheComments && (
              <Review key={review.id} comment={review} />
            ),
        )}

      </div>
    </div>
  );
}

export default MoviePageReviews;
