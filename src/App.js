import { useSelector } from "react-redux";
import { LoginUser , updateUserName } from './features/User';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import PassRestore from './Pages/PassRestore';
import Settings from './Pages/Settings';
import Profile from './Pages/Profile';
import FAQ from './Pages/FAQ';

function App() {
  const { users, session, theme } = useSelector((state) => state.app.value);
  const current_theme = theme.filter((theme) => theme.id == 1)[0];
  const app_theme = current_theme.theme_darck ?  'dark' : '';
  // If user logged 
  const is_session = session.map((sess) => {
    if ( sess.id == 1 && sess.sessionId !== "") {
        return true
    }
    return false
  })

  return (
      <div className={"App " + app_theme}>
        <BrowserRouter>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/password_change" component={PassRestore} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/faq" component={FAQ} />
            { is_session[0] ? <Redirect exact to="/" />  : <Redirect exact to="/login"  /> }
        </BrowserRouter>
      </div>
    );
  }

export default App;