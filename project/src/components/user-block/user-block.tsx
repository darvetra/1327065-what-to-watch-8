import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import {ThunkAppDispatch} from '../../types/action';
import {State} from '../../types/state';

import {AppRoute} from '../../const';

import {logoutAction} from '../../store/api-actions';
import {getIsUserAuthorized} from '../../store/user-process/selectors';

const mapStateToProps = (state: State) => ({
  isUserAuthorized: getIsUserAuthorized(state),
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onLogout() {
    dispatch(logoutAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function UserBlock(props: PropsFromRedux): JSX.Element {
  const {isUserAuthorized, onLogout} = props;

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img
            src="img/avatar.jpg"
            alt="User avatar"
            width="63"
            height="63"
          />
        </div>
      </li>
      <li className="user-block__item">
        {isUserAuthorized ?
          <Link
            to='/'
            className="user-block__link"
            onClick={() => onLogout()}
          >
            Sign out
          </Link> :
          <Link className="user-block__link" to={AppRoute.SignIn}>Sign in</Link>}
      </li>
    </ul>
  );
}

export {UserBlock};
export default connector(UserBlock);
