export type ButtonPlayProps = {
  onPlayClick: () => void,
}
function ButtonPlay({onPlayClick}: ButtonPlayProps): JSX.Element {
  return (
    <button
      className="btn btn--play film-card__button"
      type="button"
      onClick={onPlayClick}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s" />
      </svg>
      <span>Play</span>
    </button>
  );
}

export default ButtonPlay;
