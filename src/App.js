import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/Home';
import Detail from './routes/Detail';
import './scss/font.scss';
import './scss/common.scss';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route exact path={`/`} element={<Home />} />
        <Route exact path={`/movie/:id`} element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
