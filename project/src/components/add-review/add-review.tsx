import {FormEvent, useEffect, useCallback} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import {Dispatch} from '@reduxjs/toolkit';

import {State} from '../../types/state';
import {ThunkAppDispatch} from '../../types/action';
import {CommentPost} from '../../types/comment';
import {UrlParams} from '../../types/url-params';

import {fetchMovie, submitComment} from '../../store/api-actions';
import {useUserReview} from '../../hooks/use-user-review';

import UserBlock from '../user-block/user-block';
import LoadingScreen from '../loading-screen/loading-screen';
import RatingInputs from './rating-inputs';

import {getMovie} from '../../store/movie-process/selectors';


const mapStateToProps = (state: State) => ({
  movie: getMovie(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  commentSubmitHandler(submitData: {movieId: number, commentPost: CommentPost}) {
    return (dispatch as ThunkAppDispatch)(submitComment(submitData));
  },
  loadMovie(movieId: number) {
    (dispatch as ThunkAppDispatch)(fetchMovie(movieId));
  },
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connected>;

function AddReview({movie, loadMovie, commentSubmitHandler}: PropsFromRedux):JSX.Element {
  const {id}: UrlParams = useParams();
  const [
    isFormSubmit,
    isCommentValid,
    comment,
    rating,
    handleRatingChange,
    handleCommentChange,
    handleSubmitChange,
  ] = useUserReview(commentSubmitHandler);

  useEffect(() => {
    const movieId = Number(id);
    loadMovie(movieId);
  }, [id, loadMovie]);

  const onChangeRating = useCallback((ratingUpdate) => {
    handleRatingChange(ratingUpdate);
  }, [handleRatingChange]);

  if (!movie) {
    return <LoadingScreen />;
  }

  const {id: movieId, name, posterImage, backgroundImage} = movie;

  function onReviewSubmit(e: FormEvent) {
    e.preventDefault();
    if (isFormSubmit || !isCommentValid) {
      return;
    }
    handleSubmitChange(movieId);
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
              <RatingInputs
                currentRating={rating}
                isDisabled={isFormSubmit}
                onChangeRating={onChangeRating}
              />
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              value={comment}
              onChange={(e) => handleCommentChange(e.target.value)}
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
