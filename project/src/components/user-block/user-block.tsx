import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../../store/api-actions';

function UserBlock(): JSX.Element {

  const dispatch = useDispatch();

  const handleUserLogOut = () => {
    dispatch(logoutAction());
  };

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
        <Link
          to='/'
          className="user-block__link"
          onClick={handleUserLogOut}
        >
          Sign out
        </Link>
      </li>
    </ul>
  );
}

export default UserBlock;
