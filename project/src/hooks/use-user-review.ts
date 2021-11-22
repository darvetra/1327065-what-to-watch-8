import {useState} from 'react';
import {AxiosError} from 'axios';

import browserHistory from '../browser-history';
import {validateTextLength} from '../utils';
import {AppRoute, ResponseStatusCodes, RouteParams, RATING_DEFAULT} from '../const';

import {CommentPost} from '../types/comment';


type Rating = string;
type Review = string;

type ResultUserReview = [
  isFormSubmit: boolean,
  isReviewValid: boolean,
  review: Review,
  rating: Rating,
  handleRatingChange: (rating: Rating) => void,
  handleReviewChange: (text: Review) => void,
  handleFormSubmit: (movieId: number) => void,
]

type SubmitData = {
  movieId: number,
  commentPost: CommentPost,
}

function useUserReview(onSubmit: (submitData: SubmitData) => Promise<void>): ResultUserReview {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(RATING_DEFAULT);
  const [isCommentValid, setIsCommentValid] = useState(false);
  const [isFormSubmit, setIsFormSubmit] = useState(false);

  function handleReviewChange(text: Review) {
    setComment(text);
    setIsCommentValid(validateTextLength(text.trim()));
  }

  function handleRatingChange(ratingUpdate: Rating) {
    setRating(ratingUpdate);
  }

  function handleFormSubmit(movieId: number) {
    setIsFormSubmit(true);
    onSubmit({
      movieId,
      commentPost: {
        rating: Number(rating),
        comment: comment.trim(),
      },
    })
      .then(() => {
        browserHistory.push(AppRoute.Film.replace(RouteParams.ID, movieId.toString()));
      })
      .catch((error: AxiosError) => {
        if (error.response?.status === ResponseStatusCodes.BadRequest) {
          setIsFormSubmit(false);
        }
      });
  }

  return [
    isFormSubmit,
    isCommentValid,
    comment,
    rating,
    handleRatingChange,
    handleReviewChange,
    handleFormSubmit,
  ];
}

export {useUserReview};
