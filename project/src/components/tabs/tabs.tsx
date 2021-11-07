import {Fragment, useState} from 'react';

import {MovieType} from '../../types/movie';
import {CommentsType} from '../../types/comment';

import MoviePageOverview from '../movie-page/movie-page-overview';
import MoviePageDetails from '../movie-page/movie-page-details';
import MoviePageReviews from '../movie-page/movie-page-reviews';

const tabStyle = {
  background: 'transparent',
  border: 0,
};

type TabsProps = {
  currentMovie: MovieType;
  currentComments: CommentsType;
};

function Tabs({currentMovie, currentComments}: TabsProps): JSX.Element {

  const tabs = ['Overview', 'Details', 'Reviews'];

  const [active, setActive] = useState(tabs[0]);

  return (
    <Fragment>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">

          {tabs.map((tab) => (
            <li className={`film-nav__item ${tab === active && 'film-nav__item--active'}`} key={tab}>
              <button className={'film-nav__link'} style={tabStyle} type="button" onClick={() => setActive(tab)}>
                {tab}
              </button>
            </li>
          ))}

        </ul>
      </nav>

      {active === tabs[0] && <MoviePageOverview movie={currentMovie} />}

      {active === tabs[1] && <MoviePageDetails movie={currentMovie} />}

      {active === tabs[2] && <MoviePageReviews comments={currentComments} />}

    </Fragment>
  );
}

export default Tabs;
