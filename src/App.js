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
            <HomePage />
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
