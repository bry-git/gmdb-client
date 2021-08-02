
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, BrowserRouter as Router, } from 'react-router-dom';
import Login from './Login';
import MovieGallery from './MovieGallery';

const App = () => {
  const handleSubmit = (inputValue) => {
    console.log('App', inputValue);
  }
  return (
    <Router>
      <Switch>
        <div className="App">
          <NavBar onSubmit={handleSubmit} />
          <Route exact path="/" component={MovieGallery}></Route>
          <Route exact path="/login" component={Login}></Route>
        </div>
      </Switch>
    </Router>

  );
}

export default App;
