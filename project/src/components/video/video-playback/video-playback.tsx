import {MovieType} from '../../../types/movie';
import {useRef} from 'react';

type VideoPlaybackProps = {
  movie: MovieType;
  autoPlay: boolean;
  muted: boolean;
}

function VideoPlayback({movie, autoPlay, muted}: VideoPlaybackProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <video
      src={movie.videoLink}
      className="player__video"
      poster={movie.previewVideoLink}
      ref={videoRef}
      muted={muted}
      autoPlay={autoPlay}
    />
  );
}

export default VideoPlayback;
