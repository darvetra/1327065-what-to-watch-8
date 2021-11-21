import {ChangeEvent} from 'react';

type RatingInputProps = {
  ratingValue: string,
  changeRating: (e: ChangeEvent<HTMLInputElement>) => void,
  checked?: boolean,
  disabled?: boolean,
}

function RatingInput({ratingValue, changeRating, checked, disabled}: RatingInputProps): JSX.Element {
  return (
    <>
      <input
        className="rating__input"
        id={`star-${ratingValue}`}
        type="radio"
        name="rating"
        value={ratingValue}
        onChange={changeRating}
        checked={checked}
        disabled={disabled}
      />
      <label className="rating__label" htmlFor={`star-${ratingValue}`}>Rating ${ratingValue}</label>
    </>
  );
}

export default RatingInput;
