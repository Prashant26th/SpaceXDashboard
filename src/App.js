import Navbar from './component/nav-bar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Information from './pages/information';
import Cores from './pages/cores';
import Dragons from './pages/dragons';
import Capsules from './pages/capsules';
import CapsulePage from './pages/capsule-page';
import LandPads from './pages/landing-pads';

import './App.css';
import Login from './pages/login';

function App() {
  return (
    <>
      <Router>
      <Switch>
        <Route path='/' exact component={Login} />
        <>
        <Navbar />
          <Route path='/home' exact component={Home} />
          <Route path='/information' exact component={Information} />
          <Route path='/cores' exact component={Cores} />
          <Route path='/dragons' exact component={Dragons} />
          <Route path='/capsules' exact component={Capsules} />
          <Route path='/capsules/:id' exact component={CapsulePage} />
          <Route path='/landing-pads' exact component={LandPads} />
        </>
        </Switch>
      </Router>
    </>
  );
}

export default App;
