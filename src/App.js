
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';
import UserPage from './pages/UserPage'

import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
}
  from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch >
        <Route exact path="/"
          render={(props) => <HomePage {...props} />}
        />
        <Route exact path="/:username"
          render={(props) => <UserPage {...props} />}
        />
        <Route exact path="/paid/"
          render={(props) => <HomePage {...props} />}
        />

        <Route path="/404/" component={NotFoundPage} />
        <Redirect to='/404/' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
