import RatingInput from './rating-input';
import React, {Fragment, ChangeEvent} from 'react';

import {RATING_MAX} from '../../const';

type RatingInputsProps = {
  currentRating: string,
  isDisabled: boolean,
  onChangeRating: (rating: string) => void,
}

function RatingInputs({currentRating, isDisabled, onChangeRating}: RatingInputsProps): JSX.Element {
  const handleRatingChange = (e: ChangeEvent<HTMLInputElement>) => onChangeRating(e.target.value);

  const ratings = new Array(RATING_MAX).fill(null);
  return (
    <Fragment>
      {ratings.map((_, index) => {
        const rating = RATING_MAX - index;
        return (
          <RatingInput
            ratingValue={`${rating}`}
            changeRating={handleRatingChange}
            key={`rating${rating}`}
            checked={currentRating === `${rating}`}
            disabled={isDisabled}
          />
        );
      })}
    </Fragment>
  );
}

export default React.memo(RatingInputs);
