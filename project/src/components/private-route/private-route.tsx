import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {History} from 'history';
import {State} from '../../types/state';
import {AppRoute} from '../../const';
import {getIsUserAuthorized} from '../../store/user-process/selectors';

type RenderFuncProps = {
  history: History<unknown>;
}

type PrivateRouteProps = RouteProps & {
  render: (props: RenderFuncProps) => JSX.Element;
}

const mapStateToProps = (state: State) => ({
  isUserAuthorized: getIsUserAuthorized(state),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & PrivateRouteProps;

function PrivateRoute(props: ConnectedComponentProps): JSX.Element {
  const {exact, path, render, isUserAuthorized} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => (
        isUserAuthorized
          ? render(routeProps)
          : <Redirect to={AppRoute.SignIn} />
      )}
    />
  );
}

export {PrivateRoute};
export default connector(PrivateRoute);
