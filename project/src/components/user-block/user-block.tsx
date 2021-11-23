import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {AppRoute} from '../../const';

import {logoutAction} from '../../store/api-actions';
import {getIsUserAuthorized} from '../../store/user-process/selectors';
import {getUser} from '../../store/user-process/selectors';


function UserBlock(): JSX.Element {
  const authorizationStatus = useSelector(getIsUserAuthorized);
  const user = useSelector(getUser);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={AppRoute.MyList}>
            <img
              src={user.avatarUrl === '' ? 'img/avatar.jpg' : user.avatarUrl}
              alt={user.name}
              width="63"
              height="63"
            />
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        {authorizationStatus ?
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

export default UserBlock;
