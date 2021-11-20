import {Dispatch, FormEvent, ChangeEvent, useEffect, useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Link, useParams} from 'react-router-dom';

import {State} from '../../types/state';
import {ThunkAppDispatch, Actions} from '../../types/action';
import {CommentPost} from '../../types/comment';
import {UrlParams} from '../../types/url-params';

import {validateTextLength} from '../../utils';

import {fetchMovie, submitComment} from '../../store/api-actions';

import UserBlock from '../user-block/user-block';
import LoadingScreen from '../loading-screen/loading-screen';
import RatingInput from '../rating-input/rating-input';

import {RATING_DEFAULT, RATING_MIN, RATING_MAX} from '../../const';

const mapStateToProps = ({authorizationStatus, movie}: State) => ({
  authorizationStatus,
  movie,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  commentSubmitHandler(submitData: {movieId: number, commentPost: CommentPost}) {
    return (dispatch as ThunkAppDispatch)(submitComment(submitData));
  },
  loadMovie(movieId: number) {
    (dispatch as ThunkAppDispatch)(fetchMovie(movieId));
  },
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type PropsFormRedux = ConnectedProps<typeof connected>;

function AddReview({movie, loadMovie, commentSubmitHandler}: PropsFormRedux):JSX.Element {
  const {id}: UrlParams = useParams();
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(RATING_DEFAULT);
  const [isCommentValid, setIsCommentValid] = useState(false);
  const [isFormSubmit, setIsFormSubmit] = useState(false);

  useEffect(() => {
    const movieId = Number(id);
    loadMovie(movieId);
  }, [id, loadMovie]);

  if (!movie) {
    return <LoadingScreen />;
  }

  const {id: movieId, name, posterImage, backgroundImage} = movie;

  function createRatingInputs() {
    const ratings = [];
    for (let i = RATING_MAX; i >= RATING_MIN; i--) {
      ratings.push((
        <RatingInput
          ratingValue={`${i}`}
          changeRating={onChangeRating}
          key={`rating${i}`}
          checked={rating === `${i}`}
          disabled={isFormSubmit}
        />
      ));
    }
    return ratings;
  }

  function onChangeRating(e: ChangeEvent<HTMLInputElement>) {
    setRating(e.target.value);
  }

  function onChangeReview(e: ChangeEvent<HTMLTextAreaElement>) {
    const text = e.target.value;
    setComment(text);
    setIsCommentValid(validateTextLength(text.trim()));
  }

  function onReviewSubmit(e: FormEvent) {
    e.preventDefault();
    if (isFormSubmit) {
      return;
    }
    if (!isCommentValid) {
      return;
    }

    setIsFormSubmit(true);
    commentSubmitHandler({
      movieId,
      commentPost: {
        rating: Number(rating),
        comment: comment.trim(),
      },
    })
      .then(() => {
        setComment('');
        setRating(RATING_DEFAULT);
        setIsCommentValid(false);
        setIsFormSubmit(false);
      });
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to='/' className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <form
          action="#"
          className="add-review__form"
          onSubmit={onReviewSubmit}
        >
          <div className="rating">
            <div className="rating__stars">
              {createRatingInputs()}
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              value={comment}
              onChange={onChangeReview}
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              disabled={isFormSubmit}
            />
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                disabled={!isCommentValid || isFormSubmit}
              >
                Post
              </button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
}

export {AddReview};
export default connected(AddReview);
