import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';
import { Journal } from './pages/Journal/Journal';
import { Quiz } from './pages/Quiz/Quiz';
import { Progress } from './pages/Progress/Progress';
import { Nutrition } from './pages/Nutrition/Nutrition';
import { Exercises } from './pages/Exercises/Exercises';
import { Resources } from './pages/Resources/Resources';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/Journal" component={Journal} />
          <Route path="/Quiz" component={Quiz} />
          <Route path="/Progress" component={Progress} />
          <Route path="/Nutrition" component={Nutrition} />
          <Route path="/Exercises" component={Exercises} />
          <Route path="/Resources" component={Resources} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
