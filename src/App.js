import logo from './logo.svg';
import './styles.css';
import Home from './components/Home';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './Redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Home></Home>
      </div>
    </Provider>
  );
}

export default App;
