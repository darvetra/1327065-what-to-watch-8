import {Link} from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <h3>404 Not Found</h3>
      <Link to="/">go to Main Page</Link>
    </>
  );
}

export default NotFoundScreen;
