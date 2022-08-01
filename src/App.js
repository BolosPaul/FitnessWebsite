import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar.js';
import { Banner } from './components/Banner.js';
import { BMI } from './components/BMI.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <BMI />
    </div>
  );
}

export default App;
