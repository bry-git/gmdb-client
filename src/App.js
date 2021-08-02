
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import MovieGallery from './MovieGallery';

const App = () => {
  const handleSubmit = (inputValue) => {
    console.log('App', inputValue);
  }
  return (
  <Switch>
    <div className="App">
      <NavBar onSubmit={handleSubmit}/>
      <Route exact path="/" component={MovieGallery}></Route>
      <Route exact path="/login" component={Login}></Route>
    </div>
  </Switch>
    
  );
}

export default App;
