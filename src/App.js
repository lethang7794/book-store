import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import MainNavBar from './components/MainNavBar';
import BookDetailPage from './components/BookDetailPage';
import Favorites from './components/Favorites';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';

function App() {
  const BACKEND_API = process.env.REACT_APP_BACKEND_API;
  return (
    <div className='App'>
      <MainNavBar />
      <Container>
        <Switch>
          <Route exact path='/books/:id'>
            <BookDetailPage />
          </Route>
          <Route exact path='/favorites'>
            <Favorites />
          </Route>
          <Route exact path='/'>
            <HomePage BACKEND_API={BACKEND_API} />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
